export const SITE_URL = 'https://vicente.fyi';

export const SITE_NAME = 'Vicente Sanchez';

export const SITE_DESCRIPTION =
  'Building backend systems, fintech infrastructure, and weird ideas on the web.';

export const SITE_KEYWORDS = ['Backend Developer', 'AI', 'Web3', 'São Paulo', 'Brazil'];

export const OG_IMAGE = {
  url: `${SITE_URL}/opengraph-image.png`,
  width: 1200,
  height: 630,
  alt: SITE_NAME
};

export const X_HANDLE = '@vicentesandev';

export const BIRTH_DATE = '2009-04-18';

export const SOCIALS = [
  { label: 'github', href: 'https://github.com/Vicentesan' },
  { label: 'x', href: 'https://x.com/vicentesandev' }
];

/** Whole years between `BIRTH_DATE` and `today`. */
export function ageOn(today: Date): number {
  const [year, month, day] = BIRTH_DATE.split('-').map(Number);
  const hadBirthday =
    today.getUTCMonth() + 1 > month ||
    (today.getUTCMonth() + 1 === month && today.getUTCDate() >= day);

  return today.getUTCFullYear() - year - (hadBirthday ? 0 : 1);
}
