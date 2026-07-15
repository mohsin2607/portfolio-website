


const projectList = [
    {
        id: 1,
        number: "01",
        title: "Developer Productivity Dashboard",
        description: "Creating a dashboard to help developers monitor projects, repositories, and development activities with analytics and performance visualization.",
        techStack: ["React.js", "Node.js", "PostgreSQL"],
        image: "assets/projects/project1.jpeg",
        live: "#",
        github: "#"
    },
    {
        id: 2,
        number: "02",
        title: "Smart Inventory Management System",
        description: "Building a scalable inventory management platform with secure authentication, inventory tracking, analytics dashboard, and report generation.",
        techStack: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
        image: "assets/projects/project2.jpeg",
        live: "#",
        github: "#"
    },
    {
        id: 3,
        number: "03",
        title: "AI-Powered Learning Assistant",
        description: "Developing an AI-powered learning assistant that provides personalized learning paths, quizzes, and intelligent study recommendations.",
        techStack: ["React.js", "Node.js", "OpenAI API", "MongoDB"],
        image: "assets/projects/project3.jpeg",
        live: "#",
        github: "#"
    },
    {
        id: 4,
        number: "04",
        title: "Real-Time Collaboration Platform",
        description: "Building a collaborative platform with real-time messaging, document sharing, notifications, and team workspace management.",
        techStack: ["React.js", "Node.js", "Socket.io", "MongoDB"],
        image: "assets/projects/project4.jpeg",
        live: "#",
        github: "#"
    }
];


const projects = document.querySelector(".projects");

let currentIndex = 0;

const renderProject = (index) => {
    const projectContent = projectList[index];

    const previousDisabled = currentIndex === 0;

    const nextDisabled = currentIndex === projectList.length - 1;

    projects.innerHTML = `
    <div class="project-info">
    <h3>${projectContent?.number}</h3>
    <h4>${projectContent?.title}</h4>
    <p>${projectContent?.description}</p>
    <div class="tech-stack">
    ${projectContent?.techStack?.map((tech, i) => {
        return `
            <span key = ${i}>${tech}</span>
            `;
    }).join(",")
        }
    </div>
    <hr />
    <div class="links">
        <a href=${projectContent?.liveLink}>
            <i class="ph ph-arrow-right"></i>
        </a>
        <a href="${projectContent?.githubLink}">
            <i class="ph ph-github-logo"></i>
        </a>
    </div>
</div>
<div class="carousel">
                    <img src=${projectContent?.image} alt=${projectContent?.title} />

                    <div class="arrows">
                        <a href="#" id = "previous" class = ${previousDisabled ? "disabled-btn" : ""}>
                            <i class="ph ph-caret-left"}></i>
                        </a>
                        <a href="#" id = "next" class = ${nextDisabled ? "disabled-btn" : ""}>
                            <i class="ph ph-caret-right"></i>
                        </a>
                    </div>
                </div>
    `;
    document.getElementById
        ('previous').addEventListener
        ("click", (e) => {
            e.preventDefault();

            if (currentIndex > 0) {
                currentIndex--;
                renderProject(currentIndex);
            }
        });
    document.getElementById
        ('next').addEventListener
        ("click", (e) => {
            e.preventDefault();

            if (currentIndex < projectList.length - 1) {
                currentIndex++;
                renderProject(currentIndex);
            }
        });
};
renderProject(currentIndex);
