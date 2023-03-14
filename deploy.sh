touch build/CNAME
echo "anwar.app" >> build/CNAME
# Copy 404 page to production build
cp ./404.html build/404.html

cd ./build
git add .
git commit -m "Build Updated"
git push