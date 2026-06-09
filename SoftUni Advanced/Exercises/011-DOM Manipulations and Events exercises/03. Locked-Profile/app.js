function lockedProfile() {
  const profiles = Array.from(document.querySelectorAll(".profile"));
  const buttons = Array.from(document.querySelectorAll("button"));

  const user1Locked = profiles[0].querySelector('input[name = "user1Locked"]');
  const user2Locked = profiles[1].querySelector('input[name = "user2Locked"]');
  const user3Locked = profiles[2].querySelector('input[name = "user3Locked"]');

  for(let button of buttons){
    button.addEventListener('click', isLocked);
  }

  function isLocked(event) {
    const button = event.currentTarget;
    const profile = button.parentElement;
    const radio = profile.querySelector('input[type="radio"]');
    const hidden = profile.querySelector('div [id$="HiddenFields"]');
    
    if(radio.checked){
        return;
    }else{
        if(button.textContent == 'Show more'){
            hidden.style.display = 'block';
            button.textContent = 'Hide it';
        }else{
            hidden.style.display = 'none';
            button.textContent = 'Show more'
        }
    }
  }
}
