export const setMenuHeight = () => {
  const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isChrome = /Chrome|CriOS/i.test(navigator.userAgent);
  const isSafari = /^((?!Chrome|CriOS|Firefox|Edg|OPR).)*Safari/i.test(navigator.userAgent);
  const openingElement = document.querySelector(".bgi-menu__open") as HTMLElement | null;

  if (openingElement) {
    if (isMobile && isSafari) {
      openingElement.style.setProperty('--bgi-menu__open-height', '90vh');
    } else if (isMobile && isChrome) {
      openingElement.style.setProperty('--bgi-menu__open-height', '86vh');
    } else {
      openingElement.style.setProperty('--bgi-menu__open-height', '100vh');
    }
  }
};