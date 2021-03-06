# Sandpit.node
Learnings in node

## Set Up

http://nodejs.org/download/

This installs npm too

## Hello World

Demonstrates modules and basic structure of a node program (with modules / require). 

    node index.js

## Hello World Web

Demonstrates a simple web server / router.

    node server.js

[http://localhost:8888/](http://localhost:8888/ "Example")

## Node Package Manager

Demonstrates how to create a package.json file, adds global and local modules.

[https://docs.npmjs.com/](https://docs.npmjs.com/ "Comprehensive Docs")

	npm init
	npm install lodash -g
	npm uninstall lodash -g
	npm install --save lodash
	npm install --save --save-exact sieve@latest
	npm install --save --save-dev sax@0.1.1

	node index

	del node_modules
	npm install
	

## Express and Express-Generator

Demonstrates the popular express framework package.

	npm init
	npm install express --save
	npm ls

	npm install express-generator -g
	express -h
	express myapp
	cd myapp
	npm install

	set DEBUG=myapp & node .\bin\www

## Yeoman Generator (Optional)

Demonstrates the Yeoman web scaffolding package.

### Web App Generator

	npm install -g yo bower grunt-cli gulp
	npm install -g generator-webapp

	mkdir my-yo-project
	cd my-yo-project
	yo webapp

### Angular Generator (Optional)

	npm install -g generator-angular

	mkdir my-yo-angular-project
	cd my-yo-angular-project
	yo angular

