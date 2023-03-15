cd anwar.app
cp ../404.html ./404.html
touch CNAME
echo "anwar.app" >> CNAME
git add .
git commit -m "Build updated"
git push