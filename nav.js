// Nav toggle not needed — mobile menu-toggle is now a direct email link.
// Kept for compatibility in case other pages still reference it.
(function(){
  const btn = document.querySelector('.menu-toggle');
  if (!btn || btn.tagName === 'A') return; // skip if it's a link, not a button
  const nav = document.getElementById('primary-nav');
  if (!nav) return;

  function closeMenu(){
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded','false');
  }
  function toggleMenu(){
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  }

  btn.addEventListener('click', toggleMenu);
  nav.addEventListener('click', e=>{
    if(e.target.tagName === 'A') closeMenu();
  });
  window.addEventListener('resize', ()=>{
    if (window.innerWidth > 679) closeMenu();
  });
})();
