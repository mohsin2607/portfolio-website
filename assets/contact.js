const media = document.querySelector(".contact-media");


const contactList = [
    {
        id: 1,
        icon: "ph ph-phone-call",
        name: "Phone",
        value: "+91 9934528054",
        href: "tel:+919934528054"
    },
    {
        id: 2,
        icon: "ph ph-envelope-simple",
        name: "E-Mail",
        value: "mohsinalig309@gmail.com",
        href: "mailto:mohsinalig309@gmail.com"
    },
    {
        id: 3,
        icon: "ph ph-map-pin-area",
        name: "Location",
        value: "Bihar, India",
        href: "#"
    },
    {
        id: 4,
        icon: "ph ph-github-logo",
        name: "GitHub",
        value: "github.com/mohsin2607",
        href: "https://github.com/mohsin2607"
    },
    {
        id: 5,
        icon: "ph ph-linkedin-logo",
        name: "LinkedIn",
        value: "linkedin.com/in/md-mohsin-alam-b38a2a377",
        href: "https://www.linkedin.com/in/md-mohsin-alam-b38a2a377"
    }
];

const contactContent = contactList.map((ele) => {
    return `
     <div class="media" key =${ele?.id}>
                        <span>
                            <i class="${ele?.icon}"></i>
                        </span>
                        <div class="contact-value">
                            <p>${ele?.name}</p>
                            <a href = ${ele?.href}>${ele?.value}
                            </a>
                        </div>
                    </div>
    
    `;
}).join("");

if (media) media.innerHTML = contactContent;

//send contact message

const sendBtn = document.querySelector("#send-msg");

const originalText = sendBtn.innerHTML;
const originalStyle = {
    backgroundColor: sendBtn.style.backgroundColor,
    color: sendBtn.style.color,
    border: sendBtn.style.border,
    boxShadow: sendBtn.style.boxShadow,
};

document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();

    sendBtn.innerHTML = "sending...";
    sendBtn.style.backgroundColor = "white";
    sendBtn.style.border = "none";
    sendBtn.style.boxShadow = "none";

    sendBtn.disabled = true;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !phone || !message) {
        sendBtn.innerHTML = originalText;


        Object.assign(sendBtn.style, originalStyle);

        return Toastify({
            text: "All fields are Mandatory !",
            duration: 3000,
            gravity: "top",
            position: "center",
            close: true,
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "rgb(206,16,16)",
            },
        }).showToast();
    }


        emailjs.send("service_re4vou9", "template_0k4nr7h", {
            name,
            email,
            phone,
            message,
        }).then(() => {
            Toastify({
                text: "Message Sent !",
                duration: 3000,
                gravity: "top",
                position: "center",
                close: true,
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "rgb(9,222,38)",
                },
            }).showToast();

            setTimeout(() =>{
                sendBtn.innerHTML = originalText;
                Object.assign(sendBtn.style,originalStyle);

                sendBtn.disabled = false;
            },2000);
        },
        (error) => {
            Toastify({
                text: "Message Failed !",
                duration: 3000,
                gravity: "top",
                position: "center",
                close: true,
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "rgb(206,16,16)",
                },
            }).showToast();
            console.log('FAILED...', error);
             setTimeout(() =>{
                sendBtn.innerHTML = originalText;
                Object.assign(sendBtn.style,originalStyle);

                sendBtn.disabled = false;
            },2000);
        });
    });