import { initialCoordinates360x640 } from '../api/coord360x640';
import { initialCoordinates414x896 } from '../api/coord414x896';
import { initialCoordinates375x667 } from '../api/coord375x667';
import { initialCoordinates1024 } from '../api/coord1024x768';
import { initialCoordinates1280 } from '../api/coord1280x720';
import { initialCoordinates1920 } from '../api/coord1920x1080';
import { initialCoordinates360x780 } from '../api/coord360x780';
import { initialCoordinates375x812 } from '../api/coord375x812';
import { initialCoordinates414x736 } from '../api/coord414x736';
import { initialCoordinates1366x768 } from '../api/coord1366x768';
import { initialCoordinates1440x900 } from '../api/coord1440x900';
import { Coordinate } from '../types/Coordinate';


export function calculateCoordinates(): Coordinate[] {
  if (window.innerWidth >= 1920 && window.innerHeight >= 1080) {
    return initialCoordinates1920;
  } else if (window.innerWidth >= 1440 && window.innerHeight >= 900) {
    return initialCoordinates1440x900;
  } else if (window.innerWidth >= 1366 && window.innerHeight >= 768) {
    return initialCoordinates1366x768;
  } else if (window.innerWidth >= 1280 && window.innerHeight >= 720) {
    return initialCoordinates1280;
  } else if (window.innerWidth >= 768 && window.innerHeight >= 1024) {
    return initialCoordinates1024;
  } else if (window.innerWidth >= 414 && window.innerHeight >= 896) {
    return initialCoordinates414x896;
  } else if (window.innerWidth >= 414 && window.innerHeight >= 736) {
    return initialCoordinates414x736;
  } else if (window.innerWidth >= 375 && window.innerHeight >= 812) {
    return initialCoordinates375x812;
  } else if (window.innerWidth >= 375 && window.innerHeight >= 667) {
    return initialCoordinates375x667;
  } else if (window.innerWidth >= 360 && window.innerHeight >= 760) {
    return initialCoordinates360x780;
  } else {
    return initialCoordinates360x640;
  }
}
