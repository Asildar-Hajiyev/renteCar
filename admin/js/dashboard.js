let productName = document.getElementById("productName");
let productPrice = document.getElementById("productPrice");
let productCategory = document.getElementById("productCategory");
let productStock = document.getElementById("productStock");
let productImage = document.getElementById("productImage");
let productDesc = document.getElementById("productDesc");
let modalCart = document.getElementById("modalCart");
let productStatus = document.getElementById("productStatus");
let productID = document.getElementById("productID");
let updateFrom = document.getElementById("updateFrom");
let productIcon = document.getElementById("productIcon");
let productYear = document.getElementById("productYear");
let allProducts = document.getElementById("allProducts");
let activeCount = document.getElementById("activeCount");
let totalRevenue = document.getElementById("totalRevenue");

function sendProduct() {
  const nameValue = productName.value;
  const priceValue = productPrice.value;
  const categoryValue = productCategory.value;
  const stockValue = productStock.value;
  const imageValue = productImage.value;
  const descValue = productDesc.value;
  const statusValue = productStatus.value;
  const iconValue = productIcon.value;
  const yearValue = productYear.value;

  if (
    nameValue.trim() === "" ||
    priceValue.trim() === "" ||
    categoryValue.trim() === "" ||
    stockValue.trim() === "" ||
    imageValue.trim() === "" ||
    descValue.trim() === "" ||
    iconValue.trim() === "" ||
    yearValue.trim() === "" ||
    statusValue.trim() === ""
  ) {
    alert("Bütün xanaları doldurun!");
    return;
  }

  const data = {
    productName: nameValue,
    productPrice: priceValue,
    productCategory: categoryValue,
    productStock: stockValue,
    productImage: imageValue,
    productDesc: descValue,
    productStatus: statusValue,
    productIcon: iconValue,
    productYear: yearValue,
  };

  fetch("https://69f28857b15130b97352fd41.mockapi.io/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.id) {
        alert("Əməliyyat uğurla yerinə yetirildi!");
        productName.value = "";
        productPrice.value = "";
        productCategory.value = "";
        productStock.value = "";
        productImage.value = "";
        productDesc.value = "";
        productIcon.value = "";
        productStatus.value = "";
        productYear.value = "";
        modalCart.style.display = "none";
        AllGetData();
      } else {
        alert("Xəta baş verdi!");
        console.log(data.errors);
        AllGetData();
      }
    });
}

let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let pageNum = document.getElementById("pageNum");

let page = 1;
let limit = 8;
let searcData = [];
async function AllGetData() {
  let calledData = await fetch(
    "https://69f28857b15130b97352fd41.mockapi.io/product",
  );
  let data = await calledData.json();
  allProducts.innerHTML = data.length;
  activeCount.innerHTML = data.filter((p) => p.productStatus == "1").length;
  deactiveCount.innerHTML = data.filter((p) => p.productStatus == "0").length;
  let totalProfit = data.reduce((count, p) => {
    return count + +p.productPrice * +p.productStock;
  }, 0);
  totalRevenue.innerHTML = `$` + totalProfit;
  searcData = data;
  getData(data);
}

function getData(data) {
  let start = (page - 1) * limit;
  let end = start + limit;
  let cartList = document.getElementById("cartList");

  cartList.innerHTML = "";
  cartList.innerHTML = data.slice(start, end).map(renderCard).join("");

  pageNum.innerHTML = `Səhifə: ${page}`;
  page == 1 ? (prevBtn.disabled = true) : (prevBtn.disabled = false);
  start + limit >= data.length
    ? (nextBtn.disabled = true)
    : (nextBtn.disabled = false);
}
function renderCard(item) {
  return `
        
                <div class="group bg-[#111827] border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/40 hover:-translate-y-1 duration-300 shadow-lg">

                    <!-- IMAGE -->
                    <div class="relative overflow-hidden">

                        <img
                            src="${item.productImage}"
                            alt="${item.productName}"
                            class="h-64 w-full object-cover group-hover:scale-110 duration-500"
                        />
                        
                        <!-- YEAR -->
                       <span class="absolute top-4 left-2 px-3 py-1 rounded-full text-xs font-semibold bg-black/50 backdrop-blur-md text-white">
                            ${new Date(item.productYear).getFullYear()}
                        </span>

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
                                    ${item.productStatus == "1" ? "Endirimli Məhsul" : "Sadə Məhsul"}
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
}

nextBtn.onclick = () => {
  page++;
  AllGetData();
};
prevBtn.onclick = () => {
  page--;
  AllGetData();
};

function deleteData(id) {
  fetch(`https://69f28857b15130b97352fd41.mockapi.io/product/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("silindi", data.id);
      AllGetData();
    });
}

