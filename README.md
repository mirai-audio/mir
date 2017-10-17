# Mir

[![CircleCI](https://img.shields.io/circleci/project/github/mirai-audio/mir.svg?style=flat-square)](https://circleci.com/gh/mirai-audio/mir)
[![Coveralls branch](https://img.shields.io/coveralls/mirai-audio/mir/master.svg?style=flat-square)](https://coveralls.io/github/mirai-audio/mir?branch=master)
[![David](https://img.shields.io/david/dev/mirai-audio/mir.svg?style=flat-square)](https://david-dm.org/mirai-audio/mir?type=dev)
[![Ember](https://img.shields.io/badge/Ember-2.16-blue.svg?style=flat-square)](https://emberjs.com/)

_Ember app powering the frontend of mirai.audio_


## [Docs](https://github.com/mirai-audio/mir/wiki)

* [CODE_OF_CONDUCT](https://github.com/mirai-audio/mir/wiki/CODE_OF_CONDUCT)
* [CONTRIBUTING](.github/CONTRIBUTING.md)
* [CSS Naming Conventions](https://github.com/mirai-audio/mir/wiki/CSS-Naming-Conventions)
* [humans.txt](https://github.com/mirai-audio/mir/wiki/humans.txt)
* [STYLEGUIDE](https://github.com/mirai-audio/mir/wiki/STYLEGUIDE)


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)
* [Watchman](https://facebook.github.io/watchman/)
* [Yarn](https://yarnpkg.com/)

macOS / OS X Installation:

```bash
brew install watchman
brew install yarn  # add --without-node flag if you use nvm
yarn global add ember-cli
```

Linux (Ubuntu)

```bash
npm install -g yarn
yarn global add ember-cli  # Make sure $(yarn global bin) is in your $PATH
```

## Installation

```bash
git clone <repository-url>
cd mir
yarn
```

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

`ember serve` then visit your app at 
[http://localhost:4200](http://localhost:4200).

To run with service workers, without live reload:
`ember serve --live-reload=false` and add `?dev=true` to the URL.

### Environment variables

The following environment variables are available to override fallback (dev)
configuration:

```bash
# common
API_URL=https://api.mirai.audio  # REST API address
HOST=http://localhost:4200       # Default host

# social login providers
TWITTER_REQUEST_TOKEN_URL=//localhost:4000/auth/twitter # ai kickstarts OAuth

# Coveralls API token (how test coverage is reported)
COVERALLS_REPO_TOKEN=  # needs to be set in Circle CI / Travis
```

If these are defined in a `.env` file, they will be sourced and made available
in the running application.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## LICENSE

[MIT](LICENSE)

A product of <ruby>
  <ruby>
    青<rp>(</rp><rt>せい</rt><rp>)</rp>
    心<rp>(</rp><rt>しん</rt><rp>)</rp>
    工<rp>(</rp><rt>こう</rt><rp>)</rp>
    機<rp>(</rp><rt>き</rt><rp>)</rp>
  </ruby>
  <rp>(</rp><rt>seishinkouki</rt><rp>)</rp>
</ruby> Co., Ltd
