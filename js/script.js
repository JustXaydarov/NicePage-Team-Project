document.addEventListener('DOMContentLoaded', function () {
  new Splide('#team-slider', {
    type   : 'loop',
    perPage: 4,
    gap    : '20px',
    arrows : true,
    pagination: false,
    breakpoints: {
      1024: {
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
      480: {
        perPage: 1,
      },
    }
  }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
  const engine = new Splide('#vista-engine', {
    type       : 'fade',      // Yumshoq almashinuv (cross-fade)
    rewind     : true,
    speed      : 1000,
    arrows     : true,
    pagination : false,       // Pastdagi nuqtalar kerak emas
    autoplay   : true,
    interval   : 5000,
    pauseOnHover: false,
    drag       : true,
  });

  engine.mount();
});

