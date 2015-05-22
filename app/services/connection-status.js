import Ember from 'ember';

export default Ember.Service.extend({
  online: null,

  init: function () {
    Ember.$(window).on('online offline', Ember.run.bind(this, '_onConnectivityEvent'));
    this._onConnectivityEvent();
  },

  _onConnectivityEvent: function () {
    this.set('online', navigator.onLine);
  },

  willDestroy: function () {
    Ember.$(window).off('online offline');
  }
});
