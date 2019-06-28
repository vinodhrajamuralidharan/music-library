// import currentHolding from './routes/current-holding';

export default function() {

	this.use = (root, router) => {
    const methods = {};

    ['get', 'put', 'post', 'delete', 'patch'].forEach((verb) => {
      methods[verb] = (path, fn) => {
        return this[verb](root + path, fn);
      };
    });
    router.call(methods);
  };

	// this.use('/current-holding', currentHolding);
}
