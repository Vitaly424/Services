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
   @@include('modules/select.js');
   @@include('modules/burger-menu.js');
});
 


 

 
 
 