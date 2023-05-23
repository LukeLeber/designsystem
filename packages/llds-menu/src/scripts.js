(cms => {
  cms.bind('menu', context => {
    const menus = context.querySelectorAll('.llds-menu');
    menus.forEach(menu => {
      const toggle = menu.querySelector('.llds-menu__toggle');
      if (toggle) {

        menu.addEventListener('focusout', e => {
          if (!menu.contains(e.relatedTarget)) {
            toggle.setAttribute('aria-expanded', 'false');
          }
        });

        menu.addEventListener('keydown', e => {
          if (e.key === 'Escape') {
            toggle.setAttribute('aria-expanded', 'false');
          }
        });


        toggle.addEventListener('click', () => {
          if (toggle.getAttribute('aria-expanded') === 'true') {
            toggle.setAttribute('aria-expanded', 'false');
          }
          else {
            toggle.setAttribute('aria-expanded', 'true');
          }
        });
      }
    });
  });
})(cms);