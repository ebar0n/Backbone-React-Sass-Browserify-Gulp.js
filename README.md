# Backbone-React-Sass-Browserify-Gulp.js
![alt tag](http://i58.tinypic.com/15g56ci.jpg)

## Overview
Backbone-React-Sass-Browserify-Gulp.js is a starter project to create apps with Backbone Models, Collections and Routes also with React Components, builded with Browserify and managed with Gulp tasks.

## Requirements
1. [Node.js](https://nodejs.org) - (First you need to install Node.js on your computer, for Windows and Mac users just download the wizard setup and for Linux users, please read this [guide](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server)).
2. [Sass](http://sass-lang.com/install) - ```gem install sass``` (For style dependencies, you need to install Sass).

## Quickstart
Download or clone this repository into a directory of you choice.

1. Inside the directory, run: ```npm install```
2. Be sure you have all the node_modules installed.

## Usage
##### Let's code!
Inside the directory, run:
```
$ gulp
```
This will be watching all changes you made in the ```./app``` directory and everything will be processed into ```./dist``` directory.

##### To build the app
if you are ready to build the application, just run:
```
$ gulp build
```
This will minimize ```main.css``` (```main.min.css```) and ```bindle.js```(```bindle.min.js```) and then be copied to the ```./public``` directory, these are the files you will use in a production server.

## Contributing
Contributions, questions and comments are all welcome and encouraged.

## License
MIT License
