
document.addEventListener('DOMContentLoaded', () => {
    const showMobile = ()=>{
        const burger = document.querySelector('.burger')
        const navLinks = document.querySelector('.nav-links')
    
        burger.addEventListener('click', ()=>{
            console.log('hi')
        })
    }
    showMobile()

    $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          responsive:{
            0:{
              items:1
            },
            600:{
              items:3
            },
            1000:{
              items:5
            }
          }
        })
      });
  });
  

