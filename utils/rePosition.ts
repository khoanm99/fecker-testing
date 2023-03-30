export const rePosition = ({
  scrollItem,
  spaceTop = 30
}: {
  scrollItem: HTMLElement;
  spaceTop?: number;
}) => {
  if (scrollItem && document && window) {
    setTimeout(() => {
      window.scrollTo({
        top:
          scrollItem.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          spaceTop,
        left: 0,
        behavior: 'smooth'
      });
    }, 300);
  }
};
