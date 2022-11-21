export const sliderSettings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                autoplay: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                autoplay: true,
            }
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
                autoplay: true,
            }
        }
    ]
};