# Web Application Test
## Theme
Please implement web application which is able to show murmur(=tweet) by user. (this application is similar to Twitter)
```
$ node -v
v12.18.3
$ npm -v
6.14.6
$ yarn -v
1.22.4
```

<<<<<<< develop
### implimented REST api

  POST: http://localhost:3001/auth/signin
  POST: http://localhost:3001/auth/signup
  POST: http://localhost:3001/auth/signout
  GET: http://localhost:3001/auth/:id
  POST: http://localhost:3001/murmur
  GET: http://localhost:3001/murmur/:userId
  GET: http://localhost:3001/murmur/:Id
  DELTE: http://localhost:3001/murmur/:Id
  POST: http://localhost:3001/murmur/:Id/like
  
  

### To run the project
#### DB
1. cd db && docker-compose build
1. docker-compose up -d

#### Server
1. cd server && npm run start:dev
2. server will run http://localhost:3001

#### Client
1. cd src && npm run dev
Client will run http://localhost:3000
=======

sample

```
$ node -v
v12.18.3
$ npm -v
6.14.6
$ yarn -v
1.22.4
```

To run the project
###DB
     cd db && docker-compose build
     docker-compose up -d
###Server
     cd server && npm run start:dev
     server will run http://localhost:3001
###Client
     cd src && npm dev Client will run http://localhost:3000

>>>>>>> main