function editPorduct(id) {
  fetch(`https://69f28857b15130b97352fd41.mockapi.io/product/${id}`)
    .then((res) => res.json())
    .then((data) => {
      productID.value = data.id;
      productName.value = data.productName;
      productPrice.value = data.productPrice;
      productCategory.value = data.productCategory;
      productStock.value = data.productStock;
      productImage.value = data.productImage;
      productDesc.value = data.productDesc;
      productStatus.value = data.productStatus;
      productIcon.value = data.productIcon;
      productYear.value = data.productYear;
      modalCart.style.display = "block";
    });
}

function updateData() {
  const id = productID.value;
  if (!id) return alert("her hansi mehsul sec");
  const dataUpdate = {
    productName: productName.value,
    productPrice: productPrice.value,
    productCategory: productCategory.value,
    productStock: productStock.value,
    productImage: productImage.value,
    productDesc: productDesc.value,
    productStatus: productStatus.value,
    productIcon: productIcon.value,
    productYear: productYear.value,
  };

  fetch(`https://69f28857b15130b97352fd41.mockapi.io/product/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataUpdate),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("data>", data);
      alert("Ugurla Yenilendir");
      AllGetData();
      resetForm();
      modalCart.style.display = "none";
    });
}
function saveData() {
  if (productID.value) {
    updateData(); // id varsa update et
  } else {
    sendProduct(); // id yoxdursa yeni əlavə et
  }
}

function resetForm() {
  updateFrom.reset();
  productID.value = "";
  modalCart.style.display = "none";
}
function closeModal() {
  resetForm();
  modalCart.style.display = "none";
}

let searchOne = document.getElementById("searchOne");

searchOne.addEventListener("input", function () {
  let searchValue = searchOne.value;

  cartList.innerHTML = "";
  searchProduct(searchValue);
});

function searchProduct(searchOne) {
  let keywords = searchOne.toLowerCase();
  console.log(keywords);
  let filterProduct = searcData.filter((item) =>
    item.productName.toLowerCase().includes(keywords),
  );
  cartList.innerHTML = filterProduct.map(renderCard).join("");
}

let selectDate = document.getElementById("selectDate");
let selectStatus = document.getElementById("selectStatus");
let selectPrice = document.getElementById("selectPrice");

selectStatus.addEventListener("change", function () {
  let value = selectStatus.value;
  cartList.innerHTML = "";

  let filtered = searcData.filter((p) => {
    if (value == "1") return p.productStatus == "1";
    if (value == "0") return p.productStatus == "0";
    return true; // hamisi
  });
  cartList.innerHTML = filtered.map(renderCard).join("");
});

selectPrice.addEventListener("change", function () {
  let value = selectPrice.value;
  cartList.innerHTML = "";
  let sorted = [...searcData];
  if (value == "asc") {
    sorted.sort((a, b) => a.productPrice - b.productPrice);
  }
  if (value == "desc") {
    sorted.sort((a, b) => b.productPrice - a.productPrice);
  }

  cartList.innerHTML = sorted.map(renderCard).join("");
});
selectDate.addEventListener("change", function () {
  let value = selectDate.value;
  cartList.innerHTML = "";
  let sorted = [...searcData];
  if (value == "new")
    sorted.sort((a, b) => new Date(b.productYear) - new Date(a.productYear));
  if (value == "old")
    sorted.sort((a, b) => new Date(a.productYear) - new Date(b.productYear));

  cartList.innerHTML = sorted.map(renderCard).join("");
});

AllGetData();
