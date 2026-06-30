function getInfo() {
  const BASE_URL = "http://localhost:3030/jsonstore/bus/businfo/";
  const input = document.getElementById("stopId");
  const btnSubmit = document.getElementById("submit");
  const stopName = document.getElementById("stopName");
  const buses = document.getElementById("buses");

  const stopId = input.value;

  if (!stopId) {
    return;
  }

  input.value = "";
  buses.innerHTML = "";

  const response = fetch(BASE_URL + `${stopId}`);
  response
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error");
      }

      return res.json();
    })
    .then((data) => {
      const stop = data.name;
      stopName.textContent = stop;

      Object.entries(data.buses).forEach(([bus, time]) => {
        const li = document.createElement("li");
        li.textContent = `Bus ${bus} arrives in ${time} minutes`;
        buses.appendChild(li);
      });
    })
    .catch((err) => {
      stopName.textContent = "Error";
      buses.innerHTML = "";
    });
}
