export const setContactsHeight = () => {
  const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isChrome = /Chrome|CriOS/i.test(navigator.userAgent);
  const isSafari = /^((?!Chrome|CriOS|Firefox|Edg|OPR).)*Safari/i.test(navigator.userAgent);
  const openingElement = document.querySelector(".wraper__contacts") as HTMLElement | null;

  if (openingElement) {
    if (isMobile && isSafari) {
      openingElement.style.setProperty('--wraper__contacts-height', '90vh');
    } else if (isMobile && isChrome) {
      openingElement.style.setProperty('--wraper__contacts-height', '86vh');
    } else {
      openingElement.style.setProperty('--wraper__contacts-height', '100vh');
    }
  }
};