if [ -x "$(command -v yarn)" ]; then
  rm -f yarn.lock
  yarn install
fi
git add .
git commit -m "push to heroku"
git push production master -f
