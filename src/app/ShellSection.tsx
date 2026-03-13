import type { PropsWithChildren } from 'react'

interface ShellSectionProps extends PropsWithChildren {
  title: string
  eyebrow: string
}

export function ShellSection({
  children,
  title,
  eyebrow,
}: ShellSectionProps) {
  return (
    <section className='bg-[var(--surface-base)] px-5 py-6 sm:px-6'>
      <div className='mb-5 space-y-2'>
        <p className='text-xs uppercase tracking-[0.28em] text-[var(--accent)]'>
          {title}
        </p>
        <h2 className='text-lg font-semibold text-[var(--text-primary)]'>
          {eyebrow}
        </h2>
      </div>
      {children}
    </section>
  )
}
