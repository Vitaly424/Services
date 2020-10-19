const select = function () {
    
   let selectHeader = document.querySelectorAll('.filter-tour__header');
   let selectItem = document.querySelectorAll('.filter-tour__item')

   selectHeader.forEach(item => {
       item.addEventListener('click', selectToggle);
   });

   selectItem.forEach(item => {
       item.addEventListener('click', selectChoose);
   });

   function selectToggle() {
       this.parentElement.classList.toggle('is-active')
   }

   function selectChoose() {
       let text = this.innerText;
       let select = this.closest('.filter-tour')
       let currentText = this.closest('.filter-tour').querySelector('.filter-tour__current')
       
       currentText.innerText = text;
       select.classList.remove('is-active');
   }
}


select();