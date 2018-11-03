# Collaborative Online Code Judge System

## Introduction

## Scenario
1. Problems: 
Problems is the key part of my project. Administrator can add, delete, modify and search problems. User can search problems.

2. Editing of Code:
Combine editor module and collaboration module.

3. Submit Code:
apply Java, Python and C++ executor, execute code and show result.

## Design
Followings are 4 modules.  
1. Web Browser
Create a single-web application by TypeScript and Angular2.

2. Web Socket
Use HTTP to direct pages and apply socket.io to make collaboration function.

3. Backend
Code by Node.js and made cache by redis, because some hot point problem can be stored in cache.

4. Online Judger
Deploy the code by docker and use Flask framework to make a mulitple-languages online judger.
5. DataBase
Choose the MongoDB as the database of this project, because MongoDB is really fast in a web application. 

## Evolve 

Use RESTful API to refator and load balance of whole project by Nginx.
