# Leaflet d3 Hexbin Plugin Directive for Angular

[![Build Status][travis-image]][travis-url]

## What is it?
This is an Angular directive that wraps leaflet.hexbin

## How do I use it?


```js

```

## How do I include this package in my project?
The easiest way to include this package in your project, is to use [Bower](http://bower.io)

```bash
bower install -S angular-leaflet-hexbin
```

Alternatively, you can download the source or minified javascript files yourself from the GitHub repository (they are contained in the dist directory).

Alter-alternatively, you can clone this repo and build it yourself.

You will also need to install the dependencies, which include [leaflet.js](http://leafletjs.com/), [d3.js](http://www.d3js.org), [d3-plugins](https://github.com/d3/d3-plugins), and [AngularJS](https://angularjs.org/).

```bash
bower install -S leaflet
bower install -S leaflet.hexbin
bower install -S d3
bower install -S d3-plugins
bower install -S angularjs
```


## How do I build this project?
There are several tools you will need to install to build this project:
* [Node](http://nodejs.org/)
* [Gulp](http://http://gulpjs.com/)
* [Bower](http://bower.io)

If you're on Mac OS, check out [Homebrew](https://github.com/mxcl/homebrew) to get node up and running easily. It's as simple as `brew install node`

First, you will need to install the build dependencies for the project using node. If you want to use the examples, you will need to install the javascript dependencies for the project using bower. Finally, to build the project and generate the artifacts in the /dist directory, you will need to build the project using gulp. 

```bash
npm install
bower install
gulp
```

[travis-url]: https://travis-ci.org/Asymmetrik/angular-leaflet-filter/
[travis-image]: https://travis-ci.org/Asymmetrik/angular-leaflet-filter.svg
