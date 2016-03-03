import {
  LOG_INFO,
  LOG_DEBUG,
  LOG_WARN,
  LOG_ERROR,
  PARAM_LEVEL,
  PARAM_MESSAGE,
  PARAM_SCRIPT_TIME,
  PARAM_TYPE,
} from '../shared/constant';

const emptyFunc = () => { /* do nothing */ };
// const wConsole = window.console ? window.console : [LOG_INFO, LOG_DEBUG, LOG_WARN, LOG_ERROR].reduce((iter, key) => {
//   iter[key] = () => {};
//   return iter;
// }, {});

function buildQuery(level, message, time = 1 * Date()) {
  let queryParams = [].concat(
    `${PARAM_LEVEL}=${level}`,
    `${PARAM_SCRIPT_TIME}=${time}`,
    `${PARAM_MESSAGE}=${message}`
  );

  return encodeURI(queryParams.join('&'));
}

function createTrackingImage(url) {
  const trackImg = document.createElement('img');
  trackImg.width = 1;
  trackImg.height = 1;
  trackImg.src = url;

  document.body.appendChild(trackImg);
}

function getLogBrowser() {
  if (typeof window.console !== 'function') {
    return emptyFunc;
  }

  return (level, message, ...args) => {
    window.console[level] && window.console[level](message, ...args);
  }

}

export default function makeLogger({
  host,
  useConsole = true,
  logLevel = LOG_INFO
}) {

  const trackUrl = [host, 'i.gif'].join('');
  const _console = useConsole ? getLogBrowser() : emptyFunc;

  function doLog(level, message, ...args) {
    _console(level, message, ...args);
    const trackImgUrl = trackUrl + '?' + buildQuery(level, message);
    createTrackingImage(trackImgUrl);
  }

  return {
    debug: doLog.bind(undefined, LOG_DEBUG),
    info: doLog.bind(undefined, LOG_INFO),
    warn: doLog.bind(undefined, LOG_WARN),
    error: doLog.bind(undefined, LOG_WARN),
  };
}
