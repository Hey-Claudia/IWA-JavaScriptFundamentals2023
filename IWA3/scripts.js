import { company, year } from "./configuration.js"; //added curly brackets to syntax and merged import into one line instead of 2 seprate imports

document.addEventListener("DOMContentLoaded", function () {
  const message = "© " + company + " (" + year + ")";
  document.querySelector("footer").innerText = message;
});
