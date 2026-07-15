const toggle = document.getElementById("menu-toggle");

if (toggle) {
    toggle.addEventListener('change', () => {
        document.body.classList.toggle
            ("no-scroll", toggle.checked);
    });
}

const words = [
    "Aspiring Software Engineer",
    "Frontend Developer",
    "C++ Programmer",
    "Problem Solving",
    "Continuous Learner",
];
const typingText = document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let tyingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, nextWordDelay)
        }
        else {
            setTimeout(type, tyingDelay);
        }
    } else {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex == 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        }
        else {
            setTimeout(type, erasingDelay);
        }
    }
};
document.addEventListener('DOMContentLoaded', () => {
    if (words?.length) type();
})

const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navlinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        navlinks.forEach((l) => {
            if (l == link) {
                link.classList.add('active');
            } else {
                l.classList.remove("active");
            }
        });

        const tabName = link.dataset.tab;

        tabs.forEach((tab) => {
            if (tab.id === tabName) {
                tab.classList.add("active");
            } else {
                tab.classList.remove("active");
            }
        });
        if (tabName === "services") {
            const serviceList = [
                {
                    id: 1,
                    icon: "ph-code",
                    text: "Frontend Web Development",
                    para: "I build responsive, modern, and user-friendly websites using HTML, CSS, JavaScript, and React with clean code."
                },
                {
                    id: 2,
                    icon: "ph-devices",
                    text: "Responsive Web Design",
                    para: "I create websites that work smoothly across desktops, tablets, and mobile devices for a better user experience."
                },
                {
                    id: 3,
                    icon: "ph-file-js",
                    text: "React Development",
                    para: "I develop interactive and reusable user interfaces with React using a component-based approach."
                },
                {
                    id: 4,
                    icon: "ph-code-block",
                    text: "C++ Programming",
                    para: "I solve programming problems and improve logical thinking through C++ and Data Structures & Algorithms."
                },
                {
                    id: 5,
                    icon: "ph-lightbulb",
                    text: "Problem Solving",
                    para: "I enjoy solving coding challenges and writing efficient solutions using logical and analytical thinking."
                },
                {
                    id: 6,
                    icon: "ph-book-open",
                    text: "Continuous Learning",
                    para: "I continuously learn new technologies and build practical projects to improve my development skills."
                }
            ];

            const services = document.getElementsByClassName("services-list")

            const innerContent = serviceList.map((l) => {
                return `
                <div class="box" key = ${l?.id}>
                    <div class="head-icons">
                        <i class="ph ${l?.icon}"></i>
                        <span><i class="ph ph-arrow-down-right"></i></span>
                    </div>
                    <h3>${l.text}</h3>
                    <span class="spacer"></span>
                    <p>${l.para}</p>
                </div>
                `;
            }).join("");

            Array.from(services).forEach((ele) => {
                ele.innerHTML = innerContent;
            });
         }
         if(toggle){
         toggle.checked = false;
         document.body.classList.remove("no-scroll");
         }

     });
 });
