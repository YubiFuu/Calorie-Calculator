const bodySize = document.getElementById("body-size");
const age = document.getElementById("age");
const weight = document.getElementById("weight");
const male = document.getElementById("male");
const female = document.getElementById("female");
const selectActivity = document.getElementById("select-activity");
const minKcal = document.getElementById("min-kcal");
const maxKcal = document.getElementById("max-kcal");
const minKj = document.getElementById("min-kj");
const maxKj = document.getElementById("max-kj");
const subBtn = document.getElementById("submit-btn");

let x; // basal metabolic rate
let y = 0.95; // PAL-factor PAL= Physical Activity Level

selectActivity.addEventListener(`change`, () => {
    console.log(selectActivity.value);
    switch (selectActivity.value) {
        case "opt1":
            y = 0.95;
            break;
        case "opt2":
            y = 1.2;
            break;
        case "opt3":
            y = 1.5;
            break;
        case "opt4":
            y = 1.7;
            break;
        case "opt5":
            y = 1.9;
            break;
        case "opt6":
            y = 2.2;
            break;
    }
});

const calcCal = () => {
    if (male.checked) {
        x =
            664.7 +
            13.7 * Number(weight.value) +
            5 * Number(bodySize.value) -
            6.8 * Number(age.value);
    } else {
        x =
            655.1 +
            9.6 * Number(weight.value) +
            1.8 * Number(bodySize.value) -
            4.7 * Number(age.value);
    }
};
subBtn.addEventListener(`click`, (event) => {
    event.preventDefault();
    calcCal();

    minKcal.innerHTML = `${Math.round(x)}kcal`;
    maxKcal.innerHTML = `${Math.round(x * y)}kcal`;
    minKj.innerHTML = `${Math.round(x * 4.184)}kJ`;
    maxKj.innerHTML = `${Math.round(x * y * 4.184)}kJ`;
});
