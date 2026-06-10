class Contact {
  constructor(firstName, lastName, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this._online = false;
  }

  render(id) {
    this.article = document.createElement("article");
    this.divTitle = document.createElement("div");
    this.divInfo = document.createElement("div");
    this.spanPhone = document.createElement("span");
    this.spanEmail = document.createElement("span");
    const button = document.createElement("button");

    this.divTitle.classList = "title";
    this.divInfo.classList = "info";

    this.divTitle.textContent = `${this.firstName} ${this.lastName}`;
    this.spanPhone.innerHTML = `&phone; ${this.phone}`;
    this.spanEmail.innerHTML = `&#9993; ${this.email}`;
    button.innerHTML = "&#8505;";

    this.divInfo.style.display = "none";

    this.divTitle.append(button);
    this.divInfo.append(this.spanPhone);
    this.divInfo.append(this.spanEmail);
    this.article.append(this.divTitle);
    this.article.append(this.divInfo);

    const container = document.getElementById(id);
    container.append(this.article);

    button.addEventListener("click", () => {
      if (this.divInfo.style.display === "none") {
        this.divInfo.style.display = "block";
      } else {
        this.divInfo.style.display = "none";
      }
    });

    this.online = this._online;
  }

  get online() {
    return this._online;
  }

  set online(value) {
    this._online = value;
    if (this.divTitle) {
      if (value) {
        this.divTitle.classList.add("online");
      } else {
        this.divTitle.classList.remove("online");
      }
    }
  }
}
