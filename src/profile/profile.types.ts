export interface ProfileLink {
  label: string
  url: string
}

export interface ProfileBasics {
  fullName: string
  headline: string
  location: string
  email: string
  tagline: string
  summary: string[]
  links: ProfileLink[]
}

export interface ProfileLanguage {
  name: string
  proficiency: string
}

export interface ProfilePublication {
  title: string
  authors: string[]
}

export interface ProfileSkillGroup {
  title: string
  summary: string
  skills: string[]
}

export interface ProfileService {
  title: string
  description: string
  tags: string[]
}

export interface ExperiencePosition {
  title: string
  startDate: string
  endDate: string
  durationLabel: string
  summary: string
  highlights: string[]
  technologies: string[]
}

export interface ExperienceCompany {
  company: string
  location: string
  positions: ExperiencePosition[]
}

export interface EducationProgram {
  degree: string
  field: string
  startYear: number
  endYear: number
}

export interface EducationEntry {
  institution: string
  location: string
  programs: EducationProgram[]
}

export interface ProfileDocument {
  basics: ProfileBasics
  skills: ProfileSkillGroup[]
  languages: ProfileLanguage[]
  publications: ProfilePublication[]
  services: ProfileService[]
  experience: ExperienceCompany[]
  education: EducationEntry[]
}
