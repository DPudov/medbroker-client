# API-клиент для Medbroker

## Особенности

- размер: < 1KB gzip

- работает и в Node.js, и в браузере

- реализовано на TypeScript

## Установка

```bash
npm i medbroker-client
```

## Использование

Импортируйте модуль `medbroker-client` в ваш проект и
инициализируйте его своим ключом API.

```js
    import MedBroker from 'medbroker-client';

    const MedBrokerClient = new MedBroker({ apiKey: '%apiKey%' })
    
    MedBrokerClient.suggestServsToUser({
        patient: {
            patient_id: 1234,
            sex: 1,
            birthday: 1984
        },
        selected_servs: [
            {
                "serv_code": "1234"
            },
            {
                "serv_code": "4321"
            }       
        ]
    }).then((response) => {
        console.log(response)
    })
```
