//event pada saat link di klik
$('.page-scroll').on('click', function(e){

    //ambil isi href
    var tujuan=  $(this).attr('href');
    //tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    //pindahkan scroll
    $('html , body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    },1000,'easeInOutExpo');

    e.preventDefault();

});

//paralax
//about
$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});


$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    //jumbotron
    $('.jumbotron img').css({
        'transfrom' : 'translate (0px, '+ wScroll/4 +'%)'
    });
    
    $('.jumbotron h1').css({
        'transfrom' : 'translate (0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transfrom' : 'translate (0px, '+ wScroll/1.2 +'%)'
    });


    //portofolio
    /*if(wScroll > $('.portofolio').offset().top-200){
        $('.portofolio . thumbnail').each(function(i){
             setTimeout(function()
             {
                 $('.portofolio .thumbnail').eq(i).addClass('muncul');
             },300 * (i+1));
        });      
         
    }*/
    if(wScroll > $('.portofolio').offset().top-200){
        $('.portofolio .thumbnail').addClass('muncul');
    }
});

