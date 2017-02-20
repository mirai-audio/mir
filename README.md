# mir

_frontend web app powering mirai.audio_

## [Docs](https://github.com/mirai-audio/mir/wiki)

* [CODE_OF_CONDUCT](https://github.com/mirai-audio/mir/wiki/CODE_OF_CONDUCT)
* [CONTRIBUTING](.github/CONTRIBUTING.md)
* [CSS Naming Conventions](https://github.com/mirai-audio/mir/wiki/CSS-Naming-Conventions)
* [humans.txt](https://github.com/mirai-audio/mir/wiki/humans.txt)
* [STYLEGUIDE](https://github.com/mirai-audio/mir/wiki/STYLEGUIDE)


## Prerequisites

You will need the following tools properly installed:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [Watchman](https://facebook.github.io/watchman/)
* [Yarn](https://yarnpkg.com/)

```bash
brew install watchman
brew install yarn
yarn global add ember-cli
yarn global add phantomjs-prebuilt
```

## Installation

```bash
git clone <repository-url>
cd mir
yarn install
```

## Running / Development

To run with server-side rendering:

* `yarn run server` or `ember server` (without server-side rendering/FastBoot)
* Visit your app at [http://localhost:4200](http://localhost:4200).


### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## LICENSE

[MIT](LICENSE)
