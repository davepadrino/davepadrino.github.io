import type { ProfileService } from '../profile/profile.types'
import { ShellSection } from './ShellSection'

interface ServicesSectionProps {
  services: ProfileService[]
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <ShellSection
      title='Service Routes'
      eyebrow={`${services.length} ways to engage`}
    >
      <div className='grid gap-4 xl:grid-cols-3'>
        {services.map((service) => (
          <article
            key={service.title}
            className='rounded-3xl border border-[var(--border-soft)] bg-black/20 p-4 sm:p-5'
          >
            <div className='flex items-start justify-between gap-3'>
              <h3 className='text-lg font-semibold text-white'>{service.title}</h3>
              <span className='rounded-full border border-[var(--border-soft)] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[var(--accent)]'>
                Offer
              </span>
            </div>
            <p className='mt-3 text-sm leading-7 text-[var(--text-secondary)]'>
              {service.description}
            </p>
            <ul className='mt-4 flex flex-wrap gap-2' aria-label={`${service.title} tags`}>
              {service.tags.map((tag) => (
                <li
                  key={`${service.title}-${tag}`}
                  className='rounded-full border border-[var(--border-soft)] bg-[rgba(4,14,10,0.74)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--text-primary)]'
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </ShellSection>
  )
}
