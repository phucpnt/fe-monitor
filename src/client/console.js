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
import {
  emptyFunc
} from './util';

// log layers
import trackByBeaconImage from './trackByBeaconImage';
import trackByBrowserConsle from './trackByBrowserConsole';

export default function makeLogger({
  host,
  useConsole = true,
  useBeacon = true,
  logLevel = LOG_INFO
}) {

  let logLayers = [];
  if (useConsole) logLayers.push(trackByBrowserConsle());
  if (useBeacon) logLayers.push(trackByBeaconImage({ host }));

  const doLog = logLayers.reduce((next, logFn) => logFn(next), null);

  return {
    debug: doLog.bind(undefined, LOG_DEBUG),
    info: doLog.bind(undefined, LOG_INFO),
    warn: doLog.bind(undefined, LOG_WARN),
    error: doLog.bind(undefined, LOG_WARN),
  };
}
