window.deprecationWorkflow = window.deprecationWorkflow || {};
window.deprecationWorkflow.config = {
  workflow: [
    {
      handler: "silence",
      matchId: "ember-cli-shims.deprecated-shims"
    },
    {
      handler: "silence",
      matchId: "ember-router.router" /* ember-cli-page-title uses it for backwards compatability */
    }
  ]
};
