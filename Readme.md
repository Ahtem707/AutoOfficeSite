# AutoOfficeSite

## Backend
Все запросы post типа, отправка данных идет по струтуре с двумя параметрами:
'method' - тип запроса
'arguments' - данные запроса

Все доступные запросы можно просмотреть по пути ./backend/controllers/main.js

 ### createUser
 {
    "method": "createUser",
    "arguments": {
        "name": "Ahtem",
        "email": "sdfj@",
        "password": "dkhkdk",
        "userRolesId": 0,
        "birthday": "2000-07-08"
    }
}

### getBirthday
{
    "method": "getBirthday",
    "arguments": {
        "earlierDays": 9,       //Опциональный параметр
        "limit": 6              //Опциональный параметр
    }
}

### addNew
{
    "method": "addNew",
    "arguments": {
        "title": "Название новости",
        "description": "Описание новости",
        "date": "0000-00-00",   //Опциональный параметр
        "whereEvents": ""       //Опциональный параметр
    }
}

### getNews
{
    "method": "getNews",
    "arguments": {}
}