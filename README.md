# client

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

доступы тестовые
test1@yandex.ru
12345

ivanmart2017@yandex.ru
12345

1 авторизация вшивается в запрос через интерцепторы из axios, в файле http как раз обрабатывается работа с токенами
2 авторизация вынесена в store в отдельный модуль \_auth
3 в /service/AuthService вынес запросы
