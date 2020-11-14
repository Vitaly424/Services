var swiper = new Swiper('.swiper-container', {
   spaceBetween: 30,
   effect: 'fade',
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });
 

document.addEventListener('DOMContentLoaded', () => {
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


select();;
   const burgerMenu = () => {
   
   const burgerMenu = document.querySelector('.header__burger');
   const mobileList = document.querySelector('.header__mobile-list');

   burgerMenu.addEventListener('click', function() {
      this.classList.toggle('active');

      if(mobileList.classList.contains('header__mobile-list--active')){
         mobileList.classList.remove('header__mobile-list--active');
      }else{
         mobileList.classList.add('header__mobile-list--active');
      }  
   });
     
    

}
 

burgerMenu();;
});
 


 

 
 
 