import {
  PARAM_LEVEL,
  PARAM_MESSAGE,
  PARAM_SCRIPT_TIME,
  PARAM_TYPE,
} from '../common/constant';

export const emptyFunc = () => {/* do nothing */};

export function buildTrackQuery(level, message, time = 1 * Date()) {
  let queryParams = [].concat(
    `${PARAM_LEVEL}=${level}`,
    `${PARAM_SCRIPT_TIME}=${time}`,
    `${PARAM_MESSAGE}=${encodeURIComponent(message)}`
  );

  return queryParams.join('&');
}
