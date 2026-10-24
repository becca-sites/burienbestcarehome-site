import shared from '@/data/becca-pitts.entity.json'

/**
 * The cross-site entity ids, and the one Person node for Becca.
 *
 * src/data/becca-pitts.entity.json is byte-identical in this repo and in
 * yournextstepteam-site. Both sites emit the same Person under the same @id,
 * so search engines see one person who runs both businesses rather than two
 * people who share a name. Edit the file in both repos together, then compare
 * checksums (sha256sum src/data/becca-pitts.entity.json) before shipping.
 */
export const PERSON_ID = 'https://www.yournextstepteam.com/#becca-pitts'
export const TEAM_ID = 'https://www.yournextstepteam.com/#team'
export const BROKERAGE_ID = 'https://www.yournextstepteam.com/#exp-realty'
export const CARE_HOME_ID = 'https://www.burienbestcarehome.com/#organization'
export const WEBSITE_ID = 'https://www.burienbestcarehome.com/#website'
export const DANIELA_ID = 'https://www.burienbestcarehome.com/#daniela-torkelson'

export const PERSON_NODE = shared.person
export const BROKERAGE_NODE = shared.brokerage

/** Blog authorship: the shared Person for Becca, a plain Person otherwise. */
export function authorRef(name: string) {
  return name === 'Becca Pitts' ? { '@id': PERSON_ID } : { '@type': 'Person', name }
}
