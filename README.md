### Документация к апи:

/api/createdoctor - POST запрос (Создает доктора в коллекции doctors)

    Принимает себя :
        {
        "name": "Имя доктора",
        "spec": "Специальность",
        "slots": [Дата в UTC]
        }

    Пример :
        {
        "name": "Вася",
        "spec": "Терапевт",
        "slots": [2023-04-25T12:42:58.257+00:00, 2023-04-25T12:42:58.257+00:00, 2023-04-25T12:42:58.257+00:00] // В UTC формате
        }





/api/createuser - POST (Создает пациента в коллекции users)

    Пример :
        {
        "name": "пациент",
        "phone": "88005553535"
        }





/api/appoint - POST (Создает запись к врачу)

    Пример :
        {
        "user_id": 'id пациента',
        "doctor_id": 'id доктора',
        "slot": '2023-04-25T12:42:58.257+00:00' // В UTC формате
        }

    PS: В качестве id используется уникальное поле "_id" которое создает сама Mongo (см в базе данных)



Сервис оповещений отрабатывает каждый день в 10 утра.
