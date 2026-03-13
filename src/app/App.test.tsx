import { describe, expect, test } from 'bun:test'
import { renderToStaticMarkup } from 'react-dom/server'
import { App } from './App'

describe('App', () => {
  test('renders the hero plus services, skills, experience, education, and contact data from the typed profile', () => {
    const html = renderToStaticMarkup(<App />)

    expect(html).toContain('David Padrino Gonzalez')
    expect(html).toContain('Software Engineer | TypeScript | ES6 | Node.js | Ruby on Rails')
    expect(html).toContain('portfolio://local-terminal')
    expect(html).toContain('status: Software Engineer at XING')
    expect(html).toContain('Learn, improve and change the world by coding.')
    expect(html).toContain('Service Routes')
    expect(html).toContain('Legacy Platform Migrations')
    expect(html).toContain('Skill Matrix')
    expect(html).toContain('Frontend Delivery')
    expect(html).toContain('Software Engineer at XING')
    expect(html).toContain('Experience Log')
    expect(html).toContain('4 years 10 months')
    expect(html).toContain('Spearheaded backend migration work to Prisma ORM and MySQL 8 upgrades.')
    expect(html).toContain('Education Node')
    expect(html).toContain('Universidad Central de Venezuela (UCV)')
    expect(html).toContain('Licentiate Degree')
    expect(html).toContain('Contact Port')
    expect(html).toContain('mailto:david.padrino3@hotmail.com')
    expect(html).toContain('Contact David Padrino Gonzalez via LinkedIn')
    expect(html).toContain('LinkedIn')
    expect(html).toContain('Spanish · Native or Bilingual')
    expect(html).toContain('Bases de Datos NoSQL: importancia en las empresas modernas')
  })
})
