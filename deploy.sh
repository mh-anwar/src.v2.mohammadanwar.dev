git subtree pull --prefix build git@github.com:mh-anwar/anwar.git build

touch ./build/CNAME
echo "anwar.app" >> build/CNAME
# Copy 404 page to production build
cp ./404.html ./build/404.html

git add ./build && git commit -m "Build updated"
git subtree push --prefix build git@github.com:mh-anwar/anwar.git build