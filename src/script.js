document.addEventListener('DOMContentLoaded', function () {  
/* header*/ 
  const toggle = document.getElementById('menu-toggle');
      const closeBtn = document.getElementById('menu-close');
      const menu = document.getElementById('mobile-menu');
      const submenuToggles = menu.querySelectorAll('.submenu-toggle');

      /* ---------- Open / close the drawer ---------- */
      function setMenu(open, { restoreFocus = false } = {}) {
        menu.hidden = !open;
        toggle.setAttribute('aria-expanded', open);
        document.body.classList.toggle('overflow-hidden', open); // lock page scroll behind the drawer

        if (open) {
          closeBtn.focus();
        } else {
          closeAllSubmenus();
          if (restoreFocus) toggle.focus();
        }
      }

      toggle.addEventListener('click', () => setMenu(true));
      closeBtn.addEventListener('click', () => setMenu(false, { restoreFocus: true }));

      /* ---------- Accordion submenus ---------- */
      function setSubmenu(button, open) {
        const panel = document.getElementById(button.getAttribute('aria-controls'));
        button.setAttribute('aria-expanded', open);
        button.querySelector('.chevron').classList.toggle('rotate-180', open);
        panel.hidden = !open;
      }

      function closeAllSubmenus() {
        submenuToggles.forEach((btn) => setSubmenu(btn, false));
      }

      submenuToggles.forEach((btn) => {
        btn.addEventListener('click', () => {
          const willOpen = btn.getAttribute('aria-expanded') !== 'true';
          closeAllSubmenus();          // only one open at a time
          setSubmenu(btn, willOpen);
        });
      });

      /* ---------- Close on Escape ---------- */
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !menu.hidden) {
          setMenu(false, { restoreFocus: true });
        }
      });

      /* ---------- Close when clicking outside the drawer ---------- */
      document.addEventListener('click', (e) => {
        if (!menu.hidden && !menu.contains(e.target) && !toggle.contains(e.target)) {
          setMenu(false);
        }
      });

      /* ---------- Close when resizing up to desktop ---------- */
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