document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".nav-link");
    const navLinks2 = document.querySelectorAll(".nav-link2");
    const pageTitle = document.getElementById("pageTitle");
    const pageMiniTitle = document.getElementById("pageMiniTitle");

    navLinks.forEach(link => {

        link.addEventListener("click", function(e){
            e.preventDefault();

            // active class
            navLinks.forEach(item => {
                item.classList.remove("text-yellow-400");
                item.classList.add("text-white");
            });

            this.classList.remove("text-white");
            this.classList.add("text-yellow-400");

            // text change
            const text = this.textContent.trim();

            pageTitle.textContent = text;
            pageMiniTitle.textContent = text;
        });

    });
    navLinks2.forEach(link => {

        link.addEventListener("click", function(e){
            e.preventDefault();

            // active class
            navLinks2.forEach(item => {
                item.classList.remove("text-gray-500");
                item.classList.add("text-black");
            });

            this.classList.remove("text-black");
            this.classList.add("text-gray-500");

            // text change
            const text = this.textContent.trim();

            pageTitle.textContent = text;
            pageMiniTitle.textContent = text;
        });

    });

});


//  const img = document.getElementById("zoomImg");

//   img.addEventListener("mousemove", (e) => {
//     const rect = img.getBoundingClientRect();

//     const x = ((e.clientX - rect.left) / rect.width) * 100;
//     const y = ((e.clientY - rect.top) / rect.height) * 100;

//     img.style.transformOrigin = `${x}% ${y}%`;
//     img.style.transform = "scale(1.4)"; // 🔥 azaldıldı
//   });

//   img.addEventListener("mouseleave", () => {
//     img.style.transform = "scale(1)";
//     img.style.transformOrigin = "center center";
//   });

function lockScroll() {
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = scrollBarWidth + "px";
}

function unlockScroll() {
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
}

function menubars(){
   let mobileMenu = document.getElementById('mobileMenu')
   if (mobileMenu.style.display === "block") {
    mobileMenu.classList.remove('animate__fadeInRight');
    mobileMenu.classList.add('animate__fadeOutRight');
    
    unlockScroll();
    setTimeout(() => {
      mobileMenu.style.display = "none";
    }, 500);

  } else {
  
    mobileMenu.style.display = "block"; 
    lockScroll();
    mobileMenu.classList.remove('animate__fadeOutRight');
    mobileMenu.classList.add('animate__animated', 'animate__fadeInRight');
  }
}
