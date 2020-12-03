# NewsAppTask
## Steps to run Api/Backend
1) Make sure to have **laravel 8**
2) RUN `cd Api`
3) Rename .env.example file to .env
4) Edit .env to:
```
   4.1. Match your database credentials
   4.2. Add your email configuration: MAIL_USERNAME=yourGmail@gmail.com & MAIL_PASSWORD=yourGmailPassword
   4.3. Add NewsApi key: NEWS_API_KEY=yourGeneratedApikey
   4.4. Run php artisan jwt:secret and set the result to JWT_SECRET= in .env 
```
5) RUN `composer install`
6) RUN `php artisan migrate`
7) Run `php artisan serve --port=8001`

## Steps to run Frontend
1) RUN `cd FrontEnd`
2) RUN `npm install`
3) RUN `npm start`
