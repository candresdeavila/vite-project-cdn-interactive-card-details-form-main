// src/js/formHandler.js
import { validateName, validateNumber, validateDate, validateCVC } from "./validations.js";

export function setupFormHandlers() {
  const form = document.getElementById("card-form");
  const successSection = document.getElementById("success-section");

  // Validación en tiempo real
  document.getElementById("card-name").addEventListener("blur", validateName);
  document.getElementById("card-number").addEventListener("blur", validateNumber);
  document.getElementById("card-exp-month").addEventListener("blur", validateDate);
  document.getElementById("card-exp-year").addEventListener("blur", validateDate);
  document.getElementById("card-cvc").addEventListener("blur", validateCVC);

  // Submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isNameValid = validateName();
    const isNumberValid = validateNumber();
    const isDateValid = validateDate();
    const isCvcValid = validateCVC();

    if (isNameValid && isNumberValid && isDateValid && isCvcValid) {
      form.classList.add("hidden");
      successSection.classList.remove("hidden");
    } else {
      if (!isNameValid) document.getElementById("card-name").focus();
      else if (!isNumberValid) document.getElementById("card-number").focus();
      else if (!isDateValid) document.getElementById("card-exp-month").focus();
      else if (!isCvcValid) document.getElementById("card-cvc").focus();
    }
  });

  // Botón Continue (en la sección de éxito)
  const successContinueBtn = document.getElementById("success-continue-btn");
  if (successContinueBtn) {
    successContinueBtn.addEventListener("click", () => {
      // reset form
      form.reset();

      // Forzar actualización de los displays con los defaults
      document.getElementById("card-name").dispatchEvent(new Event("input"));
      document.getElementById("card-number").dispatchEvent(new Event("input"));
      document.getElementById("card-exp-month").dispatchEvent(new Event("input"));
      document.getElementById("card-exp-year").dispatchEvent(new Event("input"));
      document.getElementById("card-cvc").dispatchEvent(new Event("input"));

      successSection.classList.add("hidden");
      form.classList.remove("hidden");
    });
  }
}
