import { getProfile } from '../profile/profile.loader'

export interface ShellLink {
  label: string
  url: string
}

export interface ShellMetric {
  label: string
  value: string
}

export interface ShellContactAction {
  label: string
  href: string
  detail: string
}

export class PortfolioShellContent {
  private readonly profile = getProfile()
  private readonly latestCompany = this.profile.experience[0]
  private readonly latestRole = this.latestCompany?.positions[0]

  public readonly name = this.profile.basics.fullName
  public readonly headline = this.profile.basics.headline
  public readonly location = this.profile.basics.location
  public readonly email = this.profile.basics.email
  public readonly tagline = this.profile.basics.tagline
  public readonly summary = this.profile.basics.summary[0] ?? this.tagline
  public readonly prompt = this.buildPrompt()
  public readonly status = this.buildStatus()
  public readonly links = this.profile.basics.links.slice(0, 3)
  public readonly metrics = this.buildMetrics()
  public readonly skillGroups = this.profile.skills
  public readonly services = this.profile.services
  public readonly contactActions = this.buildContactActions()
  public readonly languages = this.profile.languages
  public readonly publications = this.profile.publications
  public readonly experience = this.profile.experience
  public readonly education = this.profile.education

  private buildPrompt(): string {
    const role = this.latestRole?.title.toLowerCase() ?? 'portfolio'

    return `boot profile --target "${role}"`
  }

  private buildStatus(): string {
    if (!this.latestRole || !this.latestCompany) {
      return 'profile loaded from local json'
    }

    return `${this.latestRole.title} at ${this.latestCompany.company}`
  }

  private buildMetrics(): ShellMetric[] {
    const roleCount = this.profile.experience.reduce(
      (total, company) => total + company.positions.length,
      0
    )
    const skillCount = this.profile.skills.reduce(
      (total, group) => total + group.skills.length,
      0
    )

    return [
      { label: 'companies', value: `${this.profile.experience.length}` },
      { label: 'roles', value: `${roleCount}` },
      { label: 'skills', value: `${skillCount}` },
    ]
  }

  private buildContactActions(): ShellContactAction[] {
    const emailAction: ShellContactAction = {
      label: 'Email',
      href: `mailto:${this.profile.basics.email}`,
      detail: this.profile.basics.email,
    }

    return [
      emailAction,
      ...this.profile.basics.links.map((link) => ({
        label: link.label,
        href: link.url,
        detail: this.formatLinkDetail(link.url),
      })),
    ]
  }

  private formatLinkDetail(url: string): string {
    try {
      return new URL(url).hostname.replace(/^www\./, '')
    } catch {
      return url
    }
  }
}
