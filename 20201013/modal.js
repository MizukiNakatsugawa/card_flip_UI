console.log("modal js load");
$(function(){
    $('.js-modal-open').on('click',function(){
        $('.js-modal').fadeIn();
        console.log("open")
        return false;
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
});