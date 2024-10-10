export default function $(selector) {
  const el = document.querySelector(selector);
  return {
    css: function (typee, value) {
      if (value === undefined) {
        if (typee == null) {
          return undefined;
        }
        const x = el.style[typee];
        return x === '' ? undefined : x;
      }
      el.style[typee] = value;
      return this;
    }
  }
}
