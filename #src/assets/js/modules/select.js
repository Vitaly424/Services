let select = function () {
   let selectHeader = document.querySelectorAll('.select32__header');
   let selectItem = document.querySelectorAll('.select32__item')

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
       select = this.closest('.select32')
       let currentText = this.closest('.select32').querySelector('.select32__current')
       
       currentText.innerText = text;
       select.classList.remove('is-active');
   }
}


select();