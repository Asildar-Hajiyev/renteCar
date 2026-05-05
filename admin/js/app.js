function modalDash (){
    let modalCart = document.getElementById('modalCart')
    modalCart.style.display === 'none' ? modalCart.style.display = 'block' : modalCart.style.display = 'none'
    
}

function toggleSearch() {
    const search = document.getElementById("mobileSearch");

  search.classList.toggle("hidden");
     if (!search.classList.contains("hidden")) {
    const input = search.querySelector("input");
    setTimeout(() => {
      input.focus();
    }, 100);
  }
}

    function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    sidebar.classList.toggle("-translate-x-full");
    overlay.classList.toggle("hidden");
  }
