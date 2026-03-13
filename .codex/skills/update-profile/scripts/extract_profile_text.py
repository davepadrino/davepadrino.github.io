#!/usr/bin/env python3
import shutil
import subprocess
import sys
from pathlib import Path


def run(command: list[str]) -> str:
    result = subprocess.run(command, check=True, capture_output=True, text=True)
    return result.stdout.strip()


def from_pdftotext(pdf_path: str) -> str | None:
    if not shutil.which('pdftotext'):
        return None
    return run(['pdftotext', pdf_path, '-'])


def from_mdls(pdf_path: str) -> str | None:
    if not shutil.which('mdls'):
        return None
    text = run(['mdls', '-raw', '-name', 'kMDItemTextContent', pdf_path])
    if text in {'(null)', '""', ''}:
        return None
    if text.startswith('"') and text.endswith('"'):
        return text[1:-1]
    return text


def from_strings(pdf_path: str) -> str | None:
    if not shutil.which('strings'):
        return None
    text = run(['strings', '-n', '6', pdf_path])
    return text or None


def normalize(text: str) -> str:
    lines = [line.rstrip() for line in text.replace('\r', '\n').split('\n')]
    compact = '\n'.join(lines).strip()
    while '\n\n\n' in compact:
        compact = compact.replace('\n\n\n', '\n\n')
    return compact


def main() -> int:
    if len(sys.argv) != 3:
        print('usage: extract_profile_text.py <input.pdf> <output.txt>', file=sys.stderr)
        return 1

    input_path = Path(sys.argv[1])
    output_path = Path(sys.argv[2])
    if not input_path.is_file():
        print(f'missing input pdf: {input_path}', file=sys.stderr)
        return 1

    for extractor in (from_pdftotext, from_mdls, from_strings):
        try:
            text = extractor(str(input_path))
        except subprocess.CalledProcessError:
            text = None
        if text:
            normalized = normalize(text)
            if normalized:
                output_path.write_text(normalized + '\n', encoding='utf-8')
                print(f'wrote {output_path}')
                return 0

    print('failed to extract readable text from pdf', file=sys.stderr)
    return 1


if __name__ == '__main__':
    raise SystemExit(main())
