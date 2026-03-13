import type { EducationEntry } from '../profile/profile.types'
import { ShellSection } from './ShellSection'

interface EducationSectionProps {
  education: EducationEntry[]
}

function formatProgramYears(startYear: number, endYear: number): string {
  return `${startYear}-${endYear}`
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <ShellSection
      title='Education Node'
      eyebrow={`${education.length} institution${education.length === 1 ? '' : 's'} mapped`}
    >
      <div className='space-y-4'>
        {education.map((entry) => (
          <article
            key={entry.institution}
            className='rounded-3xl border border-[var(--border-soft)] bg-black/20 p-4'
          >
            <div className='border-b border-[var(--border-soft)] pb-4'>
              <h3 className='text-lg font-semibold text-white'>{entry.institution}</h3>
              <p className='mt-1 text-sm text-[var(--text-secondary)]'>{entry.location}</p>
            </div>
            <div className='mt-4 space-y-3'>
              {entry.programs.map((program) => (
                <section
                  key={`${entry.institution}-${program.degree}-${program.field}`}
                  className='rounded-2xl border border-[var(--border-soft)] bg-[rgba(4,14,10,0.74)] p-4'
                >
                  <div className='flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between'>
                    <div>
                      <h4 className='text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]'>
                        {program.degree}
                      </h4>
                      <p className='mt-2 text-sm leading-6 text-[var(--text-primary)]'>
                        {program.field}
                      </p>
                    </div>
                    <p className='text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]'>
                      {formatProgramYears(program.startYear, program.endYear)}
                    </p>
                  </div>
                </section>
              ))}
            </div>
          </article>
        ))}
      </div>
    </ShellSection>
  )
}
