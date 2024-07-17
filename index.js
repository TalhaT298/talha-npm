// index.js

const authorInfo = {
    name: "Talha Tarique",
    occupation: "Full Stack Developer",
    company: "PlayerOrbit",
    location: "Bangladesh",
    github: "https://github.com/oceanCapp",
    facebook:"https://www.facebook.com/talha.tarique.5",
    instagram:"https://www.instagram.com/talha_tarique77/",
    x:"https://x.com/TalhaTarique1",
    linke:"https://www.linkedin.com/in/talha-tarique/",
    whataApp:"https://wa.link/8bkntc",
    discord:"https://discord.gg/uxpwasKq",
    medium:"https://medium.com/@talhatarique",
    website:"https://medium.com/@talhatarique",
    npm: "https://www.npmjs.com/~talhatarique",
    skills: [
        "React.js", "Next.js", "Node.js", "JavaScript", "HTML5",
        "CSS3", "Bootstrap", "Tailwind", "DaisyUI", "Firebase", "MongoDB","TypeScript","NPM"
    ],
    experience: [
        {
            descriptiontalha:"As a Full Stack Developer, I specialize in building robust web applications from frontend to backend. With expertise in technologies such as React.js, Node.js, and MongoDB, I craft scalable and responsive solutions that meet the demands of modern digital environments. From user interface design to database management, I am dedicated to delivering high-quality, efficient code while collaborating effectively within development teams. Explore my repositories to see my contributions to innovative and impactful projects."
        },
        {
            title: "Full Stack Developer",
            company: "Hubnex",
            location: "Gurugram, Haryana, India",
            duration: "December 1, 2022 - May 1, 2023",
            description: "Worked on creating and designing websites from start to finish, ensuring smooth operation and gathering data from different sources to make them interactive for users. Fixed code issues and ensured databases and applications ran smoothly."
        },
        {
            title: "Full Stack Developer",
            company: "Unicorniz Innovation",
            location: "Andaman, India",
            duration: "June 26, 2023 - July 30, 2023",
            description: "Focused on front-end tasks, ensuring the company's website design adapted well to various screen sizes. Learned new technologies, particularly Three.js, for creating 3D graphics in web development."
        },
        {
            title: "Full Stack Developer",
            company: "PlayerOrbit",
            location: "Nagpur, Maharashtra, India",
            duration: "June 23, 2023 - November 1, 2023",
            description: "Spearheaded the creation of the entire web stack, ensured seamless functionality and user engagement, volunteered for code reviews, and contributed to open-source projects. Optimized website design for different screens and deepened knowledge of Three.js for 3D web graphics."
        }
    ],
    professionalSummary: "As a Full Stack Developer, I specialize in building robust web applications from frontend to backend. With expertise in technologies such as React.js, Node.js, and MongoDB, I craft scalable and responsive solutions that meet the demands of modern digital environments. From user interface design to database management, I am dedicated to delivering high-quality, efficient code while collaborating effectively within development teams. Explore my repositories to see my contributions to innovative and impactful projects."
};

function showInfo() {
    console.log("=== Talha Tarique's Information ===");
    console.log(`Name: ${authorInfo.name}`);
    console.log(`Occupation: ${authorInfo.occupation}`);
    console.log(`Company: ${authorInfo.company}`);
    console.log(`Location: ${authorInfo.location}`);
    console.log(`GitHub: ${authorInfo.github}`);
    console.log(`Facebook: ${authorInfo.facebook}`);
    console.log(`Whatsapp: ${authorInfo.whataApp}`);
    console.log(`Instagram: ${authorInfo.instagram}`);
    console.log(`Medium: ${authorInfo.medium}`);
    console.log(`Website: ${authorInfo.website}`);
    console.log(`X: ${authorInfo.X}`);
    console.log(`Discord: ${authorInfo.discord}`);
    console.log(`NPM: ${authorInfo.npm}`);
    console.log("\nProfessional Summary:");
    console.log(authorInfo.professionalSummary);
    console.log("\nSkills:");
    authorInfo.skills.forEach(skill => console.log(`- ${skill}`));
    console.log("\nExperience:");
    authorInfo.experience.forEach(job => {
        console.log(`- ${job.title} at ${job.company}, ${job.location}`);
        console.log(`  Duration: ${job.duration}`);
        console.log(`  Description: ${job.description}`);
        console.log(`  DescriptionTalha: ${job.descriptiontalha}`);
    });
}

// Exporting the function to make it available when imported as a module
module.exports = showInfo;
