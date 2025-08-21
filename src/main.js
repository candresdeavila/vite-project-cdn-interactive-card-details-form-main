import cardFront from './assets/bg-card-front.png';
import cardBack from './assets/bg-card-back.png';

//1. Renderizamos las dos tarjetas
document.getElementById('cards-section').innerHTML = `
  <div class="relative w-full h-[300px] md:h-[500px] flex items-center justify-center">
    
   <!-- Tarjeta trasera -->
<div class="absolute top-1 right-0 md:top-[280px] md:left-[80px] w-72 h-40 md:w-96 md:h-52 shadow-lg rounded-xl overflow-hidden">
  <img src="${cardBack}" alt="Back of card" class="w-full h-full object-cover">
  <!-- Código CVC -->
  <div class="absolute top-[70px] md:top-[90px] right-9 text-white text-sm md:text-base tracking-widest" id="card-cvc">
    000
  </div>
</div>


    <!-- Tarjeta frontal -->
<div class="absolute top-24 left-4 md:top-[30px] md:left-0 w-72 h-40 md:w-96 md:h-52 shadow-lg rounded-xl overflow-hidden">
  <img src="${cardFront}" alt="Front of card" class="absolute inset-0 w-full h-full object-cover">

  <!-- Círculo grande -->
  <div class="absolute top-4 left-4 w-10 h-10 bg-white rounded-full"></div>

  <!-- Círculo pequeño -->
  <div class="absolute top-8 left-16 w-4 h-4 border border-white rounded-full"></div>

  <!-- Contenido tarjeta -->
  <div class="absolute bottom-8 md:bottom-6 left-4 right-4 text-white z-10">
    <div class="relative top-0 md:-top-4 text-xl md:text-2xl font-bold tracking-wide md:tracking-widest mb-1 ml-4">
      <span id="card-number-display">0000 0000 0000 0000</span>
    </div>
    <div class="flex justify-between text-xs md:text-sm uppercase leading-none">
      <span class="ml-4" id="card-name-display">Jane Appleseed</span>
      <span id="card-expiry-display" class="tracking-wider">00/00</span>
    </div>
  </div>
 </div>
</div>
`;

//2. Renderizamos el formulario en form-section
document.getElementById('form-section').innerHTML = `
  <form id="card-form" class="w-full max-w-sm space-y-6" novalidate>
    <!-- Nombre del titular -->
    <div>
      <label for="card-name" class="block text-sm font-medium text-gray-700">Cardholder Name</label>
      <input type="text" id="card-name" name="cardholder" 
        placeholder="e.g. Jane Appleseed"
        class="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" maxlength="50" required/>
         <p id="err-name" class="text-red-500 text-xs mt-1 hidden"></p>
    </div>

    <!-- Número de tarjeta -->
    <div>
      <label for="card-number" class="block text-sm font-medium text-gray-700">Card Number</label>
      <input type="text" id="card-number" name="card-number" 
        placeholder="e.g. 1234 5678 9123 0000"
        maxlength="19"
        class="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required/>
        <p id="err-number" class="text-red-500 text-xs mt-1 hidden"></p>
    </div>

    <!-- Fecha y CVC -->
    <div class="grid grid-cols-3 gap-2">
      <div class="col-span-2">
        <label for="exp-date" class="block text-sm font-medium text-gray-700">Exp. Date (MM/YY)</label>
        <div class="flex gap-2">
          <input type="text" id="card-exp-month" name="exp-month" maxlength="2" placeholder="MM"
            class="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required/>
          <input type="text" id="card-exp-year" name="exp-year" maxlength="2" placeholder="YY"
            class="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required/>
            <p id="err-expiry" class="text-red-500 text-xs mt-1 hidden"></p>
        </div>
      </div>
      <div>
        <label for="card-cvc-display" class="block text-sm font-medium text-gray-700">CVC</label>
        <input type="text" id="card-cvc-display" name="cvc" maxlength="3" placeholder="e.g. 123"
          class="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required/>
          <p id="err-cvc" class="text-red-500 text-xs mt-1 hidden"></p>
      </div>
    </div>

    <!-- Botón -->
    <button id="continue-btn" type="submit" 
      class="w-full py-2 px-4 bg-purple-950 text-white rounded-md shadow hover:bg-purple-800 focus:outline-none">
      Confirm
    </button>
  </form>
  <!-- Mensaje de éxito oculto por defecto -->
<section id="success-section" class="hidden">
  <img src="./public/icon-complete.svg" alt="Success" />
  <h2>THANK YOU!</h2>
  <p>We've added your card details</p>
  <button id="continue-btn">Continue</button>
</section>

`;

// 3. Sincronizar inputs con tarjeta
// --- Sincronización de inputs con tarjeta ---
const numberInput = document.getElementById("card-number");
const nameInput = document.getElementById("card-name");
const monthInput = document.getElementById("card-exp-month");
const yearInput = document.getElementById("card-exp-year");
const cvcInput = document.getElementById("card-cvc");

// Elementos a actualizar en tarjeta
const numberDisplay = document.getElementById("card-number-display");
const nameDisplay = document.getElementById("card-name-display");
const expiryDisplay = document.getElementById("card-expiry-display");
const cvcDisplay = document.getElementById("card-cvc-display");

// Número de tarjeta
numberInput.addEventListener("input", (e) => {
  numberDisplay.textContent = e.target.value || "0000 0000 0000 0000";
});

// Nombre
nameInput.addEventListener("input", (e) => {
  nameDisplay.textContent = e.target.value || "Jane Appleseed";
});

// Fecha
function updateExpiry() {
  const month = monthInput.value || "00";
  const year = yearInput.value || "00";
  expiryDisplay.textContent = `${month}/${year}`;
}
monthInput.addEventListener("input", updateExpiry);
yearInput.addEventListener("input", updateExpiry);

// CVC
cvcInput.addEventListener("input", (e) => {
  cvcDisplay.textContent = e.target.value || "000";
});


// 4. Validación del formulario
// === VALIDACIÓN SOLO DEL NOMBRE ===
const form = document.getElementById("card-form");
const errName = document.getElementById("err-name");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita que recargue

  // Expresión: solo letras y espacios
  const nameRegex = /^[a-zA-Z\s]+$/;

  if (
    nameInput.value.trim() === "" ||              // vacío
    !nameRegex.test(nameInput.value)              // contiene números u otros símbolos
  ) {
    errName.textContent = "Please enter a valid name (letters only)";
    errName.classList.remove("hidden");
  } else {
    errName.textContent = "";
    errName.classList.add("hidden");
    console.log("✅ Nombre válido"); // prueba en consola
  }
});



// === VALIDACIÓN DEL NÚMERO DE TARJETA ===
const errNumber = document.getElementById("err-number");

// Dar formato automáticamente mientras escribe
numberInput.addEventListener("input", (e) => {
  // quitar espacios previos
  let value = e.target.value.replace(/\s+/g, "");
  // permitir solo números
  value = value.replace(/\D/g, "");
  // dividir en grupos de 4
  const formattedValue = value.match(/.{1,4}/g)?.join(" ") || "";
  e.target.value = formattedValue;
});

// Validar en submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const rawValue = numberInput.value.replace(/\s+/g, ""); // quitar espacios
  const cardRegex = /^\d{16}$/; // exactamente 16 números

  if (!cardRegex.test(rawValue)) {
    errNumber.textContent = "Card number must be 16 digits";
    errNumber.classList.remove("hidden");
  } else {
    errNumber.textContent = "";
    errNumber.classList.add("hidden");
    console.log("✅ Número válido");
  }
});
