import p1 from "../assets/article1.png";
import p2 from "../assets/article2.png";
import p3 from "../assets/article3.png";
import {
  faHouseUser,
  faUser,
  faLaptopCode,
  faBlog,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    name: "Tours & Travel - Online travel website",
    liveLink: "https://insignia-dev.pingdashtech.org/",
    features: [
      "Login system, Separate dashboard for user & admin, user settings.",
      "Super admin, add/remove admin, manage bookings & users, protected route.",
      "Booking and cancel tours, Purchase and pay through SSLCOMMERZ.",
    ],
    techItems: ["HTML", "CSS", "JS", "MERN"],
  },
  {
    name: "DMS - Document Management System",
    liveLink: "https://purbani-dms-test.vercel.app/",
    features: [
      "Employees & admins can manage internal documents.",
      "Login system, secured API with JWT, dashboard.",
      "CRUD operation, user settings.",
    ],
    techItems: ["HTML", "CSS", "JS", "MERN"],
  },
  {
    name: "Tech Hub - Online tech shop",
    liveLink: "https://pc-builder-self.vercel.app/",
    clientLink: "https://github.com/Ruman-Islam/Tech-Hub",
    features: [
      "Product listing. Product view",
      "Pc builder",
      "Landing page, login system, etc.",
    ],
    techItems: ["HTML", "CSS", "TypeScript", "NEXT JS"],
  },
];

const education1 = {
  degree: "Bachelor of Science in CSE",
  institution: "Tejgaon College",
  session: "2016 - 2020",
  gpa: "2.75",
};
const education2 = {
  degree: "Higher Secondary School Certificate",
  institution: "Dhaka Imperial College",
  session: "2014 - 2016",
  gpa: "4.57",
};
const education3 = {
  degree: "Secondary School Certificate",
  institution: "Motijheel Govt Boys High School",
  session: "2012 - 2014",
  gpa: "5.00",
};

const course1 = {
  title: "Web Development (MERN)",
  institution: "Programming Hero",
  link: "https://web.programming-hero.com/",
};
const course2 = {
  title: "Digital Marketing",
  institution: "LEDP",
  link: "https://ledp.ictd.gov.bd/",
};

