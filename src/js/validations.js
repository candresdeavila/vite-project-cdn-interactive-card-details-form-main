import validationRules from '../data/validation.json';

// helper: formatear número con espacios cada 4
export function formatCardNumber(raw) {
  const digits = (raw || "").replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(\d{4})(?=\d)/g, "$1 ");
}

// NAME
export function validateName() {
  const nameInput = document.getElementById("card-name");
  const errName = document.getElementById("err-name");
  const v = (nameInput?.value || "").trim();

  if (!v) {
    errName.textContent = validationRules.rules.cardholder.messages.required;
    errName.classList.remove("hidden");
    return false;
  }
  if (!new RegExp(validationRules.rules.cardholder.pattern).test(v)) {
    errName.textContent = validationRules.rules.cardholder.messages.format;
    errName.classList.remove("hidden");
    return false;
  }
  errName.textContent = "";
  errName.classList.add("hidden");
  return true;
}

// NUMBER
export function validateNumber() {
  const numberInput = document.getElementById("card-number");
  const errNumber = document.getElementById("err-number");
  const clean = (numberInput?.value || "").replace(/\s/g, "");

  if (!clean) {
    errNumber.textContent = validationRules.rules.cardNumber.messages.required;
    errNumber.classList.remove("hidden");
    return false;
  }
  if (!new RegExp(validationRules.rules.cardNumber.pattern).test(clean)) {
    errNumber.textContent = validationRules.rules.cardNumber.messages.format;
    errNumber.classList.remove("hidden");
    return false;
  }
  errNumber.textContent = "";
  errNumber.classList.add("hidden");
  return true;
}

// DATE
export function validateDate() {
  const monthInput = document.getElementById("card-exp-month");
  const yearInput = document.getElementById("card-exp-year");
  const errExpiry = document.getElementById("err-expiry");

  const mmStr = (monthInput?.value || "").trim();
  const yyStr = (yearInput?.value || "").trim();
  const mm = parseInt(mmStr, 10);
  const yy = parseInt(yyStr, 10);

  if (!mmStr || !yyStr) {
    errExpiry.textContent = validationRules.rules.expiry.messages.required;
    errExpiry.classList.remove("hidden");
    return false;
  }
  if (Number.isNaN(mm) || mm < validationRules.rules.expiry.month.min || mm > validationRules.rules.expiry.month.max) {
    errExpiry.textContent = validationRules.rules.expiry.month.messages.invalid;
    errExpiry.classList.remove("hidden");
    return false;
  }
  if (Number.isNaN(yy) || yy < validationRules.rules.expiry.year.min || yy > validationRules.rules.expiry.year.max) {
    errExpiry.textContent = validationRules.rules.expiry.year.messages.invalid;
    errExpiry.classList.remove("hidden");
    return false;
  }
  errExpiry.textContent = "";
  errExpiry.classList.add("hidden");
  return true;
}

// CVC
export function validateCVC() {
  const cvcInput = document.getElementById("cvc-input");
  const errCvc = document.getElementById("err-cvc");

  let value = (cvcInput?.value || "").trim();
  value = value.replace(/\D/g, ""); // sólo dígitos

  if (!value) {
    errCvc.textContent = validationRules.rules.cvc.messages.required;
    errCvc.classList.remove("hidden");
    return false;
  }
  if (value.length !== validationRules.rules.cvc.length) {
    errCvc.textContent = validationRules.rules.cvc.messages.format;
    errCvc.classList.remove("hidden");
    return false;
  }
  errCvc.textContent = "";
  errCvc.classList.add("hidden");
  return true;
}
