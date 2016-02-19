# What Did User Do Today?

#### GitHub API User Data Manipulation Project in JavaScript, February 19th, 2016

#### By Midori Bowen

## Description

This is a JavaScript application that pulls a GitHub user's information, including their username and repository names, from the GitHub API and lists them.

This application was written as a code review of Modern JS Apps for Week Two of the February 2016 JavaScript course at Epicodus.

## Setup/Installation Requirements

* Install 'What Did User Do Today?' by cloning this repository.
* Navigate to the top of this project directory in your command line.
* Run `npm install` on the command line, in order to install the json packages listed in package.json.
* Run `bower install` on the command line, in order to install the bower packages (including jQuery, bootstrap CSS and JS, and moment.js) listed in bower.json.
* To start this application: First, run `gulp build --production`. Then, run `gulp serve`. The home page should open automatically in your browser.

## Known Bugs

* The GitHub API only allows 60 requests per hour from a single IP address. Keep this in mind when testing this application, because that cap will be met within testing this application one or two times.

## Technologies Used

Application: NodeJS, Gulp, Bower, JavaScript, jQuery, Bootstrap

### License

Copyright (c) 2016 Midori Bowen

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
