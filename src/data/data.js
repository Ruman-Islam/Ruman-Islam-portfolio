import p1 from '../assets/article1.png';
import p2 from '../assets/article2.png';
import p3 from '../assets/article3.png';
import { faHouseUser, faUser, faLaptopCode, faBlog, faAddressCard } from '@fortawesome/free-solid-svg-icons';


const projects = [
    {
        name: "PLEX - Manufacturer website",
        liveLink: "https://plex-4449f.firebaseapp.com/",
        clientLink: "https://github.com/Ruman-Islam/plex-client",
        serverLink: "https://github.com/Ruman-Islam/plex-server",
        features: [
            "Login system, Separate dashboard for user & admin, user settings.",
            "Super admin, add/remove admin, manage products & users, protected route.",
            "Book and cancel orders, Purchase and pay through stripe."
        ],
        techItems: ["HTML", "CSS", "JS", "MERN"]
    },
    {
        name: "SHELTER - Warehouse Management",
        liveLink: "https://warehouse-47f11.web.app/home",
        clientLink: "https://github.com/Ruman-Islam/warehouse-management-client",
        serverLink: "https://github.com/Ruman-Islam/warehouse-management-server",
        features: [
            "This website is for only admin. They can manage and update products.",
            "Login system, secured API with JWT, dashboard, separate vendor.",
            "CRUD operation, user settings, top sellers and products dynamically."
        ],
        techItems: ["HTML", "CSS", "JS", "MERN"]
    },
    {
        name: "PHOTOMETRY - Independent Service Provider",
        liveLink: "https://dream-weaver-91b28.web.app/",
        clientLink: "https://github.com/Ruman-Islam/dream-weaver-client",
        serverLink: "https://github.com/Ruman-Islam/dream-weaver-server",
        features: [
            "This is an individual service provider who provides photography in various event.",
            "Landing page, login system, shipping form, cart, contact form etc."
        ],
        techItems: ["HTML", "CSS", "JS", "MERN"]
    }
]


const education1 = {
    degree: 'Bachelor of Science in CSE',
    institution: 'Tejgaon College',
    session: '2017 - 2022',
    gpa: '2.36'
}
const education2 = {
    degree: 'Higher Secondary School Certificate',
    institution: 'Dhaka Imperial College',
    session: '2014 - 2016',
    gpa: '4.57'
}
const education3 = {
    degree: 'Secondary School Certificate',
    institution: 'Motijheel Govt Boys High School',
    session: '2012 - 2014',
    gpa: '5.00'
}

const course1 = {
    title: 'Web Development (MERN)',
    institution: 'Programming Hero',
    link: 'https://web.programming-hero.com/'
}
const course2 = {
    title: 'Digital Marketing',
    institution: 'LEDP',
    link: 'https://ledp.ictd.gov.bd/'
}

const articles = [
    {
        title: 'Top 10 Chrome extensions',
        description: 'We all are familiar with Grammarly. If this extension is connected to your browser, it will show you the correct sentence whenever you make a mistake in grammar. Forgetting password is our common problem. LastPass extension will help you to get your password.',
        img: p1,
        date: '01 May 2021',
        link: 'https://galaxytech01.blogspot.com/2020/10/top-10-google-chrome-extensions-using.html'
    },
    {
        title: 'How can I live stream sports online at a low or no cost?',
        description: 'The internet is filled with free options for live streaming sports. With apps and downloads available for all of your devices, you will be able to watch the sport, tournament, or match from wherever you are. But there is a catch. Sports broadcasting rights constrict live streaming to specific locations. This implies depending on where you are located. You will be blocked from watching your favorite sports teams.',
        img: p2,
        date: '01 May 2021',
        link: 'https://galaxytech01.blogspot.com/2020/10/how-can-i-live-stream-sports-online-at.html'
    },
    {
        title: 'ড্রোন',
        description: ' বাংলাদেশ সেনাবাহিনীর জন্য মার্কিন যুক্তরাষ্ট্র থেকে RQ-12B WASP ড্রোন সিস্টেম ক্রয় করা হয়েছে যেগুলোর ডেলিভারী শীঘ্রই দেয়া হচ্ছে। Janes.com তাদের ওয়েবসাইটে প্রকাশিত তথ্য অনুসারে বাংলাদেশ সামরিকবাহিনীর জন্য অজানাসংখ্যক এরকম ড্রোন ডেলিভারী দিচ্ছে মার্কিন যুক্তরাষ্ট্র।এই ড্রোনগুলো intelligence, surveillance, target acquisition, and reconnaissance (ISTAR) SUAS বিবইধ অপারেশন',
        img: p3,
        date: '01 May 2021',
        link: 'https://galaxytech01.blogspot.com/2020/10/blog-post_14.html'
    },
]

const menuItems = [
    { key: '1', icon: faHouseUser, routeName: 'Home', route: '/' },
    { key: '2', icon: faUser, routeName: 'About me', route: '/about-me' },
    { key: '3', icon: faLaptopCode, routeName: 'Projects', route: '/projects' },
    { key: '4', icon: faBlog, routeName: 'Blog', route: '/blog' },
    { key: '5', icon: faAddressCard, routeName: 'Contacts', route: '/contacts' }
]

export {
    projects,
    education1,
    education2,
    education3,
    course1,
    course2,
    articles,
    menuItems
};