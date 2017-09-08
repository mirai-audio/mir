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

  this.get('/medias', () => (
    {
      jsonapi: {
        version: '1.0',
      },
      data: [{
        type: 'media',
        id: '1',
        attributes: {
          url: 'https://www.youtube.com/watch?v=hpDvtIt6Lsc',
          'updated-at': '2017-08-30T01:39:35.434516',
          title: 'AKIRA - Kendas Theme',
          'inserted-at': '2017-08-30T01:39:35.434496',
        },
      }, {
        type: 'media',
        id: '2',
        attributes: {
          url: 'https://www.youtube.com/watch?v=LqGq2QgDQR8',
          'updated-at': '2017-08-30T01:39:35.465799',
          title: 'Kenji Kawai - Innocence [LIVE]',
          'inserted-at': '2017-08-30T01:39:35.465791',
        },
      }],
    }
  ));
}
