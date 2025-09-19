import formConfig from "../data/form.json"
import messages from "../data/messages.json"


export function renderForm() {
  const {inputsGroups, controllers} = formConfig;
  document.getElementById('form-section').innerHTML = `
    <form id="card-form" class="w-full max-w-sm space-y-6" novalidate>
      <!-- Nombre del titular -->
      <div>
        <label for="card-name" class="block text-sm font-medium text-gray-700">${inputsGroups.cardholder.label}</label>
        <input type="text" id="card-name" name="cardholder"
          placeholder="${inputsGroups.cardholder.placeholder}"
          class="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          maxlength="26" required/>
        <p id="err-name" class="text-red-500 text-xs mt-1 hidden"></p>
      </div>

      <!-- Número de tarjeta -->
      <div>
        <label for="card-number" class="block text-sm font-medium text-gray-700">Card Number</label>
        <input type="text" id="card-number" name="card-number"
          placeholder="e.g. 1234 5678 9123 0000"
          maxlength="19"
          class="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required/>
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
          </div>
          <p id="err-expiry" class="text-red-500 text-xs mt-1 hidden"></p>
        </div>
        <div>
          <label for="cvc-input" class="block text-sm font-medium text-gray-700">CVC</label>
          <input type="password" id="cvc-input" name="cvc" maxlength="3" placeholder="e.g. 123"
            class="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required/>
          <p id="err-cvc" class="text-red-500 text-xs mt-1 hidden"></p>
        </div>
      </div>

      <!-- Botón -->
      <button id="confirm-btn" type="submit"
        class="w-full py-2 px-4 bg-purple-950 text-white rounded-md shadow hover:bg-purple-800 focus:outline-none">
        ${controllers.submit.label}
      </button>
    </form>

    <!-- Mensaje de éxito oculto por defecto -->
    <section id="success-section" class="hidden text-center space-y-4">
      <img src="/icon-complete.svg" alt="Success" class="mx-auto w-16 h-16"/>
      <h2 class="text-2xl uppercase">${messages.success.title}</h2>
      <p class="text-gray-500">${messages.success.message}</p>
      <button id="success-continue-btn" class="bg-purple-800 text-white py-2 px-6 rounded-lg mt-4">${messages.success.continue}</button>
    </section>
  `;
}
