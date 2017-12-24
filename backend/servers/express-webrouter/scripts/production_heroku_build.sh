if [[ ! $(heroku apps:info -a todo-graph) ]]; then
  git init
  heroku create --app todo-graph --remote production
  sh scripts/production_heroku_add_buildpacks.sh
  heroku config:set --app todo-graph SERVER=express-webrouter
  heroku config:set --app todo-graph SITE_NAME=todo-graph
  heroku config:set --app todo-graph TAG=todo-graph-wbr
  heroku config:set --app todo-graph TYPE=production
  heroku config:set --app todo-graph URL=https://todo-graph.herokuapp.com
  if [[ ! -d "./scripts/production_secret.sh" ]]; then
    export TYPE=production && sh scripts/secret.sh
  fi
else
  if [[ ! -d ".git" ]]; then
    git init
    heroku git:remote --app todo-graph --remote production
  else
    echo ".git has been already initiated"
    if [[ "$(git remote | grep production)" == "production" ]]; then
      echo "remote has been already set"
    else
      heroku git:remote --app todo-graph --remote production
    fi
  fi
  echo "todo-graph has been already created"
fi
