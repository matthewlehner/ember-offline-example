import Ember from 'ember';

export default Ember.Controller.extend({
  // Ember will look for a service named connectionStatus by convention, though
  // `inject.service` will take arguments to specify other classes/objects.
  connectionStatus: Ember.inject.service(),
  isOnline: Ember.computed.alias('connectionStatus.online')

});
