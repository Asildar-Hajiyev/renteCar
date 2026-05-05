function caregoryData(){
    fetch('https://69f28857b15130b97352fd41.mockapi.io/product')
    .then(res=>res.json())
    .then(json=>{
        json.map()
    })
}
function initSwiper(){
    new Swiper(".mySwiper", {
        slidesPerView: 6,
        spaceBetween: 10,
        grabCursor: true,
        freeMode: true,

        breakpoints: {
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
        }
    });
}
function getdata() {
    let carcard = document.getElementById('carcard')

     if (!carcard) {
        console.log("car-card tapılmadı");
        return;
    }
fetch('https://69f28857b15130b97352fd41.mockapi.io/product')
.then(resp => resp.json())
.then(res => {
    console.log(res)
    carcard.innerHTML = ''
    res.map(item=>{
        
          if(item.productStatus == 1){
             carcard.innerHTML +=`
             <div
            class="w-[220px] rounded-2xl overflow-hidden border-2 border-[#1E1601] mt-10 relative bg-white shadow-md hover:shadow-xl duration-300 group"
            >
            <!-- Image -->
            <div class="overflow-hidden">
                <img
                src="${item.productImage}"
                alt="${item.productName}"
                class="w-full h-[200px] object-cover group-hover:scale-110 duration-500"
                />
            </div>

            <!-- Price -->
            <div
                class="absolute top-2 right-2 z-10 bg-yellow-500 text-black px-3 py-1 rounded-xl font-bold text-sm shadow"
            >
                $${item.productPrice}
            </div>

            <!-- Sale -->
            <div
                class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow"
            >
                SALE
            </div>

            <!-- Discount -->
            <div
                class="absolute top-10 left-2 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold shadow"
            >
                -25%
            </div>
            <div class="absolute right-[50%] top-[60%]">
            <div class="relative group">
    
                <!-- Hover-də açılan panel -->
                <div
                    class="hidden group-hover:flex absolute left-1/2 -translate-x-1/2 top-[60%] w-[160px] 
                    bg-white rounded-2xl shadow-lg px-3 py-1 items-center justify-between z-20"
                >
                    <!-- Heart -->
                    <div class="relative group/item cursor-pointer px-3 rounded-2xl text-gray-700 hover:bg-yellow-500 hover:text-black duration-300">
                        <a href="#"><i class="fa-solid fa-heart text-gray-700 hover:text-red-500 duration-300"></i></a>

                        <span class="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible duration-300 whitespace-nowrap">
                            Wishlist
                        </span>
                    </div>

                    <!-- Compare -->
                    <div class="relative group/item cursor-pointer px-3 rounded-2xl text-gray-700 hover:bg-yellow-500 hover:text-black duration-300">
                         <a href="#"><i class="fa-solid fa-code-compare text-gray-700 hover:text-red-500 duration-300"></i></a>

                        <span class="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible duration-300 whitespace-nowrap">
                            Compare
                        </span>
                    </div>

                    <!-- Search -->
                    <div class="relative group/item cursor-pointer px-3 rounded-2xl text-gray-700 hover:bg-yellow-500 hover:text-black duration-300"> 
                         <a href="#"><i class="fa-solid fa-magnifying-glass text-gray-700 hover:text-blue-500 duration-300"></i></a>

                        <span class="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible duration-300 whitespace-nowrap">
                            Preview
                        </span>
                    </div>
                </div>

            </div>
           </div>

            <!-- Marquee -->
            <marquee
                class="text-[#1E1601] border-y border-[#1E1601] bg-yellow-400 py-1 text-xs font-semibold"
                scrollamount="4"
                direction="left"
            >
                Whole Sale ⚡ Whole Sale ⚡ Whole Sale ⚡
            </marquee>

            <!-- Button -->
            <button
                class="cursor-pointer w-full py-3 bg-[#1E1601] text-yellow-500 flex items-center justify-center gap-2 font-semibold hover:bg-yellow-500 hover:text-black duration-300"
            >
                <i class="fa-solid fa-cart-shopping"></i>
                Add to cart
            </button>
            </div>
        
   
        
        `
          }else{
            carcard.innerHTML +=`
                            <div
            class="w-[220px] rounded-2xl overflow-hidden border-2 border-[#1E1601] mt-10 relative bg-white shadow-md hover:shadow-xl duration-300 group"
            >
            <!-- Image -->
            <div class="overflow-hidden">
                <img
                src="${item.productImage}"
                alt="${item.productName}"
                class="w-full h-[200px] object-cover group-hover:scale-110 duration-500"
                />
            </div>

            <!-- Price -->
            <div
                class="absolute top-2 right-2 z-10 bg-yellow-500 text-black px-3 py-1 rounded-xl font-bold text-sm shadow"
            >
                $${item.productPrice}
            </div>
           <div class="absolute right-[50%] top-[60%]">
            <div class="relative group">
    
                <!-- Hover-də açılan panel -->
                <div
                    class="hidden group-hover:flex absolute left-1/2 -translate-x-1/2 top-[60%] w-[160px] 
                    bg-white rounded-2xl shadow-lg px-3 py-1 items-center justify-between z-20"
                >
                    <!-- Heart -->
                    <div class="relative group/item cursor-pointer px-3 rounded-2xl text-gray-700 hover:bg-yellow-500 hover:text-black duration-300">
                        <i class="fa-solid fa-heart text-gray-700 hover:text-red-500 duration-300"></i>

                        <span class="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible duration-300 whitespace-nowrap">
                            Wishlist
                        </span>
                    </div>

                    <!-- Compare -->
                    <div class="relative group/item cursor-pointer px-3 rounded-2xl text-gray-700 hover:bg-yellow-500 hover:text-black duration-300">
                        <i class="fa-solid fa-code-compare"></i>

                        <span class="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible duration-300 whitespace-nowrap">
                            Compare
                        </span>
                    </div>

                    <!-- Search -->
                    <div class="relative group/item cursor-pointer px-3 rounded-2xl text-gray-700 hover:bg-yellow-500 hover:text-black duration-300">
                        <i class="fa-solid fa-magnifying-glass text-gray-700 hover:text-blue-500 duration-300"></i>

                        <span class="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible duration-300 whitespace-nowrap">
                            Preview
                        </span>
                    </div>
                </div>

            </div>
           </div>
            <!-- Button -->
            <button
                class="w-full py-3 bg-[#1E1601] text-yellow-500 flex items-center justify-center gap-2 font-semibold hover:bg-yellow-500 hover:text-black duration-300"
            >
                <i class="fa-solid fa-cart-shopping"></i>
                Add to cart
            </button>
            </div>
            `
          }
    }).join('')
})
}


