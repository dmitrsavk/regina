#!/bin/sh
echo 'restart regina'
NODE_ENV=prod sudo /root/.nvm/versions/node/v10.6.0/lib/node_modules/forever/bin/forever start /root/regina/server.js