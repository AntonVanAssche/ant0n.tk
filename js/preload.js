// When the page is loaded execute the `windowLoaded` function
$(window).load(() => {
   windowLoaded();
});

// This function will slowly fade the `preloader` class out over a duration of 200ms
const windowLoaded = () => {
   $('.preloader')
      .delay(200)
      .fadeOut('slow');
};
