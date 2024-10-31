document.addEventListener('DOMContentLoaded', function () {
    const myCarousel = document.getElementById('myCarousel');
    
    myCarousel.addEventListener('slid.bs.carousel', function () {
      const activeItem = this.querySelector('.carousel-item.active');
      const newImageSrc = activeItem.getAttribute('data-img');
      document.querySelector('.testi-img img').src = newImageSrc;
    });
  });



  // filter 
  $(document).ready(function() {
    const $navLinks = $(".nav-link");
    const $postBoxes = $(".post-box");

    const debounce = (func, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    };

    const filterPosts = (filterValue) => {
        if (filterValue === "all") {
            $postBoxes.fadeIn(1000).addClass('active'); // Smooth fade in
        } else {
            $postBoxes.fadeOut(1000, function() {
                $(this).removeClass('active');
                $postBoxes.filter("." + filterValue).fadeIn(1000).addClass('active'); // Smooth fade in
            });
        }
    };

    const onNavLinkClick = (event) => {
        event.preventDefault();
        const filterValue = $(event.currentTarget).data("filter");

        filterPosts(filterValue);

        $navLinks.removeClass("active-blog");
        $(event.currentTarget).addClass("active-blog");
    };

    $navLinks.on("click", debounce(onNavLinkClick, 250));
});