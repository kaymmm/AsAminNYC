Asian Americans in New York Summer Seminar Website
==================================================

The project website for the NEH funded Asian Americans in New York: Literature & Film summer seminar.

Built using [yeoman](http://yeoman.io/), [grunt](http://gruntjs.com/), and [bower](http://bower.io/).

Bootstrapped using the Yeoman [bootstrap-less generator](https://github.com/Thomas-Lebeau/generator-bootstrap-less).

Themed using the [Start Bootstrap](http://startbootstrap.com) [Agency Template](http://startbootstrap.com/template-overviews/agency/).

Utilizes the following libraries:
- [Bootstrap](getbootstrap.com) frontend framework
- [jquery](http://jquery.com/)
- [jquery-ui](http://jqueryui.com/)
- [modernizr](http://modernizr.com/)

Installation
------------
###Clone the GitHub repository
Enter the following command at the command line:
```
$ git clone git://github.com/kaymmm/AsAminNYC.git
```

###Check for and install required tools
Make sure your system has [Node.js](http://nodejs.org/download/), [grunt](http://gruntjs.com/), and [bower](http://bower.io/) already installed.
Entering the command `$ node -v` at the command line should return something like `v0.10.32`. If not, you need to install Node.js by following the link above.
Entering the command `$ which grunt` at the command line should return something like `grunt: aliased to grunt --stack`. If not, install grunt (full directions at the above link) using the following command at the command line (you may need to use sudo on OS X and *nix):
```
$ npm install -g grunt-cli
```
Entering the command `$ bower -v` at the command line should return something like `1.3.12`. If not, install bower (full directions at the above link) using the following command at the command line:
```
$ npm install -g bower
```

###Grunt the project
Once all of the required tools are installed, you can test the site using the following commands:
```
$ cd AsAminNYC
$ grunt serve
```
A browser window should open a "live view" of the site. To quit grunt at the command line, hit ctrl-c (^c)

Compiling
---------
To compile the site, just type `$ grunt` at the command line. The "dist" folder should be updated with the compiled files.
