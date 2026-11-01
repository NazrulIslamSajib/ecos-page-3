document.addEventListener('DOMContentLoaded', function () {  
/* header*/ 
  const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('icon-open');
    const iconClose = document.getElementById('icon-close');

    function setMenu(open) {
      menu.hidden = !open;
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      iconOpen.classList.toggle('hidden', open);
      iconClose.classList.toggle('hidden', !open);
    }

    toggle.addEventListener('click', () => setMenu(menu.hidden));

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !menu.hidden) {
        setMenu(false);
        toggle.focus();
      }
    });

    // Close when resizing up to desktop
    window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => {
      if (e.matches) setMenu(false);
    });




/* 3rd page */ 
 new Splide('#numbers-slider', {
    type: 'loop',
    focus: 'center',
    fixedWidth: 282,
    gap: 22,
    arrows: false,
    pagination: false,
    autoplay: true,
    interval: 3500,
    pauseOnHover: true,
    breakpoints: {
      640: { fixedWidth: 240, gap: 14 },
    },
  }).mount();  

  /* video for 3rd page*/ 
  /*3rd page hero video */ 
  const video1 = document.getElementById('video1');
  const videoWrap = document.getElementById('videoWrap');
  const playBtn1 = document.getElementById('playBtn1');
 
  playBtn1.addEventListener('click', () => {
    videoWrap.classList.remove('hidden');
    video1.play();
  }); 




  
  const video = document.getElementById('video');
  const playBtn = document.getElementById('playBtn');
  const heading = document.getElementById('videoHeading');
 
  playBtn.addEventListener('click', () => {
    video.classList.remove('hidden');
    playBtn.classList.add('hidden');
    heading.classList.add('hidden');
    video.play();
  });









  

  /* ---------- Social section (first page) ---------- */
  if (document.querySelector('#social-slider')) {
    new Splide('#social-slider', {
      type: 'loop',
      perPage: 6,
      perMove: 1,
      gap: '0.75rem',
      arrows: false,
      pagination: false,
      drag: 'free',
      padding: { left: '0.5rem', right: '0.5rem' },
      breakpoints: {
        1280: { perPage: 5 },
        1024: { perPage: 4 },
        768:  { perPage: 3 },
        480:  { perPage: 2 },
      },
    }).mount();
  }

});