const API_URL = "https://69f28857b15130b97352fd41.mockapi.io/product";

// ==========================
// SWIPER
// ==========================
function initSwiper() {
  new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 10,
    grabCursor: true,
    freeMode: true,
    breakpoints: {
      320: { slidesPerView: 2 },
      640: { slidesPerView: 3 },
      1024: { slidesPerView: 6 },
    },
  });
}

// ==========================
// MODAL INIT — DOM yüklənəndən SONRA çağırılır
// ==========================
function initModal() {
  const overlay = document.getElementById("modalOverlay");
  const closeBtn = document.getElementById("closeModal");
  const cancelBtn = document.getElementById("cancelBtn");
  const dialog = overlay.querySelector("[role='dialog']");

  // OPEN
  window.openModal = function () {
    overlay.style.display = "flex";
    document.body.style.overflow = "hidden";
    dialog.focus();
  };

  // CLOSE
  window.closeModal = function () {
    overlay.style.display = "none";
    document.body.style.overflow = "";
  };

  closeBtn.addEventListener("click", window.closeModal);
  cancelBtn.addEventListener("click", window.closeModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) window.closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") window.closeModal();
  });

  // ZOOM
  const container = document.getElementById("zoomContainer");
  const zoomImg = document.getElementById("zoomImg");

  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    zoomImg.style.transformOrigin = `${x}% ${y}%`;
    zoomImg.style.transform = "scale(2)";
  });

  container.addEventListener("mouseleave", () => {
    zoomImg.style.transform = "scale(1)";
    zoomImg.style.transformOrigin = "center";
  });
}

// ==========================
// GET PRODUCTS
// ==========================

let page = 1;
let limit = 4;
function getdata() {
    let prevBtn = document.getElementById("prevBtn");
    let nextBtn = document.getElementById("nextBtn");
    let pageNum = document.getElementById("pageNum");
  const carcard = document.getElementById("carcard");

  if (!carcard) return;

  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      let start = (page - 1) * limit;
      let end = start + limit;
      carcard.innerHTML = "";
      data.slice(start, end).forEach((item) => {
        carcard.innerHTML += `
                <div class="w-[220px] rounded-2xl overflow-hidden border-2 border-[#1E1601] mt-10 relative bg-white shadow-md hover:shadow-xl duration-300 group">

                    <div class="overflow-hidden">
                        <img src="${item.productImage}" alt="${item.productName}"
                            class="w-full h-[200px] object-cover group-hover:scale-110 duration-500"/>
                    </div>

                    <div class="absolute top-2 right-2 z-10 bg-yellow-500 text-black px-3 py-1 rounded-xl font-bold text-sm shadow">
                        $${item.productPrice}
                    </div>

                    ${
                      item.productStatus == 1
                        ? `
                    <div class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow">SALE</div>
                    <div class="absolute top-10 left-2 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold shadow">-25%</div>
                    `
                        : ""
                    }

                    <div class="absolute right-[50%] top-[60%]">
                        <div class="relative group">
                            <div class="hidden group-hover:flex absolute left-1/2 -translate-x-1/2 top-[60%] w-[160px] bg-white rounded-2xl shadow-lg px-3 py-1 items-center justify-between z-20">

                                <div class="relative group/item cursor-pointer px-3 rounded-2xl hover:bg-yellow-500 duration-300">
                                    <i class="fa-solid fa-heart"></i>
                                    <span class="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible duration-300 whitespace-nowrap">Wishlist</span>
                                </div>

                                <div class="relative group/item cursor-pointer px-3 rounded-2xl hover:bg-yellow-500 duration-300">
                                    <i class="fa-solid fa-code-compare"></i>
                                    <span class="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible duration-300 whitespace-nowrap">Compare</span>
                                </div>

                                <div onclick="showDetails('${item.id}')"
                                    class="relative group/item cursor-pointer px-3 rounded-2xl hover:bg-yellow-500 duration-300">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <span class="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible duration-300 whitespace-nowrap">Preview</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    ${
                      item.productStatus == 1
                        ? `
                    <marquee class="text-[#1E1601] border-y border-[#1E1601] bg-yellow-400 py-1 text-xs font-semibold" scrollamount="4" direction="left">
                        Whole Sale ⚡ Whole Sale ⚡ Whole Sale ⚡
                    </marquee>
                    `
                        : ""
                    }

                    <button class="cursor-pointer w-full py-3 bg-[#1E1601] text-yellow-500 flex items-center justify-center gap-2 font-semibold hover:bg-yellow-500 hover:text-black duration-300">
                        <i class="fa-solid fa-cart-shopping"></i> Add to cart
                    </button>

                </div>
                `;
      });

            pageNum.innerHTML = `Səhifə: ${page}`;
            page == 1 ? (prevBtn.disabled = true) : (prevBtn.disabled = false);
            start + limit >= data.length
                ? (nextBtn.disabled = true)
                : (nextBtn.disabled = false);

            // EVENTLER
            nextBtn.onclick = () => {
                page++;
                getdata();
            };

            prevBtn.onclick = () => {
                if (page > 1) {
                    page--;
                    getdata();
                }
            };
        });
}



// ==========================
// SHOW DETAILS
// ==========================

function showDetails(id) {
  const modalTitle = document.querySelector("#modalOverlay h2");
  const modalPrice = document.querySelector("#modalOverlay .font-medium");
  const modalImg = document.getElementById("zoomImg");
  const modalDesc = document.getElementById("desc");

  fetch(`${API_URL}/${id}`)
    .then((res) => res.json())
    .then((item) => {
      modalTitle.innerText = item.productName;
      modalPrice.innerText = `$${item.productPrice}`;
      modalDesc.innerText = item.productDesc.slice(0, 75);
      modalImg.src = item.productImage;
      window.openModal();
    })
    .catch((err) => console.error("Detail xətası:", err));
}
