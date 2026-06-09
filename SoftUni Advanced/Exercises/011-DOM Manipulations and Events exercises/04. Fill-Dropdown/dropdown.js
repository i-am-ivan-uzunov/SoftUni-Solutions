function addItem() {
    const textInputRef = document.querySelector('#newItemText');
    const valueInputRef = document.querySelector('#newItemValue');
    const menu = document.querySelector('#menu');

    const input = textInputRef.value;
    const valueInput = valueInputRef.value;

    const option = document.createElement('option');
    option.textContent = input;
    option.value = valueInput;

    menu.append(option);

    textInputRef.value = '';
    valueInputRef.value = '';
}