function solve() {
  const inputRef = document.querySelector("#text");
  const namingConventionRef = document.querySelector("#naming-convention");
  const result = document.querySelector("#result");

  const conventions = {
    pascalCase(text) {
      return text.map(word => word[0].toUpperCase() + word.slice(1)).join('');
    },
    camelCase(text) {
      for (let i = 1; i < text.length; i++) {
        text[i] = text[i][0].toUpperCase() + text[i].slice(1);
      }
      return text.join('');
    },
    another() {
      return "Error!";
    },
  }

  let text = inputRef.value.toLowerCase().split(" ");
  const naming = namingConventionRef.value;
  let transformedText = "";


  if (naming === "Pascal Case") {
    transformedText = conventions.pascalCase(text);
  } else if (naming === "Camel Case") {
    transformedText = conventions.camelCase(text);
  } else {
    transformedText = conventions.another();
  }

  result.textContent = transformedText;
}
