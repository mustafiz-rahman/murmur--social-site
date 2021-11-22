# Web Application Test
## Theme
Please implement web application which is able to show murmur(=tweet) by user. (this application is similar to Twitter)


### install modules
It is assumed that node(v12.x.x), npm and yarn are installed.
The ability to build a development environment is also the subject of this test, so even if an error occurs, please resolve it on your own.
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
1. cd src && npm dev
Client will run http://localhost:3000
### How to confirm to success to build environment
1. You access to http://localhost:3000/
1. It's success if render html.


