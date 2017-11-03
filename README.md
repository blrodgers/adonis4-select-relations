# adonis4-select-relations
Project to reproduce select() statement behavior with relations as seen at:

https://forum.adonisjs.com/t/select-statements-with-relations/296

Upon cloning this repo you'll need to:

1. Install dependencies
    adonis install

2. Run Migrations 
    adonis migration:run

3. Start server
    adonis serve --dev

4. Open Browser and navigate to localhost:3333

5. Follow browser link to /init 
  This will install one dummy post with two tags.
  Visiting this URL more than once will result in duplicate DB entries.

6. Follow browser link to /posts

7. Open file PostController.js under (project)/app/Controllers/Http in your favorite editor

8. Compare the results of the different queries made in PostController.js with the output in browser
