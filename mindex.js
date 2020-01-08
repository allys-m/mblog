#/usr/bin/env node
'use strict';

const express = require('express');

let m_main = class {
    m_app(){
      var app = express();
        
          app.get('/', (req, res)=>{
              res.send("<h1>TEST</h1>");
              res.end();
             
          });
    }
};
