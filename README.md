# Graffiti-place

## Добро пожаловать в наш проект

![Главная страница](https://github.com/SergeyNartov/graffiti-place-public/blob/master/readme-file/screenshot_1.png?raw=true)

*Рисунок 1*. Главная страница

### Страница регистрации

В нашем проекте можно зарегистироваться как ходожник и как заказчик

![Главная страница](https://github.com/SergeyNartov/graffiti-place-public/blob/master/readme-file/screenshot_2.png?raw=true)

*Рисунок 2*. Страница регистрации

### Страницы заказчика

* Если мы зарегистрировались как заказчик (или выполнили вход) то у нас появляется возможность добавлять свои заказы на сайт где они будут видны всем;
* Мы можем посмотреть все заказы, все работы художников, посмотреть подробную информация как о художнике так и о заказчике, но мы не можем откликнуться для выполнение работ;
* В личном кабинете заказчика мы можем видеть все наши заказы, а так же посмотреть всех художников кто откликался на наш заказ;

![Главная страница](https://github.com/SergeyNartov/graffiti-place-public/blob/master/readme-file/screenshot_3.png?raw=true)

*Рисунок 3*. Страница заказов

![Главная страница](https://github.com/SergeyNartov/graffiti-place-public/blob/master/readme-file/screenshot_4.png?raw=true)

*Рисунок 4*. Личный кабинет заказчика

### Страница художника

* Если мы зарегистрировались как художник (или выполнили вход) то у нас появляется возможность добавлять свои работы на сайт где они будут видны всем, так же у нас появляется возможность откликаться на заказы;
* В личном кабинете мы можем видеть свои работы которые добавляли на сайт, а так же можем видеть все заказы на которые откикались

![Главная страница](https://github.com/SergeyNartov/graffiti-place-public/blob/master/readme-file/screenshot_5.png?raw=true)

*Рисунок 5*. Страница художников

![Главная страница](https://github.com/SergeyNartov/graffiti-place-public/blob/master/readme-file/screenshot_6.png?raw=true)

*Рисунок 6*. Личный кабинет ходожника 1

![Главная страница](https://github.com/SergeyNartov/graffiti-place-public/blob/master/readme-file/screenshot_7.png?raw=true)

*Рисунок 7*. Личный кабинет ходожника 2 

Запуск приложения:
1. Склонировать репозиторий.
2. Установить docker: https://docs.docker.com/engine/install/
3. Установить docker compose: https://docs.docker.com/compose/install/
4. Запуск сервера:
  а) Отрыть терминал в папке  graffiti-place-public/server;
  б) Выполнить команду npm install;
  в) Выполнить команду sudo docker-compose up -d;
  г) Выполнить команду npx sequelize db:migrate;
  д) Выполнить команду npx sequelize db:seed:all;
  е) Выполнить команду npm start.
3. Запуск клиента:
  а) Отрыть терминал в папке  graffiti-place-public/client;
  б) Выполнить команду npm install;
  в) Выполнить команду npm start.









