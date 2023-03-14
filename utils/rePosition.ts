export const rePosition = ({ scrollItem }: { scrollItem: HTMLElement }) => {
  if (scrollItem && document && window) {
    setTimeout(() => {
      window.scrollTo({
        top:
          scrollItem.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          30,
        left: 0,
        behavior: 'smooth'
      });
    }, 500);
  }
};
