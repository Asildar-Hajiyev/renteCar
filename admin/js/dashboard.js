let productName = document.getElementById("productName");
let productPrice = document.getElementById("productPrice");
let productCategory = document.getElementById("productCategory");
let productStock = document.getElementById("productStock");
let productImage = document.getElementById("productImage");
let productDesc = document.getElementById("productDesc");
let modalCart = document.getElementById("modalCart");
let productStatus = document.getElementById("productStatus");
let productID = document.getElementById('productID')
let updateFrom = document.getElementById('updateFrom')
let productIcon = document.getElementById('productIcon')


function sendProduct() {


  const nameValue = productName.value;
  const priceValue = productPrice.value;
  const categoryValue = productCategory.value;
  const stockValue = productStock.value;
  const imageValue = productImage.value;
  const descValue = productDesc.value;
  const statusValue = productStatus.value;
  const iconValue = productIcon.value;

  if (
    nameValue.trim() === "" ||
    priceValue.trim() === "" ||
    categoryValue.trim() === "" ||
    stockValue.trim() === "" ||
    imageValue.trim() === "" ||
    descValue.trim() === "" ||
    iconValue.trim() === "" ||
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
let limit = 4;

async function AllGetData() {
    let calledData = await fetch("https://69f28857b15130b97352fd41.mockapi.io/product")
    let data = await calledData.json();
    getData(data);
}

function getData(data) {
    let start = (page - 1) * limit;
    let end = start + limit;
    let cartList = document.getElementById("cartList");
    
        cartList.innerHTML = "";
            data.slice(start, end).map((item) => {
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
            })

    pageNum.innerHTML = `Səhifə: ${page}`;
    page == 1 ? (prevBtn.disabled = true) : (prevBtn.disabled = false);
    start + limit >= data.length
        ? (nextBtn.disabled = true)
        : (nextBtn.disabled = false);
        
    }

 
    nextBtn.onclick = () => {
    page++;
    AllGetData();
    };
    prevBtn.onclick = () => {
    page--;
    AllGetData();
    };




    function deleteData(id){
    fetch(`https://69f28857b15130b97352fd41.mockapi.io/product/${id}`,{
        method: "DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
        console.log("silindi",data.id)
        AllGetData()
    })
}


function editPorduct(id){
    fetch(`https://69f28857b15130b97352fd41.mockapi.io/product/${id}`)
    .then(res=>res.json())
    .then(data=>{
        productID.value = data.id
        productName.value = data.productName
        productPrice.value = data.productPrice
        productCategory.value = data.productCategory
        productStock.value = data.productStock
        productImage.value = data.productImage
        productDesc.value = data.productDesc
        productStatus.value = data.productStatus
        productIcon.value = data.productIcon
        modalCart.style.display = "block"
    })
}

function updateData(){
     const id = productID.value
    if(!id)return alert('her hansi mehsul sec')
        const dataUpdate={
    productName:productName.value,
    productPrice:productPrice.value,
    productCategory:productCategory.value,
    productStock:productStock.value,
    productImage:productImage.value,
    productDesc:productDesc.value,
    productStatus:productStatus.value,
    productIcon:productIcon.value
    }

    fetch(`https://69f28857b15130b97352fd41.mockapi.io/product/${id}`,{
        method:"PUT",
          headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(dataUpdate)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log("data>",data)
        alert('Ugurla Yenilendir')
        AllGetData()
        resetForm()
        modalCart.style.display = "none"
    })
}
function saveData() {

   if (productID.value) {
      updateData();   // id varsa update et
   } else {
      sendProduct();  // id yoxdursa yeni əlavə et
   }
}


function resetForm(){
    updateFrom.reset()
    productID.value = ''
    modalCart.style.display = "none"
}
function closeModal(){
    resetForm()
    modalCart.style.display = "none"
}

AllGetData();
