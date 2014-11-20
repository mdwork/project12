jQuery(function($) {
    function generatePages() {
        var _total, i, _link;

        _total = $( "#carousel" ).rcarousel( "getTotalPages" );

        for ( i = 0; i < _total; i++ ) {
            _link = $( "<a href='#'></a>" );

            $(_link)
                .bind("click", {page: i},
                function( event ) {
                    $( "#carousel" ).rcarousel( "goToPage", event.data.page );
                    event.preventDefault();
                }
            )
                .addClass( "bullet off" )
                .appendTo( "#pages" );
        }

        // mark first page as active
        $( "a:eq(0)", "#pages" )
            .removeClass( "off" )
            .addClass( "on" );

    }

    function pageLoaded( event, data ) {
        $( "a.on", "#pages" )
            .removeClass( "on" );

        $( "a", "#pages" )
            .eq( data.page )
            .addClass( "on" );
    }

    $("#carousel").rcarousel(
        {
            visible: 1,
            step: 1,
            speed: 700,
            auto: {
                enabled: true
            },
            width: 780,
            height: 475,
            start: generatePages,
            pageLoaded: pageLoaded
        }
    );

    $( "#ui-carousel-next" )
        .add( "#ui-carousel-prev" )
        .add( ".bullet" )
        .hover(
        function() {
            $( this ).css( "opacity", 0.7 );
        },
        function() {
            $( this ).css( "opacity", 1.0 );
        }
    );
});