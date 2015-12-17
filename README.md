# swagger-hybrid
swagger-ui &amp; swagger-editor for developers

Demo of Swagger UI:  https://swagger-hybrid.herokuapp.com/ui[/filename]
Example: https://swagger-hybrid.herokuapp.com/ui/auth or  https://swagger-hybrid.herokuapp.com/ui/auth.yaml 

Demo of Swagger Editor: https://swagger-hybrid.herokuapp.com/
![GIF Demo](http://g.recordit.co/Q94RkpVHrL.gif)
[logo]: http://g.recordit.co/Q94RkpVHrL.gif "Swagger Create, Save and Test API Docs"

How to Deploy

1. Clone Repo `git clone https://github.com/manjeshpv/swagger-hybrid`
2. Install Dependencies for Swagger editor `cd swagger-editor && npm install && bower install`
3. Build Dist `grunt dist` (assuming current working directory is /swagger-editor)
4. Install dependency for current project `cd .. && npm install`
5. Build Dist for Heroku `gulp build` then `gulp copy-swagger-dist`
6. Deploy using 'cd dist && git push heroku master ' or 'cd dist && git push dokku master '  learn heroku from https://devcenter.heroku.com/login?back_to=%2Farticles%2Fgetting-started-with-nodejs


#### Things to do:
* Slack Notifications
* Testing
* Build
