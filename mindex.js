#!/usr/bin/env node
'use strict';

const http    = require('http'),
      express = require('express'),
      ejs     = require('ejs'),
      fs      = require('fs'),
      os      = require('os'),
      url     = require('url'),
      bodyP   = require('body-parser'),
      path    = require('path'),
      io      = require('socket.io'),
      pySh    = require('python-shell');



let mMain = class {
	// starting first function ClassStart()
	start(){
		let app = express()
		    .use(express.static(__dirname))
		    .use(bodyP.json())
		    .use(bodyP.urlencoded({ extended: true }))
		    .engine('html', ejs.renderFile);
    //  Creating CONST host and port connexion  localhost 192.168.0.16
		const host = process.env.host || "localhost",
		      port = process.env.port || 8808;

	// App gething root side 
		app.get('/', (req, res)=>{
			res.setHeader('200', {'Content-Type': 'text/plain'});
			//res.render(path.join(__dirname + '/src/prive/allys.html'));
                        res.send("<h1>........TEST:::::::::</h1>");
		});
		
		app.listen(3001);
