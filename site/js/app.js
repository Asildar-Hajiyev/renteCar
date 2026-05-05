document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".nav-link");
    const navLinks2 = document.querySelectorAll(".nav-link2");
    const pageTitle = document.getElementById("pageTitle");
    const pageMiniTitle = document.getElementById("pageMiniTitle");

    // ── Desktop nav ──────────────────────────────────────────
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Hamısını default vəziyyətə qaytar
            navLinks.forEach(item => {
                item.classList.remove("text-yellow-400");
                item.classList.add("text-black");        // ✅ text-white → text-black
            });

            // Aktiv linki sarı et
            this.classList.remove("text-black");
            this.classList.add("text-yellow-400");

            // Başlıqları dəyiş
            const text = this.textContent.trim();
            pageTitle.textContent = text;
            pageMiniTitle.textContent = text;
        });
    });

    // ── Mobile nav ───────────────────────────────────────────
    navLinks2.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Hamısını default-a qaytar
            navLinks2.forEach(item => {
                item.classList.remove("text-gray-500");
                item.classList.add("text-black");
            });

            // Aktivi fərqli göstər
            this.classList.remove("text-black");
            this.classList.add("text-gray-500");

            // Başlıqları dəyiş
            const text = this.textContent.trim();
            pageTitle.textContent = text;
            pageMiniTitle.textContent = text;

            // ✅ Mobile menüyü bağla
            menubars();
        });
    });

});

// ── Scroll kilidləmə ─────────────────────────────────────────
function lockScroll() {
   document.body.style.overflow = "hidden";
}

function unlockScroll() {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
}

function menubars() {
    const mobileMenu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("overlay");

    mobileMenu.classList.toggle("translate-x-full");

    const isOpen = !mobileMenu.classList.contains("translate-x-full");

    if (isOpen) {
        overlay.classList.remove("opacity-0", "pointer-events-none");
        overlay.classList.add("opacity-100");
        lockScroll(); 
    } else {
        overlay.classList.add("opacity-0", "pointer-events-none");
        overlay.classList.remove("opacity-100");
        unlockScroll();
    }
}