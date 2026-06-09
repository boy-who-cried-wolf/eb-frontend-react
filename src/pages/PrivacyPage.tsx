import { LegalProse } from '../components/layout/LegalProse'
import privacyHtml from '../data/legal/privacy-policy.html?raw'

export function PrivacyPage() {
  return <LegalProse html={privacyHtml} />
}
