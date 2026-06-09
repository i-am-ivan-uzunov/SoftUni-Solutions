function attachEventsListeners() {
  const inputDistanceRef = document.querySelector("#inputDistance");
  const inputUnitsRef = document.querySelector("#inputUnits");
  const btnConvert = document.querySelector("#convert");
  const outputDistanceRef = document.querySelector("#outputDistance");
  const outputUnitsRef = document.querySelector("#outputUnits");
  let isReversed = null;

  const converter = {
    km(km) {
      return !isReversed ? km * 1000 : km / 1000;
    },
    m(m) {
      return m;
    },
    cm(cm) {
      return !isReversed ? cm * 0.01 : cm / 0.01;
    },
    mm(mm) {
      return !isReversed ? mm * 0.001 : mm / 0.001;
    },
    mi(mi) {
      return !isReversed ? mi * 1609.34 : mi / 1609.34;
    },
    yrd(yrd) {
      return !isReversed ? yrd * 0.9144 : yrd / 0.9144;
    },
    ft(ft) {
      return !isReversed ? ft * 0.3048 : ft / 0.3048;
    },
    in(inches) {
      return !isReversed ? inches * 0.0254 : inches / 0.0254;
    },
  };

  btnConvert.addEventListener("click", convert);

  function convert() {
    const inputDistance = inputDistanceRef.value;
    const inputUnits = inputUnitsRef.value;
    const outputUnits = outputUnitsRef.value;
    isReversed = false;
    const buff = converter[inputUnits](inputDistance);

    isReversed = true;

    const result = converter[outputUnits](buff);

    outputDistanceRef.value = result;
  }
}
