export function createCopyButton() {
  // @ts-ignore
  const codes = document.querySelector('.page__content').querySelectorAll('.gatsby-highlight');
  const button = document.createElement('button');

  button.innerHTML = `
  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path></svg>
  `;
  button.className = 'gatsby-code-button-buffer';
  button.setAttribute('onclick', 'window.copyToClipboard(this)');
  button.setAttribute('aria-label', 'Copy');

  for (let i = 0; i < codes.length; i++) {
    codes[i].appendChild(button.cloneNode(true));
  }
}

export function getMetrica() {
  return `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(87294649, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });`.trim()
}


/*
const wrapESMPlugin = (name: string) =>
  function wrapESM(opts: object) {
    return async (...args: any) => {
      const mod = await import(name)
      const plugin = mod.default(opts)
      return plugin(...args)
    }
  }
*/
