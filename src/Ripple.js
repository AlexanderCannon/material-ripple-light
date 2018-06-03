let x;
export default ({ target, clientX, clientY }) => {
  if (target.classList.contains('mrl-effect')) {
    const oldEffect = target.parentElement;
    target = target.parentElement.parentElement;
    target.removeChild(oldEffect);
    clearTimeout(x);
  };
  const {
    height,
    width,
    left,
    top,
  } = target.getBoundingClientRect();
  const len = (width > height ? width : height);
  const effect = document.createElement('div');
  const holder = document.createElement('span');
  holder.style.overflow = 'hidden';
  holder.style.width = `${width}px`;
  holder.style.height = `${height}px`;
  holder.style.left = `${left }px`;
  holder.style.top = `${top }px`;
  holder.style.display = 'block';
  holder.style.position = 'fixed';
  effect.classList.add('mrl-effect');
  effect.style.position = 'relative';
  effect.style.top = `${clientY - top  - (len / 2)}px`;
  effect.style.left = `${clientX - left - (len / 2)}px`;
  effect.style.height = `${len}px`;
  effect.style.width = `${len}px`;
  effect.style.background = 'rgba(0, 0, 0, 0.04)';
  effect.style.borderRadius = '50%';
  effect.style.transform = 'scale(0)';
  effect.style.transition = 'opacity 600ms, transform 600ms cubic-bezier(0,0,0.5,1)';
  effect.style.display = 'block';
  holder.appendChild(effect);
  target.appendChild(holder);
  x = setTimeout(() => {
    target.contains(holder) && target.removeChild(holder);
    x = '';
  }, 640);
  setTimeout(() => {
    effect.style.transform = 'scale(2.7)';
  }, 16);
};
