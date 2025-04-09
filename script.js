const calculationForm = document.getElementById("calculation");
const metricButton = document.getElementById("metric");
const imperialButton = document.getElementById("imperial");

const metricMeasures = document.getElementById("metric-measures");
const centimeter = document.getElementById("centimeter");
const kilogram = document.getElementById("kilogram");

const imperialMeasures = document.getElementById("imperial-measures");
const feet = document.getElementById("feet");
const inch = document.getElementById("inch");
const stone = document.getElementById("stone");
const pound = document.getElementById("pound");

const empty = document.getElementById("empty");
const active = document.getElementById("active");
const result = document.getElementById("result");

const activeDescription = document.getElementById("active-description");
const healthStatus = document.getElementById("status");
const range = document.getElementById("range");

const measureInputs = calculationForm.querySelectorAll("input[type=number]");

let isMetric = true;

const renderMeasures = (metric) => {
    if (metric) {
        metricMeasures.style.display = "flex";
        imperialMeasures.style.display = "none";
    } else {
        metricMeasures.style.display = "none";
        imperialMeasures.style.display = "flex";
    }
};

const setMetric = (state) => {
    isMetric = state;
    renderMeasures(isMetric);
};

const handleMetricButton = (e) => {
    setMetric(true);
};

const handleImperialButton = (e) => {
    setMetric(false);
};

const renderOutput = (isActive) => {
    if (isActive) {
        active.style.display = "flex";
        empty.style.display = "none";
    } else {
        active.style.display = "none";
        empty.style.display = "flex";
    }
};

const healthState = (bmi) => {
    if (bmi < 18.5) {
        return "underweight";
    } else if (bmi < 25) {
        return "at a healthy weight";
    } else if (bmi < 30) {
        return "overweight";
    } else {
        return "obese";
    }
};

const handleCalculationFormInput = (e) => {
    if (isMetric) {
        const centimeterValue = centimeter.value;
        const kilogramValue = kilogram.value;
        console.log(centimeterValue, kilogramValue);
        if (centimeterValue > 0 && kilogramValue > 0) {
            const totalMeters = Number(centimeterValue) * 0.01;
            const metricBMI =
                Math.round((kilogramValue / (totalMeters * totalMeters)) * 10) /
                10;
            const currentHealth = healthState(metricBMI);
            const from = Math.round(18.5 * Math.pow(totalMeters, 2) * 10) / 10;
            const to = Math.round(24.9 * Math.pow(totalMeters, 2) * 10) / 10;

            // change output
            result.innerText = metricBMI;
            activeDescription.innerHTML = `Your BMI suggests you're ${currentHealth}. Your ideal weight is between <strong>${from}kgs to ${to}kgs</strong>`;
            renderOutput(true);
        } else {
            renderOutput(false);
        }
    } else {
        const feetValue = feet.value;
        const inchValue = inch.value;
        const stoneValue = stone.value;
        const poundValue = pound.value;
        console.log(feetValue, inchValue, stoneValue, poundValue);
        if (
            feetValue > 0 &&
            inchValue > 0 &&
            stoneValue > 0 &&
            poundValue > 0
        ) {
            const totalPounds = 14 * Number(stoneValue) + Number(poundValue);
            const totalInches = 12 * Number(feetValue) + Number(inchValue);
            const imperialBMI =
                Math.round(
                    703 * (totalPounds / (totalInches * totalInches)) * 10
                ) / 10;

            const currentHealth = healthState(imperialBMI);

            const from =
                Math.round((18.5 / 703) * Math.pow(totalInches, 2) * 10) / 10;
            const to =
                Math.round((24.9 / 703) * Math.pow(totalInches, 2) * 10) / 10;

            // change output
            result.innerText = imperialBMI;
            activeDescription.innerHTML = `Your BMI suggests you're ${currentHealth}. Your ideal weight is between <strong>${from}lbs to ${to}lbs</strong>`;
            renderOutput(true);
        } else {
            renderOutput(false);
        }
    }
};

const handleMeasureInput = (e) => {
    if (e.key === "-") {
        e.preventDefault();
    }
};

metricButton.addEventListener("click", handleMetricButton);
imperialButton.addEventListener("click", handleImperialButton);
calculationForm.addEventListener("input", handleCalculationFormInput);
measureInputs.forEach((input) => {
    input.addEventListener("keydown", handleMeasureInput);
});
