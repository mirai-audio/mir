import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) {
    return `Song title ${i}`;
  },

  url: 'https://www.youtube.com/watch?v=hpDvtIt6Lsc',
  'inserted-at': '2017-08-30T01:39:35.434496',
  'updated-at': '2017-08-30T01:39:35.434516',
});
