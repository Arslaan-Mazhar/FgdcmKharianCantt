
// NAVIGATION
import { FooterIcons } from "@/public/types";
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: `/aboutUs`, key: 'About', label: 'About Us' },
  { href: '/objectives', key: 'objectives', label: 'Objectives' },
  { href: '/admissionform', key: 'admissions', label: 'Admissions' },
  { href: '/membership', key: 'membership', label: 'Membership' },
  { href: '/donation', key: 'Fee Payment', label: 'Fee Payment' },
  { href: '/contactUs', key: 'contact_us', label: 'Contact Us' },
  // { href: '/files', key: 'files', label: 'Files' },
];

export const Currencies = [  "AED", "EUR", "GBP", "PKR", "SAR", "USD"];

  export const Amounts = ["1000", "10000", "50000", "100000", "1000000"];  


export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Phone', value: '0539-240101' },
    { label: 'Email', value: 'fgdcm@gmail.com' },
  ],
};

export const SOCIALS: FooterIcons = {
  title: 'Social Media',
  links: [
    { href: 'https://wa.me/923016239844', key: 'whatsapp', label: 'Chairman-Whatsapp', icon: '/whatsapp.svg'  },
    { href: 'https://www.facebook.com/fgdcm', key: 'fb', label: 'Facebook Page',icon:'/facebook.svg' },
    { href: 'https://youtube.com/@fgdcm', key: 'Youtube', label: 'Youtube Account', icon:'/youtube.svg' },
  ]
};
