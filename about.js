const aboutTabs = document.querySelectorAll(".tab");

const aboutContent = document.querySelectorAll(".tab-content");
document.addEventListener('DOMContentLoaded', () => {
    if (aboutTabs) {
        aboutTabs[0].click();
    }
});

aboutTabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        e.preventDefault();

        aboutTabs.forEach((a) => {
            a.classList.remove("active");
        });
        tab.classList.add("active");

        aboutContent.forEach((c) => {
            c.classList.remove("active");
        });
        const activeTab = tab.dataset.tab;
        console.log(activeTab);
        console.log(document.getElementById(activeTab));

        document.getElementById(activeTab).classList.add("active");

        if (activeTab === "experience") {
            const experiences = document.querySelector(".experience-list");


            const experienceList = [
                {
                    id: 1,
                    role: "Frontend Web Development",
                    company: "Self Learning",
                    duration: "2026 - Present",
                    description: "Building responsive websites and projects using HTML, CSS, JavaScript and React while improving frontend development skills."
                },
                {
                    id: 2,
                    role: "Data Structures & Algorithms",
                    company: "Self Learning",
                    duration: "2026 - Present",
                    description: "Practicing C++ and solving coding problems to strengthen problem-solving and programming skills."
                },
                {
                    id: 3,
                    role: "Software Engineering Intern",
                    company: "BasketHunt",
                    duration: "July 2026 - Present",
                    description: "Working on frontend web development using HTML, CSS, JavaScript, and React. Collaborating with the team to build responsive user interfaces and contribute to real-world software projects."
                },
                {
                    id: 4,
                    role: "Hackathon Participant",
                    company: "Vibethon 6.0",
                    duration: "2026",
                    description: "Participated in an online hackathon to gain practical experience in teamwork and project development."
                }
            ];
            const experienceContent = experienceList.map((ele) => {
                return `
                  <div class="experience-box">
                  <h3>${ele.role}</h3>
                  <h4>${ele.company}</h4>
                  <span>${ele.duration}</span>
                  <p>${ele.description}</p>
                  </div>
                  `;
            }).join("");

            if (experiences) {
                experiences.innerHTML = experienceContent;

            }

        } else if (activeTab === "education") {
            const education = document.querySelector('.education-list');

            const educationList = [
                {
                    id: 1,
                    duration: "2025 - Present",
                    degree: "Bachelor of Technology (B.Tech)",
                    institute: "Aligarh Muslim University",
                    description: "Pursuing B.Tech in Electrical Engineering while continuously developing skills in software development and web technologies."
                },
                {
                    id: 2,
                    duration: "",
                    degree: "Senior Secondary (Class XII)",
                    institute: "Aligarh Muslim University",
                    description: "Completed higher secondary education with a Science background."
                },
                {
                    id: 3,
                    duration: "",
                    degree: "Secondary School (Class X)",
                    institute: "Bihar School Examination Board",
                    description: "Completed secondary education with a strong academic foundation."
                }
            ];
            const innerContent = educationList.map((e) => {
                return `
        <div class="experience-box">
            ${e.duration ? `<h4>${e.duration}</h4>` : ""}
            <h3>${e.degree}</h3>
            <div class="company-name">
                <span></span>
                <p>${e.institute}</p>
            </div>
            <p>${e.description}</p>
        </div>
    `;
            }).join("");
            if (education) {
                education.innerHTML = innerContent;
            }
        } else if (activeTab === "skills") {
            const skills = document.querySelector('.skills-list');


            const skillsList = [
                {
                    id: 1,
                    name: "HTML",
                    image: "assets/skills/html.png.jpeg"
                },
                {
                    id: 2,
                    name: "CSS",
                    image: "assets/skills/css.png.jpeg"
                },
                {
                    id: 3,
                    name: "JavaScript",
                    image: "assets/skills/js.png.jpeg"
                },
                {
                    id: 4,
                    name: "React",
                    image: "assets/skills/react.png.jpeg"
                },
                {
                    id: 5,
                    name: "Node.js",
                    image: "assets/skills/node.png.jpeg"
                },
                {
                    id: 6,
                    name: "Bootstrap",
                    image: "assets/skills/bootstrap.png.jpeg"
                },
                {
                    id: 7,
                    name: "MongoDB",
                    image: "assets/skills/mongodb.png.jpeg"
                },
                {
                    id: 8,
                    name: "Git",
                    image: "assets/skills/git.png"
                },
                {
                    id: 9,
                    name: "GitHub",
                    image: "assets/skills/github.png"
                },
                {
                    id: 10,
                    name: "C++",
                    image: "assets/skills/c++logo.png"
                }
            ];
            const skillContent = skillsList.map((skill) => {
                return `
        <div class="skill-box">
            <img src="${skill.image}" alt="${skill.name}">
            <h3>${skill.name}</h3>
        </div>
    `;
            }).join("");

            const skillsContainer = document.querySelector(".skills-list");

            if (skills) {
                skillsContainer.innerHTML = skillContent;
            }
        } else if (activeTab === "about-me") {
            const myInfo = document.querySelector(".my-info");

            const infoList = [
                {
                    id: 1,
                    title: "Name",
                    value: "Md Mohsin Alam"
                },
                {
                    id: 2,
                    title: "Education",
                    value: "B.Tech in Electrical Engineering"
                },
                {
                    id: 3,
                    title: "University",
                    value: "Aligarh Muslim University"
                },
                {
                    id: 4,
                    title: "Experience",
                    value: "Software Engineering Intern"
                },
                {
                    id: 5,
                    title: "Specialization",
                    value: "Frontend Development"
                },
                {
                    id: 6,
                    title: "Tech Stack",
                    value: "HTML, CSS, JavaScript, React"
                },
                {
                    id: 7,
                    title: "Programming",
                    value: "C++, Data Structures & Algorithms"
                },
                {
                    id: 8,
                    title: "Open To",
                    value: "Software Engineering Internships"
                }
            ];
            const infoContent = infoList.map((info) => {
                return `
        <div class="info-box">
            <span>${info.title} :</span>
            <span>${info.value}</span>
        </div>
    `;
            }).join("");
            if (myInfo) {
                myInfo.innerHTML = infoContent;
            }
        }
    });
});