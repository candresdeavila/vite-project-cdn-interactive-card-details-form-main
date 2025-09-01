import cardFront from '../assets/bg-card-front.png';
import cardBack from '../assets/bg-card-back.png';

export function renderCards() {
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
}