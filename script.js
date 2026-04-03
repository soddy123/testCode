const input = document.getElementById("userInput");
const button = document.getElementById("printBtn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  const value = input.value.trim();

  if (!value) {
    output.textContent = "Please type something first.";
    console.log("[Input Printer] no input provided");
    return;
  }

  const time = new Date().toLocaleTimeString();
  const result = `At ${time}, you entered: ${value}`;

  output.textContent = result;
  console.log(result);

  input.value = "";
  input.focus();
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});
