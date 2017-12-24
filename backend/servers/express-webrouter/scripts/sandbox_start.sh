#!/bin/sh
_TYPE=$TYPE && export SITE_NAME=todo-graph && export TYPE=development && export PORT=5000 && export URL=https://staging-todo-graph.herokuapp.com && export TYPE=$_TYPE && npm run sandbox
