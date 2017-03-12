import TwitterOauth1Provider from 'torii/providers/twitter-oauth1';

export default TwitterOauth1Provider.extend({
  fetch(data) {
    return data;
  },
});
