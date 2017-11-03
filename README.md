# adonis4-select-relations
Project to reproduce select() statement behavior with relations as seen at:

https://forum.adonisjs.com/t/select-statements-with-relations/296

Upon cloning this repo you'll need to:

1. Install dependencies

    npm install

2. Copy .env.example to .env

    cp .env.example .env

3. Run Migrations 

    adonis migration:run

4. Start server

    adonis serve --dev

5. Open Browser and navigate to localhost:3333

6. Follow browser link to /init 

  This will add one dummy post with two tags to the database.

7. Follow browser link to /posts

8. Open file PostController.js under (project)/app/Controllers/Http in your favorite editor

9. Compare the results of the different queries made in PostController.js with the output in browser
