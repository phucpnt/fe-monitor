export default (logger) => {

  function profile(label, duration) {
    logger.log(`exec_time of ${label}`, {
      duration
    });
  }

  /**
   * @param  {Function} fun   function you need to track execution time
   * @param  {String} label label of the tracks
   * @return {Function}       tracked function
   */
  return (fun, {
    label,
    async
  }) => (...args) => {

    function done(timeStart) {
      return () => {
        const timeEnd = 1 * Date();
        // we don't want the tracking function interupt the original function execution
        window.setTimeout(profile.bind(undefined, label || fun.name, timeEnd - timeStart));
      };
    }

    const _done = done(1 * Date());
    const result = fun(...args, async ? _done : undefined);
    if (!async) _done();

    return result;
  };

};
