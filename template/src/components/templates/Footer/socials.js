import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';

const socials = [
    {
        icon: faXTwitter,
        link: 'https://twitter.com',
        title: 'Twitter',
    },
    {
        icon: faFacebookF,
        link: 'https://facebook.com',
        title: 'Facebook',
    },
    {
        icon: faInstagram,
        link: 'https://instagram.com',
        title: 'Instagram',
    },
    {
        icon: faLinkedinIn,
        link: 'https://linkedin.com',
        title: 'LinkedIn',
    },
    {
        icon: faEnvelope,
        link: 'mailto:you@example.com',
        title: 'Our Email',
    },  
];

export default socials;