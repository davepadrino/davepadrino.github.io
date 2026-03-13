import { PageShell } from './PageShell'
import { PortfolioShellContent } from './PortfolioShellContent'

const content = new PortfolioShellContent()

export function App() {
  return <PageShell content={content} />
}
