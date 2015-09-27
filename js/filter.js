jQuery(function($){
    // fancybox
    $(".fancybox").fancybox({
        modal: true, // disable regular nav and close buttons
        // add buttons helper (requires buttons helper js and css files)
        helpers: {
            buttons: {}
        } 
    });
}); // ready