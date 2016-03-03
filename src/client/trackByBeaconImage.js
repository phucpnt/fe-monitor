import {
  buildTrackQuery
} from './util';

function createTrackingImage(url) {
  const trackImg = document.createElement('img');
  trackImg.width = 1;
  trackImg.height = 1;
  trackImg.src = url;

  document.body.appendChild(trackImg);
}

export default (config) => (next) => (level, message, ...args) => {
  const trackUrl = [config.host, 'i.gif'].join('');
  const trackQuery = buildTrackQuery(level, message);
  const trackImgUrl = `${trackUrl}?${trackQuery}`;
  createTrackingImage(trackImgUrl);
  if (next) next(level, message, ...args);
};
