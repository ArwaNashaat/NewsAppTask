# NewsAppTask
## Steps to run Api/Backend
1) Make sure to have **laravel 8**
2) RUN `cd Api`
3) Rename .env.example file to .env
4) Edit .env to:
   - Match your database credentials
   - Add your email configuration: `MAIL_USERNAME=$yourGmail@gmail.com`  `MAIL_PASSWORD=$yourGmailPassword`
   - Add NewsApi key: `NEWS_API_KEY=$yourGeneratedApikey`
   - Run `php artisan jwt:secret` and set the result to `JWT_SECRET=$yourGeneratedSecret` in .env 
5) RUN `composer install`
6) RUN `php artisan migrate`
7) Run `php artisan serve --port=8001`

## Steps to run Frontend
1) RUN `cd FrontEnd`
2) RUN `npm install`
3) RUN `npm start`

### Cors Error
- Cors error may occur. if so, download and enable this extension: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en

### What is implemented
1) Register/Login user (Frontend & Backend) in graphql api
2) Register/Login user (Backend only) in RESTFUL api
3) Send email to user with password
4) JWT tokens (validation & generation)
5) Get both sports/business headlines form Dubai or Egypt using NewsApi and show them to user (Frontend & Backend)
6) Add/Remove favorites (Frontend & Backend) in RESTFUl api only

### What has NOT been implemented
1) Add/Remove favorites in graphql
2) Unit tests

