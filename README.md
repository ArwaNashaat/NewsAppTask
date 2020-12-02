# NewsAppTask
## Steps to run Api/Backend
1) RUN `cd Api`
2) Rename .env.example file to .env
3) Edit .env to match your database credentials, or create database with the same credentials as in .env
4) RUN `composer install`
5) RUN `php artisan migrate`
6) Run `php artisan serve --port=8001`
- **PLEASE NOTE THAT** .env.example does contain sensitive data that shouldn't be exposed within github, but it's only for the sake of the task 

## Steps to run Frontend
1) RUN `cd FrontEnd`
2) RUN `npm install`
3) RUN `npm start`
