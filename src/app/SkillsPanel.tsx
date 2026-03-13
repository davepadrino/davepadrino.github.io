import type { ProfileSkillGroup } from '../profile/profile.types'
import { ShellSection } from './ShellSection'

interface SkillsPanelProps {
  skillGroups: ProfileSkillGroup[]
}

export function SkillsPanel({ skillGroups }: SkillsPanelProps) {
  return (
    <ShellSection
      title='Skill Matrix'
      eyebrow={`${skillGroups.length} focus areas mapped`}
    >
      <div className='space-y-4'>
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className='rounded-3xl border border-[var(--border-soft)] bg-black/20 p-4'
          >
            <div className='flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between'>
              <div>
                <h3 className='text-base font-semibold text-white'>{group.title}</h3>
                <p className='mt-2 text-sm leading-6 text-[var(--text-secondary)]'>
                  {group.summary}
                </p>
              </div>
              <p className='text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]'>
                {group.skills.length} skills
              </p>
            </div>
            <ul className='mt-4 flex flex-wrap gap-2' aria-label={`${group.title} skills`}>
              {group.skills.map((skill) => (
                <li
                  key={`${group.title}-${skill}`}
                  className='rounded-full border border-[var(--border-soft)] bg-[rgba(4,14,10,0.74)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--text-primary)]'
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </ShellSection>
  )
}
