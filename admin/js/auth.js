let successMessage = document.getElementById("successMessage");
let errorMessage = document.getElementById("errorMessage");
let infoMessage = document.getElementById("infoMessage");
let sideAlert = document.getElementById('sideAlert')

let email = document.getElementById("email");
let password = document.getElementById("password");

let user = "admin@admin.com";
let pass = "admin123";
// async function getUser() {
//     let x = await fetch('ssss')
//     z = x.json()
//     login()
// }

async function login() {
    const emailValue = email.value;
    const passwordValue = password.value;

  if (emailValue.trim() === "" || passwordValue.trim() === "") {
      sideAlert.innerHTML=`
             <div class="flex items-start gap-3">
                <!-- Icon -->
                <div class="bg-red-100 text-red-600 p-2 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4m0 4h.01M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9
                    9-4.03 9-9-4.03-9-9-9z" />
                </svg>
                </div>

                <!-- Text -->
                <div class="flex-1">
                <h4 class="font-semibold text-gray-800">
                    Boş xanalar var
                </h4>

                <p class="text-sm text-gray-500 mt-1">
                    Zəhmət olmasa bütün input sahələrini doldurun.
                </p>
                </div>

                <!-- Close -->
                <button onclick="closeAlert()" class="text-gray-400 hover:text-red-500">
                ✕
                </button>

            </div>
        `
    ;
    sideAlert.style.right = "20px";
    
setTimeout(() => {
     sideAlert.style.right = "-400px"
}, 3000);
  return;
  }

  if (!emailValue.includes("@") || (!emailValue.includes(".com") && (!emailValue.includes('.az')))) {
     infoMessage.innerHTML = `<div

  class=" mb-4 flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 shadow-sm"
>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-0.5 shrink-0" fill="none"
    viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20
      10 10 0 000-20z" />
  </svg>

  <div>
    <p class="font-semibold">Məlumat</p>
    <p class="text-sm">Email tipində yanlış giriş</p>
  </div>
</div>`;
infoMessage.style.display = "block";
 return } 
 else if (
    emailValue === user &&
    passwordValue == pass &&
    passwordValue.length > 7
  ) {
     successMessage.innerHTML = `
       <div

  class=" mb-4 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-700 shadow-sm"
>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-0.5 shrink-0" fill="none"
    viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M5 13l4 4L19 7" />
  </svg>

  <div>
    <p class="font-semibold">Uğurlu əməliyyat</p>
    <p class="text-sm">Qeydiyyat uğurla tamamlandı.</p>
  </div>
</div>`;
successMessage.style.display = "block";
console.log("login clicked");
let promise = new Promise(setTimeout(() => {
  window.location.href = "../pages/dashboard.htm";
}, 1000));

   

  } else {
    errorMessage.innerHTML = `<div
      
        class=" mb-4 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700 shadow-sm"
        >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-0.5 shrink-0" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 8v4m0 4h.01M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9
            9-4.03 9-9-4.03-9-9-9z" />
        </svg>

        <div>
            <p class="font-semibold">Xəta baş verdi</p>
            <p class="text-sm">Zəhmət olmasa məlumatları düzgün daxil edin.</p>
        </div>
        </div>`;
        errorMessage.style.display = "block";
  }

  setTimeout(() => {
    successMessage.innerHTML = "";
    errorMessage.innerHTML = "";
    infoMessage.innerHTML = "";
    

    successMessage.style.display = "none";
    errorMessage.style.display = "none";
    infoMessage.style.display = "none";

  //  email.value = "";
    password.value = "";
  }, 3000);
}

function showPassword() {
  password.type === "password"
    ? (password.type = "text")
    : (password.type = "password");
}

function closeAlert(){
    sideAlert.style.right = "-400px";
}
