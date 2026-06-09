function generateReport() {
  const outputRef = document.querySelector("#output");

  const titleRef = Array.from(document.querySelectorAll("thead tr th"));
  const employeeRef = Array.from(document.querySelectorAll("tr")).slice(1);

  let objData = [];

  for (let [key, value] of Object.entries(employeeRef)) {
    const data = Array.from(value.children);
    let obj = {};

    for (let [key, value] of Object.entries(titleRef)) {
      const box = value.firstElementChild;
      const index = Number(key);

      if (box.checked) {
        obj[box.name] = data[index].textContent;
      }
    }
    objData.push(obj);
  }

  const objDataToJSON = JSON.stringify(objData, null, 2);
  
  outputRef.value = objDataToJSON;
}
