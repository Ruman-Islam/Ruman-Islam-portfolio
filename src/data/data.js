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
        title: 'What is Virtual dom?',
        description: "Virtual DOM is a copy or blueprint of the real DOM kept inside the memory and synced with the real dom. Virtual DOM is the same as real DOM but it doesn’t have the power to directly change the real DOM.",
        img: "https://miro.medium.com/max/800/1*CqdIWZy0NMPQhYx2rKzo9g.png",
        date: '08 July 2022',
        link: 'https://www.techdiary.dev/ruman-islam/86795dcb-aeae-4adc-950e-cfe09710ff04-norv8C'
    },
    {
        title: 'How does JavaScript work?',
        description: "Whenever we attach a script file with an HTML file and run, the JavaScript source file is received by the browser. It sends the source code to JavaScript's engine which is installed inside the browser. The code goes through several steps. Firstly the code gets by the parser. The parser checks the code's syntax type errors line by line. Secondly, after parsing, the JS engine breaks the codes into relevant pieces to interpret the codes effectively. Then the codes are received by the interpreter who interpreted the codes into machine codes. Finally, the machine code is sent to the system, then run by the system.",
        img: "https://miro.medium.com/max/1600/1*2jgqpiZAf85BQwWUHuv-6Q.png",
        date: '08 July 2022',
        link: 'https://www.techdiary.dev/ruman-islam/c581807d-a656-49f8-833c-19b3eb8661bd-EZz6XB'
    },
    {
        title: 'What is the JavaScript Event Loop?',
        description: "JavaScript is a single-threaded language. After receiving the script file JS’s engine starts to execute. When JS goes through the execution phase, Whenever it found a synchronous function and took it to the call stack. If any asynchronous function(setTimeout/fetch/Promise/async-await) or event listeners have inside it, then JS simply handover these async functions to browsers' web API.",
        img: "https://redberry.international/wp-content/uploads/2021/12/wrtzmt2ty03ksew7ehvx-300x150.jpeg",
        date: '08 July 2022',
        link: 'https://www.techdiary.dev/ruman-islam/ffcdbe2b-d959-480b-b78f-ffc1634f7b01-Oi8yRq'
    },
    {
        title: 'How does JavaScript code executed in Browser?',
        description: "While reading through HTML, if the browser encounters JavaScript code to run via a script tag or an attribute that contains JavaScript code, it sends it to its JavaScript engine. Then the browser's JS engine creates a special environment to handle the execution of this JavaScript code. This environment is known as the Global Execution Context.",
        img: "https://i.ytimg.com/vi/x8sUzpVwWjw/maxresdefault.jpg",
        date: '08 July 2022',
        link: 'https://www.techdiary.dev/ruman-islam/33938cb8-17f2-4b72-b330-0c4bf7b1bbb6-xYIv0k'
    },
    {
        title: 'bind, call and apply',
        description: "Call(): The ‘call’ method is a predefined JavaScript method. With ‘call’ an object can use another object's method. It reduces repeatation of code.",
        img: "https://miro.medium.com/max/1200/1*HRqVf3HxHR4CvzwKnZTXNA.jpeg",
        date: '08 July 2022',
        link: 'https://www.techdiary.dev/ruman-islam/10f85218-a548-4adb-8b45-59051c057f74-RPbJgF'
    },
    {
        title: 'Hoisting in JavaScript',
        description: "When JavaScript’s engine receives a script file and starts executing. The JS engine creates an environment to handle the execution of this JavaScript code. This environment is known as the Global Execution Context. The global execution context goes through two phases – the loading phase, and the execution phase",
        img: "https://miro.medium.com/max/660/0*YJA6GkbSwgDGOByy.png",
        date: '08 July 2022',
        link: 'https://www.techdiary.dev/ruman-islam/09062a7c-0e8c-4534-bb44-fc1b95865f2f-gdh5sP'
    },
    {
        title: 'What are the different data types in JavaScript?',
        description: "Primitive data type is not an object or neither has methods and properties. There are seven types of data types in JS. String, number, Boolean, undefined, symbol, null, and 'bigint'. ",
        img: "https://miro.medium.com/max/1400/1*HuN_T7uPgeQ33Sg05FBH7Q.jpeg",
        date: '08 July 2022',
        link: 'https://www.techdiary.dev/ruman-islam/26dc6bbc-b276-49ce-b18c-246be130544b-H977d2'
    },
    {
        title: 'How does inheritance work in JavaScript? What is a Prototype chain?',
        description: "Inheritance is like one object is trying to access the properties  & methods of another object. In JavaScript, everything is an object. Suppose you declare an array and then your code ‘array.length’. So you should get a result. Now where the ‘length’ property comes from? Actually when the JavaScript engine",
        img: "https://i.ytimg.com/vi/MLsg-jv2D08/maxresdefault.jpg",
        date: '08 July 2022',
        link: 'https://www.techdiary.dev/ruman-islam/30824752-503e-4390-a73a-db067b72930a-cVHTLx'
    },
    {
        title: 'Call by value vs call by reference',
        description: "Call by value is actually about assigning value to primitive data type variables. Whenever you declared a primitive data type variable JS engine allocates memory for in. So suppose you declared a variable “var myName = ‘Ruman’” and declared ",
        img: "https://askanydifference.com/wp-content/uploads/2022/02/Call-by-Reference-and-Call-by-Value.jpg",
        date: '08 July 2022',
        link: 'https://www.techdiary.dev/ruman-islam/cbc743ab-f936-4532-a4b5-20fedc7eb741-zZA8PI'
    },
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