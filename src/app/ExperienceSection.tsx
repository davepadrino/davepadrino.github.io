import type { ExperienceCompany } from '../profile/profile.types'
import { ShellSection } from './ShellSection'

interface ExperienceSectionProps {
  experience: ExperienceCompany[]
}

function formatRolePeriod(startDate: string, endDate: string): string {
  return `${startDate} -> ${endDate}`
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <ShellSection
      title='Experience Log'
      eyebrow={`${experience.length} companies tracked`}
    >
      <ol className='space-y-4' aria-label='Experience timeline'>
        {experience.map((company) => (
          <li key={company.company}>
            <article className='rounded-3xl border border-[var(--border-soft)] bg-black/20 p-4 sm:p-5'>
              <div className='flex flex-col gap-2 border-b border-[var(--border-soft)] pb-4 sm:flex-row sm:items-start sm:justify-between'>
                <div>
                  <h3 className='text-xl font-semibold text-white'>
                    {company.company}
                  </h3>
                  <p className='text-sm text-[var(--text-secondary)]'>
                    {company.location}
                  </p>
                </div>
                <p className='text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]'>
                  {company.positions.length} role
                  {company.positions.length === 1 ? '' : 's'}
                </p>
              </div>
              <div className='mt-4 space-y-4'>
                {company.positions.map((position) => (
                  <section
                    key={`${company.company}-${position.title}-${position.startDate}`}
                    className='rounded-2xl border border-[var(--border-soft)] bg-[rgba(4,14,10,0.74)] p-4'
                  >
                    <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
                      <div>
                        <h4 className='text-base font-semibold text-[var(--text-primary)]'>
                          {position.title}
                        </h4>
                        <p className='mt-1 text-sm text-[var(--accent)]'>
                          {position.durationLabel}
                        </p>
                      </div>
                      <p className='text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]'>
                        {formatRolePeriod(position.startDate, position.endDate)}
                      </p>
                    </div>
                    <p className='mt-3 text-sm leading-7 text-[var(--text-secondary)]'>
                      {position.summary}
                    </p>
                    {position.highlights[0] ? (
                      <p className='mt-3 border-l-2 border-[var(--accent)] pl-3 text-sm leading-6 text-[var(--text-primary)]'>
                        {position.highlights[0]}
                      </p>
                    ) : null}
                    <ul className='mt-4 flex flex-wrap gap-2' aria-label={`${position.title} technologies`}>
                      {position.technologies.map((technology) => (
                        <li
                          key={`${company.company}-${position.title}-${technology}`}
                          className='rounded-full border border-[var(--border-soft)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--text-secondary)]'
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </ShellSection>
  )
}
