mongoimport --db github-dating --collection contributors --drop --file contributors.json &&
mongoimport --db github-dating --collection contributors-skills  --drop --file contributors-skills.json &&
mongoimport --db github-dating --collection projects --drop --file projects.json &&
mongoimport --db github-dating --collection projects-skills --drop --file projects-skills.json &&
echo "import complete"
