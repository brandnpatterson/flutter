
# flutter #

flutter is a lightweight single page application template built to emulate social media. The technologies used to create it are PHP, MySQL, and JavaScript. Other technologies used in development are listed in package.json & composr.json. Feel free to use this template for any app that you create.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Install the following package managers to get started

* [MAMP](https://www.mamp.info/en/) - (XAMPP/etc if you change gulp scripts)
* [Sequal Pro](https://www.sequelpro.com/) - (or your choice)
* [Composer](https://getcomposer.org/) - PHP package manager
* [NPM](https://nodejs.org/en/) - Installed with Node.js
* [Yarn](https://getcomposer.org/) (optional)

### Installing

To install:

Simply fork this repo and use

```
npm install or yarn install && composer update
```

### Import created database

In order to get started with flutter, you must import the flutter.sql file in the "db" directory into Sequal Pro (or your choice).

### Autoloading with Composer

flutter uses autoloading with Composer. Use the following command to auto-load your PHP with the optimal flag

```
composer dump-autoload -o
```

### Run the app

```
npm start
```

flutter will open in your default browser!

## Built With
The technologies used to create flutter are PHP, MySQL, and JavaScript.
* [Slim](https://www.slimframework.com/) - PHP Microframework
* [Twig](https://twig.sensiolabs.org/) - PHP Templating Engine
* [Illuminate](https://github.com/illuminate/database) - Laravel's Database component
* [JavaScript](https://www.javascript.com/)
* [Sass](http://sass-lang.com/)

## Authors

* **Brandon Patterson** - *Initial work* - [brandnpatterson](https://github.com/brandnpatterson)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thank you for checking out flutter
* Feel free to use this as a template for any app you create that might need to use these technologies!
