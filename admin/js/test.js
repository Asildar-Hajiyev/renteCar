let cardList = document.getElementById("cardList");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let pageNum = document.getElementById("pageNum");

let page = 1;
let limit = 3;
convertedData = [];

async function pagination() {
    let calledData = await fetch("https://69b7c7a7ffbcd02860962418.mockapi.io/product")
    convertedData = await calledData.json();
    getData();
}

function getData() {
      let start = (page - 1) * limit;
  let end = start + limit;
  let cartList = document.getElementById("cartList");
  
      cartList.innerHTML = "";
        convertedData.slice(start, end).map((item) => {
            artList.innerHTML += `
            <div class="group bg-[#111827] border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/40 hover:-translate-y-1 duration-300 shadow-lg">

                <!-- IMAGE -->
                <div class="relative overflow-hidden">

                    <img
                        src="${item.productImage}"
                        alt="${item.productName}"
                        class="h-64 w-full object-cover group-hover:scale-110 duration-500"
                    />

                    <!-- CATEGORY -->
                    <span class="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-black/50 backdrop-blur-md text-white">
                        ${item.productStatus == "1" ? "Active" : "Deactive"}
                    </span>

                </div>

                <!-- CONTENT -->
                <div class="p-5">

                    <!-- TITLE -->
                    <div class="flex justify-between items-start gap-3">

                        <h3 class="text-lg font-bold text-white leading-tight line-clamp-2">
                            ${item.productName}
                        </h3>

                        <span class="text-cyan-400 font-bold text-lg whitespace-nowrap">
                            $${item.productPrice}
                        </span>

                    </div>

                    <!-- DESC -->
                    <p class="text-slate-400 text-sm mt-3 leading-6 line-clamp-2 min-h-[48px]">
                        ${item.productDesc}
                    </p>

                    <!-- INFO -->
                    <div class="grid grid-cols-2 gap-3 mt-5">

                        <div class="bg-[#1e293b] rounded-2xl p-3 text-center">
                            <p class="text-xs text-slate-400">Stock</p>
                            <h4 class="text-white font-bold mt-1">
                                ${item.productStock}
                            </h4>
                        </div>

                        <div class="bg-[#1e293b] rounded-2xl p-3 text-center">
                            <p class="text-xs text-slate-400">Status</p>
                            <h4 class="text-cyan-400 font-bold mt-1">
                                ${item.productStatus == '1'? 'İş Axtarır':"İş axtarmır"}
                            </h4>
                        </div>

                    </div>

                    <!-- BUTTONS -->
                    <div class="grid grid-cols-2 gap-3 mt-5">

                        <button
                        onclick="editPorduct(${item.id})"
                            class="cursor-pointer py-3 rounded-2xl bg-cyan-500/15 text-cyan-300 font-medium hover:bg-cyan-500/25 duration-300"
                        >
                            Edit
                        </button>

                        <button 
                        onclick="deleteData(${item.id})"
                            class="cursor-pointer py-3 rounded-2xl bg-rose-500/15 text-rose-300 font-medium hover:bg-rose-500/25 duration-300"
                        >
                            Delete
                        </button>

                    </div>

                </div>

            </div>
            `;
        })

  pageNum.innerHTML = `Səhifə: ${page}`;
  page == 1 ? (prevBtn.disabled = true) : (prevBtn.disabled = false);
  start + limit >= convertedData.length
    ? (nextBtn.disabled = true)
    : (nextBtn.disabled = false);
     
}

nextBtn.onclick = () => {
  page++;
  getData();
};
prevBtn.onclick = () => {
  page--;
  getData();
};
pagination();




/* function getData() {
  let cartList = document.getElementById("cartList");
  fetch("https://69b7c7a7ffbcd02860962418.mockapi.io/product")
    .then((res) => res.json())
    .then((data) => {
      cartList.innerHTML = "";

      data.map((item) => {
        cartList.innerHTML += `
            <div class="group bg-[#111827] border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/40 hover:-translate-y-1 duration-300 shadow-lg">

                <!-- IMAGE -->
                <div class="relative overflow-hidden">

                    <img
                        src="${item.productImage}"
                        alt="${item.productName}"
                        class="h-64 w-full object-cover group-hover:scale-110 duration-500"
                    />

                    <!-- CATEGORY -->
                    <span class="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-black/50 backdrop-blur-md text-white">
                        ${item.productStatus == "1" ? "Active" : "Deactive"}
                    </span>

                </div>

                <!-- CONTENT -->
                <div class="p-5">

                    <!-- TITLE -->
                    <div class="flex justify-between items-start gap-3">

                        <h3 class="text-lg font-bold text-white leading-tight line-clamp-2">
                            ${item.productName}
                        </h3>

                        <span class="text-cyan-400 font-bold text-lg whitespace-nowrap">
                            $${item.productPrice}
                        </span>

                    </div>

                    <!-- DESC -->
                    <p class="text-slate-400 text-sm mt-3 leading-6 line-clamp-2 min-h-[48px]">
                        ${item.productDesc}
                    </p>

                    <!-- INFO -->
                    <div class="grid grid-cols-2 gap-3 mt-5">

                        <div class="bg-[#1e293b] rounded-2xl p-3 text-center">
                            <p class="text-xs text-slate-400">Stock</p>
                            <h4 class="text-white font-bold mt-1">
                                ${item.productStock}
                            </h4>
                        </div>

                        <div class="bg-[#1e293b] rounded-2xl p-3 text-center">
                            <p class="text-xs text-slate-400">Status</p>
                            <h4 class="text-cyan-400 font-bold mt-1">
                                ${item.productStatus == '1'? 'İş Axtarır':"İş axtarmır"}
                            </h4>
                        </div>

                    </div>

                    <!-- BUTTONS -->
                    <div class="grid grid-cols-2 gap-3 mt-5">

                        <button
                        onclick="editPorduct(${item.id})"
                            class="cursor-pointer py-3 rounded-2xl bg-cyan-500/15 text-cyan-300 font-medium hover:bg-cyan-500/25 duration-300"
                        >
                            Edit
                        </button>

                        <button 
                        onclick="deleteData(${item.id})"
                            class="cursor-pointer py-3 rounded-2xl bg-rose-500/15 text-rose-300 font-medium hover:bg-rose-500/25 duration-300"
                        >
                            Delete
                        </button>

                    </div>

                </div>

            </div>
            `;
      });
    });
} */
