# NewsAppTask
## Steps to run Api/Backend
1) Make sure to have **laravel 8**
2) RUN `cd Api`
3) Rename .env.example file to .env
4) Edit .env to match your database credentials, or create database with the same credentials as in .env
5) RUN `composer install`
6) RUN `php artisan migrate`
7) Run `php artisan serve --port=8001`
- **PLEASE NOTE THAT** .env.example does contain sensitive data that shouldn't be exposed within github, but it's only for the sake of the task 

## Steps to run Frontend
1) RUN `cd FrontEnd`
2) RUN `npm install`
3) RUN `npm start`
