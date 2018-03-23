import Response from 'ember-cli-mirage/response';

export default function() {
  // required for `ember-cli-code-coverage` to write reports
  this.passthrough('/write-coverage');

  // make this `http://localhost:8080` if your API is on a different server
  this.urlPrefix = 'http://localhost:4040';
  // make this `/api`, if your API is namespaced/
  this.namespace = '/api/v1';
  // delay for each request, automatically set to 0 during testing/
  this.timing = '25';

  // define the API surface
  this.post('/users', (schema, request) => {
    const email = JSON.parse(request.requestBody).data.attributes.email;
    const user = schema.users.first();
    if (email === 'mike@example.com') {
      const headers = {
        'content-type': 'application/vnd.api+json; charset=utf-8'
      };
      const data = {
        jsonapi: {
          version: '1.0'
        },
        errors: [
          {
            title: 'Internal Server Error',
            code: 500
          }
        ]
      };
      return new Response(500, headers, data);
    } else if (email === 'already-exists@example.com') {
      const headers = {
        'content-type': 'application/vnd.api+json; charset=utf-8'
      };
      const data = {
        jsonapi: {
          version: '1.0'
        },
        errors: [
          {
            detail: 'unauthorized yo',
            code: 401
          }
        ]
      };
      return new Response(401, headers, data);
    }
    return user;
  });
  this.post('/users/token', (schema, request) => {
    let x = {};
    window
      .decodeURIComponent(request.requestBody)
      .split('&')
      .forEach(keyValue => {
        let kv = keyValue.split('=');
        let k = kv[0];
        let v = kv[1];
        x[k] = v;
      });
    const email = x.username;
    if (email === 'already-exists@example.com') {
      const headers = {
        'content-type': 'application/vnd.api+json; charset=utf-8'
      };
      const data = {
        jsonapi: {
          version: '1.0'
        },
        errors: [
          {
            detail: 'unauthorized, fuck u',
            code: 401
          }
        ]
      };
      return new Response(401, headers, data);
    } else {
      const token = schema.tokens.first();
      // return the data object, this is an odd endpoint not using JSON API, so only
      // return the `attrs` part of the token.
      return token.attrs;
    }
  });
  this.get('/users/current');

  this.get('/medias', schema => schema.medias.all());
  this.post('/medias', (schema, request) => {
    const media = schema.medias.create(
      JSON.parse(request.requestBody).data.attributes
    );
    const title = JSON.parse(request.requestBody).data.attributes.title;
    // force a 500 error for our acceptance test coverage handling errors
    if (title === 'test-force-500-error') {
      const headers = {
        'content-type': 'application/vnd.api+json; charset=utf-8'
      };
      const data = {
        jsonapi: {
          version: '1.0'
        },
        errors: [
          {
            title: 'the adapter-operation-was-aborted',
            code: 500
          }
        ]
      };
      return new Response(500, headers, data);
    }
    return media;
  });
  this.del('/medias/:id', (schema, request) => {
    let media = schema.medias.find(request.params.id);
    media.destroy();
  });
}
