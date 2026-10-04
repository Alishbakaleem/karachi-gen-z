document.addEventListener("DOMContentLoaded", () => {
    // Fade the page in when it loads
    document.body.classList.add("page-loaded");
    // Add a fade-out before navigating to another page
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            const href = link.getAttribute("href");
            // Only animate links to our own HTML pages
            if (
                href &&
                href.endsWith(".html") &&
                !href.startsWith("#")
            ) {
                event.preventDefault();
                document.body.classList.remove("page-loaded");
                document.body.classList.add("page-exit");
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });
});