const articles = [
  {
    title: "What is Virtual dom?",
    description:
      "Virtual DOM is a copy or blueprint of the real DOM kept inside the memory and synced with the real dom. Virtual DOM is the same as real DOM but it doesn’t have the power to directly change the real DOM.",
    img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1649654338675/ne8M7eNqO.png",
    date: "08 July 2022",
    link: "https://www.techdiary.dev/ruman-islam/86795dcb-aeae-4adc-950e-cfe09710ff04-norv8C",
  },
  {
    title: "How does JavaScript work?",
    description:
      "Whenever we attach a script file with an HTML file and run, the JavaScript source file is received by the browser. It sends the source code to JavaScript's engine which is installed inside the browser. The code goes through several steps. Firstly the code gets by the parser. The parser checks the code's syntax type errors line by line. Secondly, after parsing, the JS engine breaks the codes into relevant pieces to interpret the codes effectively. Then the codes are received by the interpreter who interpreted the codes into machine codes. Finally, the machine code is sent to the system, then run by the system.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zJXfwMEeDNKC3t5ps8eUaxV8r4Hm_jXa5gufinZ5au8NcnRXnAbRuq_xSMkJMc9zR-w&usqp=CAU",
    date: "08 July 2022",
    link: "https://www.techdiary.dev/ruman-islam/c581807d-a656-49f8-833c-19b3eb8661bd-EZz6XB",
  },
  {
    title: "What is the JavaScript Event Loop?",
    description:
      "JavaScript is a single-threaded language. After receiving the script file JS’s engine starts to execute. When JS goes through the execution phase, Whenever it found a synchronous function and took it to the call stack. If any asynchronous function(setTimeout/fetch/Promise/async-await) or event listeners have inside it, then JS simply handover these async functions to browsers' web API.",
    img: "https://redberry.international/wp-content/uploads/2021/12/wrtzmt2ty03ksew7ehvx-300x150.jpeg",
    date: "08 July 2022",
    link: "https://www.techdiary.dev/ruman-islam/ffcdbe2b-d959-480b-b78f-ffc1634f7b01-Oi8yRq",
  },
  {
    title: "How does JavaScript code executed in Browser?",
    description:
      "While reading through HTML, if the browser encounters JavaScript code to run via a script tag or an attribute that contains JavaScript code, it sends it to its JavaScript engine. Then the browser's JS engine creates a special environment to handle the execution of this JavaScript code. This environment is known as the Global Execution Context.",
    img: "https://i.ytimg.com/vi/x8sUzpVwWjw/maxresdefault.jpg",
    date: "08 July 2022",
    link: "https://www.techdiary.dev/ruman-islam/33938cb8-17f2-4b72-b330-0c4bf7b1bbb6-xYIv0k",
  },
  {
    title: "bind, call and apply",
    description:
      "Call(): The ‘call’ method is a predefined JavaScript method. With ‘call’ an object can use another object's method. It reduces repeatation of code.",
    img: "https://cdn-media-1.freecodecamp.org/images/1*2ZGrvPwHxZnbTzABICrEAg.png",
    date: "08 July 2022",
    link: "https://www.techdiary.dev/ruman-islam/10f85218-a548-4adb-8b45-59051c057f74-RPbJgF",
  },
  {
    title: "Hoisting in JavaScript",
    description:
      "When JavaScript’s engine receives a script file and starts executing. The JS engine creates an environment to handle the execution of this JavaScript code. This environment is known as the Global Execution Context. The global execution context goes through two phases – the loading phase, and the execution phase",
    img: "https://ruairidh.dev/static/13cb19777c5bd6be3f8d715da3b59529/61a07/banner.png",
    date: "08 July 2022",
    link: "https://www.techdiary.dev/ruman-islam/09062a7c-0e8c-4534-bb44-fc1b95865f2f-gdh5sP",
  },
  {
    title: "What are the different data types in JavaScript?",
    description:
      "Primitive data type is not an object or neither has methods and properties. There are seven types of data types in JS. String, number, Boolean, undefined, symbol, null, and 'bigint'. ",
    img: "https://www.tutsmake.com/wp-content/uploads/2020/05/JavaScript-Data-Types-Examples-1.jpeg",
    date: "08 July 2022",
    link: "https://www.techdiary.dev/ruman-islam/26dc6bbc-b276-49ce-b18c-246be130544b-H977d2",
  },
  {
    title:
      "How does inheritance work in JavaScript? What is a Prototype chain?",
    description:
      "Inheritance is like one object is trying to access the properties  & methods of another object. In JavaScript, everything is an object. Suppose you declare an array and then your code ‘array.length’. So you should get a result. Now where the ‘length’ property comes from? Actually when the JavaScript engine",
    img: "https://i.ytimg.com/vi/MLsg-jv2D08/maxresdefault.jpg",
    date: "08 July 2022",
    link: "https://www.techdiary.dev/ruman-islam/30824752-503e-4390-a73a-db067b72930a-cVHTLx",
  },
  {
    title: "Call by value vs call by reference",
    description:
      "Call by value is actually about assigning value to primitive data type variables. Whenever you declared a primitive data type variable JS engine allocates memory for in. So suppose you declared a variable “var myName = ‘Ruman’” and declared ",
    img: "https://programmerbay.com/wp-content/uploads/2019/07/call-by-reference-and-call-by-value.png",
    date: "08 July 2022",
    link: "https://www.techdiary.dev/ruman-islam/cbc743ab-f936-4532-a4b5-20fedc7eb741-zZA8PI",
  },
  {
    title: "Top 10 Chrome extensions",
    description:
      "We all are familiar with Grammarly. If this extension is connected to your browser, it will show you the correct sentence whenever you make a mistake in grammar. Forgetting password is our common problem. LastPass extension will help you to get your password.",
    img: p1,
    date: "01 May 2021",
    link: "https://galaxytech01.blogspot.com/2020/10/top-10-google-chrome-extensions-using.html",
  },
  {
    title: "How can I live stream sports online at a low or no cost?",
    description:
      "The internet is filled with free options for live streaming sports. With apps and downloads available for all of your devices, you will be able to watch the sport, tournament, or match from wherever you are. But there is a catch. Sports broadcasting rights constrict live streaming to specific locations. This implies depending on where you are located. You will be blocked from watching your favorite sports teams.",
    img: p2,
    date: "01 May 2021",
    link: "https://galaxytech01.blogspot.com/2020/10/how-can-i-live-stream-sports-online-at.html",
  },
  {
    title: "ড্রোন",
    description:
      " বাংলাদেশ সেনাবাহিনীর জন্য মার্কিন যুক্তরাষ্ট্র থেকে RQ-12B WASP ড্রোন সিস্টেম ক্রয় করা হয়েছে যেগুলোর ডেলিভারী শীঘ্রই দেয়া হচ্ছে। Janes.com তাদের ওয়েবসাইটে প্রকাশিত তথ্য অনুসারে বাংলাদেশ সামরিকবাহিনীর জন্য অজানাসংখ্যক এরকম ড্রোন ডেলিভারী দিচ্ছে মার্কিন যুক্তরাষ্ট্র।এই ড্রোনগুলো intelligence, surveillance, target acquisition, and reconnaissance (ISTAR) SUAS বিবইধ অপারেশন",
    img: p3,
    date: "01 May 2021",
    link: "https://galaxytech01.blogspot.com/2020/10/blog-post_14.html",
  },
];

const menuItems = [
  { key: "1", icon: faHouseUser, routeName: "Home", route: "/" },
  { key: "2", icon: faUser, routeName: "Experience", route: "/about-me" },
  { key: "3", icon: faLaptopCode, routeName: "Projects", route: "/projects" },
  { key: "4", icon: faBlog, routeName: "Blog", route: "/blog" },
  { key: "5", icon: faAddressCard, routeName: "Contacts", route: "/contacts" },
];

export {
  projects,
  education1,
  education2,
  education3,
  course1,
  course2,
  articles,
  menuItems,
};

