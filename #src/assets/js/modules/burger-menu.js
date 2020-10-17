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
 

burgerMenu();