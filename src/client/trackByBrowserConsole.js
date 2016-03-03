import {
  buildTrackQuery,
  emptyFunc,
} from './util';

function getLogBrowser() {
  if (typeof window.console !== 'function') {
    return emptyFunc;
  }

  return (level, message, ...args) => {
    window.console[level] && window.console[level](message, ...args);
  }
}

export default (config) => (next) => {

  const _console = getLogBrowser();

  return (level, message, ...args) => {
    _console(level, message, ...args);
    if (next) next(level, message, ...args);
  };
};
