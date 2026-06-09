function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchFieldRef = document.querySelector('#searchField');
      const searchButtonRef = document.querySelector('#searchBtn');

      const searchWord = searchFieldRef.value;

      const fieldsRef = document.querySelectorAll('tbody tr td');
      const rowRef = document.querySelectorAll('tbody tr');

      for(let row of rowRef){
         row.classList.remove('select');
      }

      if(searchWord === ''){
      return;
      }

      for(let row = 0; row < fieldsRef.length; row+=3){
         for(let field = 0; field < 3; field++){
            const match = fieldsRef[field + row].textContent;

            if(match.includes(searchWord)){
               let rowNumber = row / 3;
               rowRef[rowNumber].classList.add('select');
               break;
            }
         }
      }

   }
}