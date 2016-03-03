mongoimport --db github-dating --collection contributors --drop --file contributors.json &&
mongoimport --db github-dating --collection projects --drop --file projects.json &&
echo "import complete"
