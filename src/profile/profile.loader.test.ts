import { describe, expect, test } from 'bun:test'
import { getProfile, parseProfileDocument } from './profile.loader'

describe('profile loader', () => {
  test('returns a validated profile document from local JSON', () => {
    const profile = getProfile()

    expect(profile.basics.fullName).toBe('David Padrino Gonzalez')
    expect(profile.basics.links).toHaveLength(3)
    expect(profile.skills[0]?.title).toBe('Frontend Delivery')
    expect(profile.skills[0]?.skills).toContain('React')
    expect(profile.experience[0]?.company).toBe('XING')
    expect(profile.experience[0]?.positions[0]?.technologies).toContain(
      'Prisma ORM'
    )
    expect(profile.services.map(({ title }) => title)).toContain(
      'Legacy Platform Migrations'
    )
  })

  test('rejects malformed profile input at the application boundary', () => {
    expect(() =>
      parseProfileDocument({
        basics: {
          fullName: 'David Padrino Gonzalez',
        },
      })
    ).toThrow('Expected non-empty string at profile.basics.headline')
  })
})
