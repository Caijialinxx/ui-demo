 yarn doc
 git checkout gh-pages
 mv doc/* ./
 git add .
 git commit -m $1
 git push
 git checkout -