import { formatCardNumber } from "./validations.js";
import cardDefaults from "../data/card-defaults.json";

export function setupSyncInputs() {
  const numberInput = document.getElementById("card-number");
  const nameInput = document.getElementById("card-name");
  const monthInput = document.getElementById("card-exp-month");
  const yearInput = document.getElementById("card-exp-year");
  const cvcInput = document.getElementById("cvc-input");

  const numberDisplay = document.getElementById("card-number-display");
  const nameDisplay = document.getElementById("card-name-display");
  const expiryDisplay = document.getElementById("card-expiry-display");
  const cvcDisplay = document.getElementById("card-cvc");

  if (numberInput) {
    numberInput.addEventListener("input", (e) => {
      const formatted = formatCardNumber(e.target.value);
      e.target.value = formatted;
      if (numberDisplay) numberDisplay.textContent = formatted || cardDefaults.display.number;
    });
  }

  if (nameInput) {
    nameInput.addEventListener("input", (e) => {
      if (nameDisplay) nameDisplay.textContent = e.target.value || cardDefaults.display.name;
    });
  }

  function updateExpiry() {
    const mm = (monthInput?.value || cardDefaults.display.expiry.month);
    const yy = (yearInput?.value || cardDefaults.display.expiry.year);
    if (expiryDisplay) expiryDisplay.textContent = `${mm}${cardDefaults.display.expiry.separator}${yy}`;
  }
  if (monthInput) monthInput.addEventListener("input", updateExpiry);
  if (yearInput) yearInput.addEventListener("input", updateExpiry);

  if (cvcInput) {
    cvcInput.addEventListener("input", (e) => {
      let v = e.target.value.replace(/\D/g, "");
      if (v.length > 3) v = v.slice(0, 3);
      e.target.value = v;
      if (cvcDisplay) cvcDisplay.textContent = v || cardDefaults.display.cvc;
    });
  }
}
