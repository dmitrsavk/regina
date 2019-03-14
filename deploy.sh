#!/bin/bash

yarn
next build
forever stop /root/regina/server.js
NODE_ENV=prod forever start /root/regina/server.js
