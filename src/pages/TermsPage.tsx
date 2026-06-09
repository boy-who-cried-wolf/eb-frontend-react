import { LegalProse } from '../components/layout/LegalProse'
import termsHtml from '../data/legal/terms-of-service.html?raw'

export function TermsPage() {
  return <LegalProse html={termsHtml} />
}
