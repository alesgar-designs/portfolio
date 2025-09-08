(function(){
  const btn = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-nav');
  if(!btn || !nav) return;

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
