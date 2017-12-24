if [[ ! $(heroku apps:info -a staging-todo-graph) ]]; then
  git init
  heroku create --app staging-todo-graph --remote staging
  sh scripts/staging_heroku_add_buildpacks.sh
  heroku config:set --app staging-todo-graph SERVER=express-webrouter
  heroku config:set --app staging-todo-graph SITE_NAME=todo-graph
  heroku config:set --app staging-todo-graph TAG=todo-graph-wbr
  heroku config:set --app staging-todo-graph TYPE=staging
  heroku config:set --app staging-todo-graph URL=https://staging-todo-graph.herokuapp.com
  if [[ ! -d "./scripts/staging_secret.sh" ]]; then
    export TYPE=staging && sh scripts/secret.sh
  fi
else
  if [[ ! -d ".git" ]]; then
    git init
    heroku git:remote --app staging-todo-graph --remote staging
  else
    echo ".git has been already initiated"
    if [[ "$(git remote | grep staging)" == "staging" ]]; then
      echo "remote has been already set"
    else
      heroku git:remote --app staging-todo-graph --remote staging
    fi
  fi
  echo "staging-todo-graph has been already created"
fi