// {
//     "id": 1,
//     "name": "PLEX",
//     "title": "Manufacturer website",
//     "img": "https://i.ibb.co/r2tDJ7P/Screenshot-1-1000x450.png",
//     "description": "Login system, Separate dashboard for user & admin, user settings. Super admin, add/remove admin, manage products & users, protected route. Book and cancel orders, Purchase and pay through stripe.",
//     "overview": "It is a manufacturer company name is PLEX. Basically they manufactures industrial's machines, machineries parts. This website serves as their online shop. Customer can buy products, booked products and payment method is stripe right now. This is a dynamic website. It can used by users and admin both. Admin panel has some extra admin features. Product add, delete, update quantity, delete user, make/remove admin and only one super admin. Any other admin cannot remove or delete super admin. Login system has integrated with Google Firebase. All the customer's, orders information is stored in MongoDB. This website server application was built with node JS, REST API's.",
//     "features": [
//         "Login system", "Dashboard",
//         "User setting", "Manage admin & user",
//         "Manage products & orders",
//         "Protected route, Super admin"
//     ],
//     "technology": [
//         "HTML", "CSS", "Tailwind", "Ant Design", "JavaScript", "React JS", "React Router", "Helmet", "Firebase", "Node JS", "JWT", "MongoDB"
//     ],
//     "screenshots" : [
//         "https://i.ibb.co/r2tDJ7P/Screenshot-1-1000x450.png",
//         "https://i.ibb.co/KLRZdZX/Screenshot-1-1-1000x450.png",
//         "https://i.ibb.co/zN3njxw/Screenshot-53.png",
//         "https://i.ibb.co/1TpsJy2/Screenshot-54.png"
//     ],
//     "liveLink": "https://plex-4449f.firebaseapp.com/",
//     "gitClient": "https://github.com/Ruman-Islam/plex-client",
//     "gitServer": "https://github.com/Ruman-Islam/plex-server"
// },
// {
//     "id": 2,
//     "name": "Shelter",
//     "title": "Warehouse management system",
//     "img": "https://i.ibb.co/z4LPdp2/warehouse.png",
//     "description": "This website is for only admin. They can manage and update products. Login system, secured API with JWT, dashboard, separate vendor. CRUD operation, user settings, top sellers and products dynamically.",
//     "overview": "This is an online warehouse management application built as a single page application (SPA). There are two types of admin. The main admin and seller. They will have authentication. In this application an admin can delete product, add product, stock update or remove. Every seller can check their investment, profit etc. Product sequence and investment/profit, product quantity, delivery can be maintain. User has to be logged in with valid email either he/she cannot.",
//     "features": [
//         "Login system", "Dashboard",
//         "User setting", "Manage admin & user",
//         "Manage products & orders",
//         "Protected route"
//     ],
//     "technology": [
//         "HTML", "CSS", "Tailwind", "JavaScript", "React JS", "React Router", "Helmet", "Firebase", "Node JS", "JWT", "MongoDB"
//     ],
//     "screenshots" : [
//         "https://i.ibb.co/z4LPdp2/warehouse.png",
//         "https://i.ibb.co/Xb3N9Cq/Screenshot-2.png",
//         "https://i.ibb.co/vYtMCm9/Screenshot-3.png",
//         "https://i.ibb.co/Qf6rXTP/Screenshot-4.png",
//         "https://i.ibb.co/vX1XxG6/Screenshot-1.png"
//     ],
//     "liveLink": "https://warehouse-47f11.web.app/",
//     "gitClient": "https://github.com/Ruman-Islam/warehouse-management-client",
//     "gitServer": "https://github.com/Ruman-Islam/warehouse-management-server"
// },
// {
//     "id": 3,
//     "name": "Photometry",
//     "title": "Independent service provider",
//     "img": "https://i.ibb.co/CnZ3MzP/photometry-1.png",
//     "description": "This is an individual service provider who provides photography in various event. Admin, Landing page, login system, shipping form, cart etc.",
//     "overview": "This is an individual service provider who provides photography in various event if date is available. There are many types of packages according to price. Customer can choose package from package section. Fill up the form submit. Admin get the email and contact with customer.",
//     "features": [
//         "Login system", "Shipping form", "Cart", "Contact form",
//         "Manage products & orders",
//         "Protected route"
//     ],
//     "technology": [
//         "HTML", "Vanilla CSS", "JavaScript", "React JS", "React Router", "Helmet", "Firebase", "Node JS", "JWT", "MongoDB"
//     ],
//     "screenshots" : [
//         "https://i.ibb.co/CnZ3MzP/photometry-1.png",
//         "https://i.ibb.co/MBCxhz3/Screenshot-3-1.png",
//         "https://i.ibb.co/mRz5fhD/Screenshot-4.png",
//         "https://i.ibb.co/H2sJwWc/Screenshot-2.png",
//         "https://i.ibb.co/gDQDjvD/Screenshot-1.png"
//     ],
//     "liveLink": "https://dream-weaver-91b28.web.app/",
//     "gitClient": "https://github.com/Ruman-Islam/dream-weaver-client",
//     "gitServer": "https://github.com/Ruman-Islam/dream-weaver-server"
// },
