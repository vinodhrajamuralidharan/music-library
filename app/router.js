import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cover', function() {
    this.route('change');
    this.route('summary');
    this.route('confirmation');
  });
});

export default Router;
