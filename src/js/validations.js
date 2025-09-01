// src/js/validations.js

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
    errName.textContent = "Can't be blank";
    errName.classList.remove("hidden");
    return false;
  }
  if (!/^[a-zA-Z\s]+$/.test(v)) {
    errName.textContent = "Wrong format, letters only";
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
    errNumber.textContent = "Can't be blank";
    errNumber.classList.remove("hidden");
    return false;
  }
  if (!/^\d{16}$/.test(clean)) {
    errNumber.textContent = "Wrong format, must be 16 digits";
    errNumber.classList.remove("hidden");
    return false;
  }
  errNumber.textContent = "";
  errNumber.classList.add("hidden");
  return true;
}

// DATE
const MIN_YEAR = 25;
const MAX_YEAR = 40;
export function validateDate() {
  const monthInput = document.getElementById("card-exp-month");
  const yearInput = document.getElementById("card-exp-year");
  const errExpiry = document.getElementById("err-expiry");

  const mmStr = (monthInput?.value || "").trim();
  const yyStr = (yearInput?.value || "").trim();
  const mm = parseInt(mmStr, 10);
  const yy = parseInt(yyStr, 10);

  if (!mmStr || !yyStr) {
    errExpiry.textContent = "Can't be blank";
    errExpiry.classList.remove("hidden");
    return false;
  }
  if (Number.isNaN(mm) || mm < 1 || mm > 12) {
    errExpiry.textContent = "Invalid month";
    errExpiry.classList.remove("hidden");
    return false;
  }
  if (Number.isNaN(yy) || yy < MIN_YEAR || yy > MAX_YEAR) {
    errExpiry.textContent = "Invalid year";
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
    errCvc.textContent = "Can't be blank";
    errCvc.classList.remove("hidden");
    return false;
  }
  if (value.length !== 3) {
    errCvc.textContent = "CVC must be 3 digits";
    errCvc.classList.remove("hidden");
    return false;
  }
  errCvc.textContent = "";
  errCvc.classList.add("hidden");
  return true;
}
