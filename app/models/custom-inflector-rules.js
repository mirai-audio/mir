import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

// for simplicity, we say "medias" as the plural of "media"
inflector.irregular('media', 'medias');

// Meet Ember Inspector's expectation of an export
export default {};
