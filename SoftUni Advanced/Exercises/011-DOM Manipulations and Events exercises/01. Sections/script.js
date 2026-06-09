function create(words) {
  const content = document.getElementById("content");
  const fragment = document.createDocumentFragment();

  for (let word of words) {
    const div = document.createElement("div");
    const p = document.createElement("p");

    p.textContent = word;

    div.append(p);
    p.style.display = "none";

    div.addEventListener("click", onClick);

    fragment.append(div);
  }

  content.append(fragment);

  function onClick(event) {
    const target = event.currentTarget.firstElementChild;
    target.style.display = "block";
  }
}

