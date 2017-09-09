export default function () {
  this.urlPrefix = 'http://localhost:4000'; /* make this `http://localhost:8080`
                                             * for example, if your API is on a
                                             * different server
                                             */
  this.namespace = '/api/v1'; /* make this `/api`, for example, if your API is
                               * namespaced
                               */
  this.timing = '25'; /* delay for each request, automatically set to 0 during
                       * testing
                       */

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
