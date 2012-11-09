$(document).ready(function() {
    $('.menu-item.inactive a').hover(
        function()
        {
            $(this).animate({fontSize: '22px'}, 100);
            if($(this).parent().hasClass('two-lines')) $(this).parent().animate({marginTop: '-10px'}, 100);
            else $(this).parent().animate({marginTop: '-3px'}, 100);
        },
        function()
        {
            $(this).animate({fontSize: '14px'}, 100);
            $(this).parent().animate({marginTop: '0px'}, 100);
        }
    );

    Cufon.replace("h1", { fontFamily: 'Colaborate-Regular' } );
    Cufon.replace("h2", { fontFamily: 'Colaborate-Regular' } );
    Cufon.replace(".menu-item.active a", { fontFamily: 'Colaborate-Regular' } );


    $('.scroll-pane').jScrollPane(
    {
        showArrows:false,
        scrollbarWidth: 12,
        scrollbarMargin: 40,
        scrollbarOnLeft: true
    });
});
