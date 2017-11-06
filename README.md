React Native (create-react-native-app) list app using GraphQL + Relay Modern

## Setup

* This project uses GraphQL Boilerplate: https://github.com/entria/graphql-dataloader-boilerplate

* ```git clone ```
* ```yarn install``` 
* ```yarn relay```
* make sure you have MongoDB installed

## Run
* ```brew services start mongodb```
* ```npm start```
* ```cd server/fullstacklist && npm run start```

## Authentication
This project authentication just checks whether the typed login matches the user's name. A fency authentication can be developed from this basic structure

## Add users
While mutation to add user is not available, you can run the following command to create 2 users "Tiago" and "Souto"


(if 'database' and 'user' collection doesn't already exits):

```use database```

```db.creteCollection("user")```

```
db.user.insertMany({ "_id" : ObjectId("587cf02e6424a517ffe372e8"), "updatedAt" : ISODate("2017-01-16T16:09:18.771Z"), "createdAt" : ISODate("2017-01-16T16:09:18.771Z"), "name" : "souto", "email" : "souto@entria.com.br", "password" : "$2a$08$VLMOIRjOU/21JW7nJL3xSu8kx8B1RuijrbakMJKZZXjqDQE4yQRza", "active" : true, "__v" : 0 }, { "_id" : ObjectId("587cb65f7d2c45152c962ff8"), "updatedAt" : ISODate("2017-01-16T12:02:39.358Z"), "createdAt" : ISODate("2017-01-16T12:02:39.358Z"), "name" : "tiago", "email" : "tiago@entria.com.br", "password" : "$2a$08$7DgC9b/RbQXow364VoQltOo4ScD7SeZQSvzz431uP2i3hpauMQZeK", "active" : true, "__v" : 0 })
```
You can always create a new user in your database with the example script as above.
