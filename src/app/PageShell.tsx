import { ContactPanel } from './ContactPanel'
import { EducationSection } from './EducationSection'
import { ExperienceSection } from './ExperienceSection'
import type { PortfolioShellContent } from './PortfolioShellContent'
import { ShellSection } from './ShellSection'
import { SkillsPanel } from './SkillsPanel'
import { ServicesSection } from './ServicesSection'

interface PageShellProps {
  content: PortfolioShellContent
}

export function PageShell({ content }: PageShellProps) {
  return (
    <div className='min-h-screen bg-[var(--page-background)] px-4 py-5 text-[var(--text-primary)] sm:px-6 lg:px-8'>
      <div className='mx-auto flex min-h-[calc(100vh-2.5rem)] max-w-6xl flex-col overflow-hidden rounded-[28px] border border-[var(--border-strong)] bg-[var(--surface-strong)] shadow-[0_30px_120px_rgba(0,0,0,0.45)]'>
        <header className='flex flex-wrap items-center gap-3 border-b border-[var(--border-soft)] bg-black/20 px-5 py-4 text-xs uppercase tracking-[0.32em] text-[var(--text-muted)]'>
          <div className='flex items-center gap-2' aria-hidden='true'>
            <span className='h-3 w-3 rounded-full bg-[#ff5f56]' />
            <span className='h-3 w-3 rounded-full bg-[#ffbd2e]' />
            <span className='h-3 w-3 rounded-full bg-[#27c93f]' />
          </div>
          <p className='min-w-0 break-all'>portfolio://local-terminal</p>
          <p className='min-w-0 break-words sm:ml-auto sm:text-right'>
            status: {content.status}
          </p>
        </header>
        <div className='grid flex-1 gap-px bg-[var(--border-soft)] lg:grid-cols-[minmax(0,1.5fr)_minmax(20rem,0.95fr)]'>
          <main className='min-w-0 flex flex-col gap-px bg-[var(--border-soft)]'>
            <section className='grid gap-8 bg-[var(--surface-base)] px-5 py-8 sm:px-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)] lg:py-12'>
              <div className='min-w-0 space-y-6'>
                <p className='text-xs uppercase tracking-[0.32em] text-[var(--accent)]'>
                  {content.prompt}
                </p>
                <div className='space-y-4'>
                  <h1 className='text-4xl font-semibold tracking-tight text-white sm:text-5xl'>
                    {content.name}
                  </h1>
                  <p className='max-w-2xl text-lg leading-8 text-[var(--text-secondary)]'>
                    {content.headline}
                  </p>
                  <p className='max-w-2xl text-base leading-7 text-[var(--text-primary)]'>
                    {content.summary}
                  </p>
                </div>
                <div className='flex flex-wrap gap-3 text-sm text-[var(--text-secondary)]'>
                  <span>{content.location}</span>
                  <span className='text-[var(--border-strong)]'>//</span>
                  <a
                    className='break-all text-[var(--accent)]'
                    href={`mailto:${content.email}`}
                  >
                    {content.email}
                  </a>
                </div>
                <nav className='flex flex-wrap gap-3' aria-label='Profile links'>
                  {content.links.map((link) => (
                    <a
                      key={link.label}
                      className='rounded-full border border-[var(--border-strong)] px-4 py-2 text-sm text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]'
                      href={link.url}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
              <ShellSection title='Signal Board' eyebrow={content.tagline}>
                <dl className='grid gap-4 sm:grid-cols-3 lg:grid-cols-1'>
                  {content.metrics.map((metric) => (
                    <div key={metric.label} className='rounded-2xl border border-[var(--border-soft)] bg-black/20 p-4'>
                      <dt className='text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]'>
                        {metric.label}
                      </dt>
                      <dd className='mt-2 text-3xl font-semibold text-[var(--accent)]'>
                        {metric.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </ShellSection>
            </section>
            <ServicesSection services={content.services} />
            <ExperienceSection experience={content.experience} />
          </main>
          <aside className='min-w-0 grid gap-px bg-[var(--border-soft)]'>
            <EducationSection education={content.education} />
            <SkillsPanel skillGroups={content.skillGroups} />
            <ContactPanel
              contactActions={content.contactActions}
              languages={content.languages}
              publications={content.publications}
            />
          </aside>
        </div>
      </div>
    </div>
  )
}
