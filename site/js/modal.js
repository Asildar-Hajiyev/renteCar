const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const cancelBtn = document.getElementById("cancelBtn");
const overlay = document.getElementById("modalOverlay");
const dialog = overlay.querySelector("[role='dialog']");

// Open
openBtn.onclick = () => {
    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    dialog.focus();
};

// Close
function closeModal() {
    overlay.classList.add("hidden");
    document.body.style.overflow = "";
    openBtn.focus();
}

closeBtn.onclick = cancelBtn.onclick = closeModal;

// Click outside
overlay.onclick = (e) => {
    if (e.target === overlay) closeModal();
};

// ESC + Tab trap
document.addEventListener("keydown", (e) => {
    if (overlay.classList.contains("hidden")) return;

    if (e.key === "Escape") closeModal();

    if (e.key === "Tab") {
        const focusable = dialog.querySelectorAll(
            "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
        );

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }
});


const container = document.getElementById("zoomContainer");
const img = document.getElementById("zoomImg");

container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();

  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  img.style.transformOrigin = `${x}% ${y}%`;
  img.style.transform = "scale(2)";
});

container.addEventListener("mouseleave", () => {
  img.style.transform = "scale(1)";
  img.style.transformOrigin = "center";
});