
$(window).scroll(function(){
  
    var wScroll=$(this).scrollTop();
    
    var wHight=$(this).height();
  
    console.log(wHight);
    if(wScroll > $('.about-section').offset().top){
        $('.navbar').addClass('bg-dark');
    }
    else{
        $('.navbar').removeClass('bg-dark');
    }
    if(wScroll > $('#why').offset()
    .top-wHight/2

){
        $('.business').addClass('animated zoomIn');
    }
})


