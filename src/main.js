import cardFront from './assets/bg-card-front.png';
import cardBack from './assets/bg-card-back.png';

// Renderizamos las dos tarjetas
document.getElementById('cards-section').innerHTML = `
  <div class="relative w-full h-[300px] md:h-[500px] flex items-center justify-center">
    
    <!-- Tarjeta trasera -->
    <div class="absolute -top-12 right-0 md:top-[280px] md:left-[80px] w-72 h-40 md:w-96 md:h-52 shadow-lg rounded-xl overflow-hidden">
      <img src="${cardBack}" alt="Back of card" class="w-full h-full object-cover">
    </div>

    <!-- Tarjeta frontal -->
<div class="absolute top-11 left-4 md:top-[30px] md:left-0 w-72 h-40 md:w-96 md:h-52 shadow-lg rounded-xl overflow-hidden">
  <img src="${cardFront}" alt="Front of card" class="absolute inset-0 w-full h-full object-cover">

  <!-- Círculo grande -->
  <div class="absolute top-4 left-4 w-10 h-10 bg-white rounded-full"></div>

  <!-- Círculo pequeño -->
  <div class="absolute top-8 left-16 w-4 h-4 border border-white rounded-full"></div>

  <!-- Contenido tarjeta -->
  <div class="absolute bottom-6 left-4 right-4 text-white z-10">
    <div class="relative top-2 md:-top-4 text-xl md:text-2xl font-bold tracking-wide md:tracking-widest mb-2 ml-4">
      1234 5678 9012 3456
    </div>
    <div class="flex justify-between text-xs md:text-sm uppercase">
      <span class="ml-4">John Doe</span>
      <span>12/34</span>
    </div>
  </div>
 </div>
</div>
`;

// Renderizamos el formulario en form-section
document.getElementById('form-section').innerHTML = `
  <div class="w-full max-w-sm bg-white rounded-lg shadow-lg p-6">
    <form class="space-y-4">
      
      <!-- Nombre del titular -->
      <div>
        <label for="cardholder" class="block text-sm font-medium text-gray-700">Cardholder Name</label>
        <input type="text" id="cardholder" name="cardholder" placeholder="e.g. John Doe"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500">
      </div>

      <!-- Número de tarjeta -->
      <div>
        <label for="cardnumber" class="block text-sm font-medium text-gray-700">Card Number</label>
        <input type="text" id="cardnumber" name="cardnumber" placeholder="e.g. 1234 5678 9123 0000"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500">
      </div>

      <!-- Fecha y CVC -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="expdate" class="block text-sm font-medium text-gray-700">Exp. Date (MM/YY)</label>
          <input type="text" id="expdate" name="expdate" placeholder="MM/YY"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500">
        </div>
        <div>
          <label for="cvc" class="block text-sm font-medium text-gray-700">CVC</label>
          <input type="text" id="cvc" name="cvc" placeholder="e.g. 123"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500">
        </div>
      </div>

      <!-- Botón -->
      <button type="submit"
        class="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
        Confirm
      </button>

    </form>
  </div>
`;
