$( document ).ready(function() {

    $('.bns_open_hist').click(function(){
        $("body").addClass('no_scrol');
        $('.js_over_hist').fadeIn();
        return false;
    })

    $('.js_open_list').click(function(){
        $("body").addClass('no_scrol');
        $('.js_over_spisok').fadeIn();
        $(".bns_spis_main").niceScroll({cursorcolor:"#ffd800", background:"#e0dcd8", cursorborder:"0", cursoropacitymin:1});
        $(".bns_spis_main").getNiceScroll().show();
        return false;
    })

    $('.js_open_otz').click(function(){
        $("body").addClass('no_scrol');
        $('.js_over_otz').fadeIn();
        return false;
    })

    $('.js_open_podp').click(function(){
        $("body").addClass('no_scrol');
        $('.js_over_podp').fadeIn();
        return false;
    })


    $('.bns_get_gift').click(function(){
        $("body").addClass('no_scrol');
        $('.js_over_get_gift').fadeIn();
        return false;
    })

    $('.bns_get_right .btn_get').click(function(){
        $("body").addClass('no_scrol');
        $('.bns_overlay').hide();
        return false;
    })

    $('.bns_overlay, .bns_close, .bns_get_gift_fin_main .btn_get').click(function(){
        $("body").removeClass('no_scrol');
        $('.bns_overlay').fadeOut();
        $(".bns_spis_main").getNiceScroll().hide();
        return false;
    })
    $('.bns_overlay_iner').click(function(event){
        event.stopPropagation();
    });


    //$("#mydiv").getNiceScroll().hide();
});
