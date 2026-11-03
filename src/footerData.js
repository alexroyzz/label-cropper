// Footer content. Keep internal links aligned with routes registered in seoPages.js.
import { PLATFORMS, PLATFORM_ORDER } from './platforms.js';

// Column 2 - one link per marketplace cropper, plus the tool on the home page.
export const TOOL_LINKS = [
  ...PLATFORM_ORDER.map((p) => ({ label: `${PLATFORMS[p].name} Label Cropper`, href: PLATFORMS[p].path })),
  { label: 'Crop PDF Online', href: '/#label-tool' },
];

export const COMPANY_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Seller Blog & Guides', href: '/blog' },
];

export const LEGAL_LINKS = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

export const CONTACT = { email: 'deepakbusiness004@gmail.com' };
export const SOCIAL_LINKS = [];
