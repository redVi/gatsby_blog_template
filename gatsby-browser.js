require('./src/assets/styles/common.css')

exports.onClientEntry = () => {
  window.copyToClipboard = (self) => {
    const text = self.previousSibling?.children[0]?.innerText

    if (text) {
      navigator.clipboard.writeText(text);
      self.children[0]?.setAttribute('fill', '#279f46');
      const timeout = setTimeout(() => {
        self.children[0]?.removeAttribute('fill');
        clearTimeout(timeout);
      }, 500);
    }
  }
}
