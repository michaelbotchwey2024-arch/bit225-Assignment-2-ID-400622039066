const profile = {
    name: 'Botchwey Michael',
    title: 'Information Technology student and a Web developer',
    tagline: 'I build simple but functional and useful web app for real people',
    photo: '/1.jpeg',
    about: 'I am a Level 300 Computer Science student at Bluecrest College. I enjoy turning ideas into working software,' +
        'especially web and mobile apps that solve everyday problems in Ghana.',
    location: 'Accra, Ghana',
    email: 'michealbotchwey2024 @gmail.com',
    phone: '0536689507',

    // path to the CV inside the public folder
    cv: '/Botchwey-Michael-CV.pdf',

    // education
    education: [
        {
            school: 'Bluecrest University College',
            program: 'B.Sc. Information Technology',
            period: 'Currently studying',
        },
    ],

    // skills 
    skills: [
        { name: 'HTML & CSS', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 70 },
        { name: 'Python', level: 65 },
        { name: 'MySQL', level: 60 },
    ],
    projects: [{
            title: 'Div-Furniture',
            description: 'A web app where customers can easily search for furniture to buy at affordable rates.',
            tech: ['React', 'CSS', 'Firebase'],
            link: 'https://github.com/your-username/div-furniture',
        },
        {
            title: 'Find A Designer',
            description: 'A marketplace where clients can discover designers, view their work, purchase designs, and communicate with designers.',
            tech: ['React', 'CSS', 'Node.js', 'MongoDB'],
            link: 'https://github.com/your-username/find-a-designer',
        },
        {
            title: 'Event Finder',
            description: 'A web app that helps users discover upcoming events, explore event details, and find events happening near them.',
            tech: ['React', 'CSS', 'Firebase'],
            link: 'https://github.com/your-username/event-finder',
        },
        {
            title: 'BlueLib Catalogue',
            description: 'A digital library catalogue where students can search for books, filter by category, and manage book borrowing.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://michaelbotchwey2024-arch.github.io/bit225-assignment2-ID-400622039066/',
        },
    ],
    socials: [{
            label: 'GitHub',
            url: 'https://github.com/michaelbotchwey2024-arch/bit225-assignment2-ID-400622039066.git'
        },
        {
            label: 'LinkedIn',
            url: 'https://linkedin.com/in/your-username'
        },
    ],







}
export default profile;
