

const valueCounter = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');


let counterValue = 0;

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueCounter.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    valueCounter.textContent = counterValue;
  });


