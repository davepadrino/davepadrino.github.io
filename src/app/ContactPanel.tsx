import type {
  ProfileLanguage,
  ProfilePublication,
} from '../profile/profile.types'
import type { ShellContactAction } from './PortfolioShellContent'
import { ShellSection } from './ShellSection'

interface ContactPanelProps {
  contactActions: ShellContactAction[]
  languages: ProfileLanguage[]
  publications: ProfilePublication[]
}

export function ContactPanel({
  contactActions,
  languages,
  publications,
}: ContactPanelProps) {
  const latestPublication = publications[0]

  return (
    <ShellSection
      title='Contact Port'
      eyebrow={`${contactActions.length} active channels`}
    >
      <ul className='space-y-3' aria-label='Contact actions'>
        {contactActions.map((action) => (
          <li key={`${action.label}-${action.href}`}>
            <a
              className='group flex items-center justify-between gap-3 rounded-2xl border border-[var(--border-soft)] bg-black/20 px-4 py-3 transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]'
              href={action.href}
              aria-label={`Contact David Padrino Gonzalez via ${action.label}`}
            >
              <span className='shrink-0 text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)]'>
                {action.label}
              </span>
              <span className='min-w-0 break-all text-right text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]'>
                {action.detail}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className='mt-5 space-y-4'>
        <div>
          <p className='text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]'>
            Language badges
          </p>
          <ul className='mt-3 flex flex-wrap gap-2' aria-label='Language badges'>
            {languages.map((language) => (
              <li
                key={language.name}
                className='rounded-full border border-[var(--border-soft)] bg-[rgba(4,14,10,0.74)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--text-primary)]'
              >
                {language.name} · {language.proficiency}
              </li>
            ))}
          </ul>
        </div>
        {latestPublication ? (
          <article className='rounded-2xl border border-[var(--border-soft)] bg-[rgba(4,14,10,0.74)] p-4'>
            <p className='text-xs uppercase tracking-[0.24em] text-[var(--accent)]'>
              Publication
            </p>
            <p className='mt-2 text-sm leading-6 text-[var(--text-primary)]'>
              {latestPublication.title}
            </p>
          </article>
        ) : null}
      </div>
    </ShellSection>
  )
}
