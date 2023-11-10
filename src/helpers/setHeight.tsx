export const setHeight = (elementSelector: string, heightVariable: string) => {
  const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isChrome = /Chrome|CriOS/i.test(navigator.userAgent);
  const isSafari = /^((?!Chrome|CriOS|Firefox|Edg|OPR).)*Safari/i.test(navigator.userAgent);
  const openingElement = document.querySelector(elementSelector) as HTMLElement | null;

  if (openingElement) {
    let heightValue = '100vh';

    if (isMobile && isSafari) {
      heightValue = '90vh';
    } else if (isMobile && isChrome) {
      heightValue = '86vh';
    }

    openingElement.style.setProperty(heightVariable, heightValue);
  }
};