import profileDocument from '../../db/profile.json'
import type {
  EducationEntry,
  EducationProgram,
  ExperienceCompany,
  ExperiencePosition,
  ProfileBasics,
  ProfileDocument,
  ProfileLanguage,
  ProfileLink,
  ProfilePublication,
  ProfileSkillGroup,
  ProfileService,
} from './profile.types'

type JsonObject = Record<string, unknown>

function expectObject(value: unknown, path: string): JsonObject {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    throw new Error(`Expected object at ${path}`)
  }

  return value as JsonObject
}

function expectString(value: unknown, path: string): string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`Expected non-empty string at ${path}`)
  }

  return value
}

function expectNumber(value: unknown, path: string): number {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    throw new Error(`Expected number at ${path}`)
  }

  return value
}

function expectArray(value: unknown, path: string): unknown[] {
  if (!Array.isArray(value)) {
    throw new Error(`Expected array at ${path}`)
  }

  return value
}

function parseStringArray(value: unknown, path: string): string[] {
  return expectArray(value, path).map((entry, index) =>
    expectString(entry, `${path}[${index}]`)
  )
}

function parseLinks(value: unknown, path: string): ProfileLink[] {
  return expectArray(value, path).map((entry, index) => {
    const link = expectObject(entry, `${path}[${index}]`)

    return {
      label: expectString(link.label, `${path}[${index}].label`),
      url: expectString(link.url, `${path}[${index}].url`),
    }
  })
}

function parseBasics(value: unknown, path: string): ProfileBasics {
  const basics = expectObject(value, path)

  return {
    fullName: expectString(basics.fullName, `${path}.fullName`),
    headline: expectString(basics.headline, `${path}.headline`),
    location: expectString(basics.location, `${path}.location`),
    email: expectString(basics.email, `${path}.email`),
    tagline: expectString(basics.tagline, `${path}.tagline`),
    summary: parseStringArray(basics.summary, `${path}.summary`),
    links: parseLinks(basics.links, `${path}.links`),
  }
}

function parseLanguages(value: unknown, path: string): ProfileLanguage[] {
  return expectArray(value, path).map((entry, index) => {
    const language = expectObject(entry, `${path}[${index}]`)

    return {
      name: expectString(language.name, `${path}[${index}].name`),
      proficiency: expectString(
        language.proficiency,
        `${path}[${index}].proficiency`
      ),
    }
  })
}

function parsePublications(value: unknown, path: string): ProfilePublication[] {
  return expectArray(value, path).map((entry, index) => {
    const publication = expectObject(entry, `${path}[${index}]`)

    return {
      title: expectString(publication.title, `${path}[${index}].title`),
      authors: parseStringArray(publication.authors, `${path}[${index}].authors`),
    }
  })
}

function parseSkills(value: unknown, path: string): ProfileSkillGroup[] {
  return expectArray(value, path).map((entry, index) => {
    const group = expectObject(entry, `${path}[${index}]`)

    return {
      title: expectString(group.title, `${path}[${index}].title`),
      summary: expectString(group.summary, `${path}[${index}].summary`),
      skills: parseStringArray(group.skills, `${path}[${index}].skills`),
    }
  })
}

function parseServices(value: unknown, path: string): ProfileService[] {
  return expectArray(value, path).map((entry, index) => {
    const service = expectObject(entry, `${path}[${index}]`)

    return {
      title: expectString(service.title, `${path}[${index}].title`),
      description: expectString(
        service.description,
        `${path}[${index}].description`
      ),
      tags: parseStringArray(service.tags, `${path}[${index}].tags`),
    }
  })
}

function parsePositions(value: unknown, path: string): ExperiencePosition[] {
  return expectArray(value, path).map((entry, index) => {
    const position = expectObject(entry, `${path}[${index}]`)

    return {
      title: expectString(position.title, `${path}[${index}].title`),
      startDate: expectString(position.startDate, `${path}[${index}].startDate`),
      endDate: expectString(position.endDate, `${path}[${index}].endDate`),
      durationLabel: expectString(
        position.durationLabel,
        `${path}[${index}].durationLabel`
      ),
      summary: expectString(position.summary, `${path}[${index}].summary`),
      highlights: parseStringArray(
        position.highlights,
        `${path}[${index}].highlights`
      ),
      technologies: parseStringArray(
        position.technologies,
        `${path}[${index}].technologies`
      ),
    }
  })
}

function parseExperience(value: unknown, path: string): ExperienceCompany[] {
  return expectArray(value, path).map((entry, index) => {
    const company = expectObject(entry, `${path}[${index}]`)

    return {
      company: expectString(company.company, `${path}[${index}].company`),
      location: expectString(company.location, `${path}[${index}].location`),
      positions: parsePositions(company.positions, `${path}[${index}].positions`),
    }
  })
}

function parsePrograms(value: unknown, path: string): EducationProgram[] {
  return expectArray(value, path).map((entry, index) => {
    const program = expectObject(entry, `${path}[${index}]`)

    return {
      degree: expectString(program.degree, `${path}[${index}].degree`),
      field: expectString(program.field, `${path}[${index}].field`),
      startYear: expectNumber(program.startYear, `${path}[${index}].startYear`),
      endYear: expectNumber(program.endYear, `${path}[${index}].endYear`),
    }
  })
}

function parseEducation(value: unknown, path: string): EducationEntry[] {
  return expectArray(value, path).map((entry, index) => {
    const education = expectObject(entry, `${path}[${index}]`)

    return {
      institution: expectString(
        education.institution,
        `${path}[${index}].institution`
      ),
      location: expectString(education.location, `${path}[${index}].location`),
      programs: parsePrograms(education.programs, `${path}[${index}].programs`),
    }
  })
}

export function parseProfileDocument(value: unknown): ProfileDocument {
  const document = expectObject(value, 'profile')

  return {
    basics: parseBasics(document.basics, 'profile.basics'),
    skills: parseSkills(document.skills, 'profile.skills'),
    languages: parseLanguages(document.languages, 'profile.languages'),
    publications: parsePublications(document.publications, 'profile.publications'),
    services: parseServices(document.services, 'profile.services'),
    experience: parseExperience(document.experience, 'profile.experience'),
    education: parseEducation(document.education, 'profile.education'),
  }
}

const validatedProfile = parseProfileDocument(profileDocument)

export function getProfile(): ProfileDocument {
  return validatedProfile
}
