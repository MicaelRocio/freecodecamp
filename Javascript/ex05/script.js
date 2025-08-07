const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(str) {
  const cleaned = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
}

checkBtn.addEventListener("click", () => {
  const text = textInput.value;

  if (text.trim() === "") {
    alert("Coloque um texto para verificar.");
    return;
  }

  if (isPalindrome(text)) {
    result.textContent = `${text} é um palíndromo.`;
  } else {
    result.textContent = `${text} não é um palíndromo.`;
  }
});
