/* global window */
window.deprecationWorkflow = window.deprecationWorkflow || {};
window.deprecationWorkflow.config = {
  workflow: [
    { handler: 'silence', matchId: 'ember-map-deprecation' },
    { handler: 'silence', matchId: 'ember-runtime.deprecate-copy-copyable' }
  ]
};
