const contactForm = document.querySelector("#contact-form");

contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name").toString().trim();
    const subject = formData.get("subject").toString().trim();
    const message = formData.get("message").toString().trim();
    const body = `From: ${name}\n\n${message}`;
    const mailtoUrl = `mailto:greyson.ekstrom@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
});
