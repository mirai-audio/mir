export default function () {
  // required for `ember-cli-code-coverage` to write reports
  this.passthrough('/write-coverage');

  // make this `http://localhost:8080` if your API is on a different server
  this.urlPrefix = 'http://localhost:4000';
  // make this `/api`, if your API is namespaced/
  this.namespace = '/api/v1';
  // delay for each request, automatically set to 0 during testing/
  this.timing = '25';

  // define the API surface
  this.post('/users');
  this.post('/users/token', (schema/* , request */) => {
    const token = schema.tokens.first();
    // return the data object, this is an odd endpoint not using JSON API, so only
    // return the `attrs` part of the token.
    return token.attrs;
  });
  this.get('/users/current');

  this.get('/medias', schema => schema.medias.all());
}
