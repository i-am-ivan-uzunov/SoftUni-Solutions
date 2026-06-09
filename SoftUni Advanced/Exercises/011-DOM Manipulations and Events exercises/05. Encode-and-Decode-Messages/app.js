function encodeAndDecodeMessages() {
  const div = document.querySelector("#main div");
  const inputRef = div.children[1];
  const outputRef = div.nextElementSibling.children[1];
  const encodeButton = div.children[2];
  const decodeButton = div.nextElementSibling.children[2];

  encodeButton.addEventListener("click", onClickEncode);
  decodeButton.addEventListener('click', onClickDecode);

  function onClickEncode() {
    const arr = Array.from(inputRef.value);
    const encodedMessage = encode(arr);
    outputRef.value = encodedMessage;
    inputRef.value = "";
  }

  function onClickDecode(){
    const message = outputRef.value;
    const decodedMessage = decode(message);
    outputRef.value = decodedMessage;
  }

  function encode(arr) {
    let message = '';
     return message = arr.map((char) => {
        return String.fromCharCode(char.charCodeAt(0) + 1);
    }).join('');
  }

  function decode(message) {
    let arr = message.split("");

    arr = arr.map((char) => {
        return String.fromCharCode(char.charCodeAt(0) - 1);
    });

    message = arr.join("");
    return message;
  }
}
