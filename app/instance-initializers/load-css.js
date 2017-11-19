export function initialize(/* appInstance */) {
  if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
    window.requestAnimationFrame(() => {
      // inject CSS
      const stylesheets = ['/assets/vendor.css', '/assets/mir.css'];
      stylesheets.forEach(url => {
        const link = window.document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        window.document.head.appendChild(link);
      });
    });
  }
}

export default {
  name: 'load-css',
  initialize
};
