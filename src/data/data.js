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

export {
    projects,
    education1,
    education2,
    education3,
    course1,
    course2
};