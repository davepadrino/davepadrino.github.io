#!/usr/bin/env python3
import json
import sys
from pathlib import Path
from typing import Any


def load_json(path: str) -> Any:
    return json.loads(Path(path).read_text(encoding='utf-8'))


def compare(left: Any, right: Any, path: str = '$') -> list[str]:
    if type(left) is not type(right):
        return [f'~ {path}: type {type(left).__name__} -> {type(right).__name__}']

    if isinstance(left, dict):
        changes: list[str] = []
        keys = list(dict.fromkeys([*left.keys(), *right.keys()]))
        for key in keys:
            child = f'{path}.{key}'
            if key not in left:
                changes.append(f'+ {child}')
                continue
            if key not in right:
                changes.append(f'- {child}')
                continue
            changes.extend(compare(left[key], right[key], child))
        return changes

    if isinstance(left, list):
        if left == right:
            return []
        return [f'~ {path}: list changed ({len(left)} -> {len(right)})']

    if left != right:
        return [f'~ {path}: {left!r} -> {right!r}']

    return []


def main() -> int:
    if len(sys.argv) != 3:
        print('usage: profile_diff.py <current.json> <candidate.json>', file=sys.stderr)
        return 1

    changes = compare(load_json(sys.argv[1]), load_json(sys.argv[2]))
    if not changes:
        print('No differences.')
        return 0

    print('\n'.join(changes))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
