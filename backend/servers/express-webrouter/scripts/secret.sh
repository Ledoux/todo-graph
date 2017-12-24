if [ $TYPE = 'production' ]; then
  awk '{print "heroku config:set --app todo-graph "$0";"}' scripts/"$TYPE"_secret.sh | xargs -0 bash -c;
else
  awk '{print "heroku config:set --app $TYPE-todo-graph "$0";"}' scripts/"$TYPE"_secret.sh | xargs -0 bash -c;
fi
