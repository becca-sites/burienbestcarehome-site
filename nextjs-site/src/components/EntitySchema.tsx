import {
  PERSON_ID,
  TEAM_ID,
  BROKERAGE_ID,
  CARE_HOME_ID,
  WEBSITE_ID,
  DANIELA_ID,
  PERSON_NODE,
  BROKERAGE_NODE,
} from '@/lib/entity'

const SITE = 'https://www.burienbestcarehome.com'

/**
 * Sitewide entity graph, rendered once in the root layout.
 *
 * The Person node is shared with yournextstepteam.com under one @id, so the
 * two businesses point at one Becca. The care home is co-owned by Becca and
 * Daniela Torkelson, who is the DSHS licensee of record. There is no
 * `founder`: Becca joined the home, she did not start it.
 *
 * Type is plain LocalBusiness. AssistedLivingFacility, ResidentialCare and
 * NursingHome are not in the released schema.org vocabulary.
 *
 * No Review or AggregateRating: a business marking up reviews about itself is
 * ineligible for review stars.
 */
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    PERSON_NODE,
    {
      '@type': 'LocalBusiness',
      '@id': CARE_HOME_ID,
      name: 'Burien Best Care Home',
      url: `${SITE}/`,
      logo: `${SITE}/images/bbch-logo.png`,
      image: `${SITE}/photos/heroes/hero-home-burien-care-home-exterior.webp`,
      description:
        "Burien Best Care Home is a licensed adult family home in Burien, Washington, providing 24/7 personalized support for up to eight residents, including memory care, daily living assistance, Parkinson's care, respite care, post-hospital recovery, and hospice care coordination.",
      telephone: '+1-253-678-7089',
      email: 'info@burienbestcarehome.com',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '927 SW 132nd St',
        addressLocality: 'Burien',
        addressRegion: 'WA',
        postalCode: '98146',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 47.487, longitude: -122.3636 },
      // Adult family homes are 24/7 care.
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      amenityFeature: {
        '@type': 'LocationFeatureSpecification',
        name: 'Licensed resident capacity',
        value: 8,
      },
      knowsAbout: [
        'Memory Care',
        'Daily Living Assistance',
        "Parkinson's Care",
        'Respite Care',
        'Post-Hospital Recovery',
        'Hospice Care Coordination',
        'Adult Family Home',
      ],
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'King County, Washington' },
        { '@type': 'City', name: 'Burien' },
        { '@type': 'City', name: 'Kent' },
        { '@type': 'City', name: 'Renton' },
        { '@type': 'City', name: 'SeaTac' },
        { '@type': 'City', name: 'Tukwila' },
        { '@type': 'City', name: 'Des Moines' },
        { '@type': 'City', name: 'Normandy Park' },
        { '@type': 'City', name: 'White Center' },
      ],
      owner: [{ '@id': PERSON_ID }, { '@id': DANIELA_ID }],
      employee: [{ '@id': PERSON_ID }, { '@id': DANIELA_ID }],
      knowsLanguage: ['en-US'],
      sameAs: ['https://www.facebook.com/burienbestcarehome'],
    },
    {
      '@type': 'Person',
      '@id': DANIELA_ID,
      name: 'Daniela Torkelson',
      jobTitle: 'Co-Owner, Provider and Resident Manager',
      description:
        'Daniela Torkelson is the co-owner of Burien Best Care Home and its Washington State DSHS adult family home licensee of record.',
      image: `${SITE}/photos/staff/daniela-torkelson.webp`,
      worksFor: { '@id': CARE_HOME_ID },
      owns: { '@id': CARE_HOME_ID },
      memberOf: { '@id': CARE_HOME_ID },
    },
    BROKERAGE_NODE,
    {
      '@type': 'RealEstateAgent',
      '@id': TEAM_ID,
      name: 'Your Next Step Team',
      url: 'https://www.yournextstepteam.com/',
      founder: { '@id': PERSON_ID },
      owner: { '@id': PERSON_ID },
      parentOrganization: { '@id': BROKERAGE_ID },
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: `${SITE}/`,
      name: 'Burien Best Care Home',
      publisher: { '@id': CARE_HOME_ID },
      inLanguage: 'en-US',
    },
  ],
}

export default function EntitySchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
