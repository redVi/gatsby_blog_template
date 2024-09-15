const DISQUS_ID = process.env.GATSBY_DISQUS_ID

export const runDisqus = () => (function () {
  const page = window.document;
  const dscript = page.createElement('script');
  dscript.src = `//${DISQUS_ID}/embed.js`;
  dscript.setAttribute('data-timestamp', `${+new Date()}`);
  (page.head || page.body).appendChild(dscript);
})();
