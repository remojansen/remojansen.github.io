$(document).ready(function(){

    const images = "#gallery > img";
    const interval = 4000;
    const count = $(images).length;
    const selectorFactory = (i) =>`${images}:eq(${i})`;
    let index = 0;

    const handle = setInterval(
        () => {
            
            // fade out the current image
            $(selectorFactory(index)).fadeOut("slow");

            // get the next index, or cycle back to 0
            if (++index === count) {
                index = 0;
            }

            // fade in the next image
            $(selectorFactory(index)).fadeIn("slow");

        },
        interval
    );

    const stop = function() {
        clearInterval(handle);
    };

});
