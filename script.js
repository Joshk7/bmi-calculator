const calculationForm = document.getElementById("calculation");
const metricButton = document.getElementById("metric");
const imperialButton = document.getElementById("imperial");

const metricMeasures = document.getElementById("metric-measures");
const centimeter = document.getElementById("centimeter");
const kilogram = document.getElementById("kilogram");

const imperialMeasures = document.getElementById("imperial-measures");
const feet = document.getElementById("feet");
const inch = document.getElementById("inches");
const stone = document.getElementById("stone");
const pound = document.getElementById("pound");

const empty = document.getElementById("empty");
const active = document.getElementById("active");

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

const handleCalculationFormInput = (e) => {
    if (isMetric) {
        const centimeterValue = centimeter.value;
        const kilogramValue = kilogram.value;
        console.log(centimeterValue, kilogramValue);
        if (centimeterValue > 0 && kilogramValue > 0) {
            // change output first
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
            // change output first
            renderOutput(true);
        } else {
            renderOutput(false);
        }
    }
};

metricButton.addEventListener("click", handleMetricButton);
imperialButton.addEventListener("click", handleImperialButton);
calculationForm.addEventListener("input", handleCalculationFormInput);
