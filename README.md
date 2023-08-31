# ORM E-commerce Back End

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Links](#links)    

## Description

 This assignment replicates the server-side portion of an online retail platform. Using express.js, a functioning API was created to interact with a mySQL database and retireve product information, as well as add, update, and delete inventory types and categories. The data was seeded to mySQL directly so that all products and product tags could persist outside of the server environment. All routes were tested with Insomnia, confirming that the connection between the database and the routes is fully functional and produces the accurate results.  A .env document was also used with the 'dotenv' package to keep passwords and other sensitive data from being viewable on a public repository.  

## Installation

- Node.js - To download the latest version of npm, on the command line, run the following command: 
"npm install -g npm". Once installed, the questionnaire can be run by typing "node index.mjs" in the terminal. 

- Express.js - Create a package.json first with the npm init command. Installation is done using the npm install command: $ npm install express

- Sequelize: npm install --save sequelize

    - You'll also have to manually install the driver for your database of choice:

    - One of the following:
       - npm install --save pg pg-hstore # Postgres
       - npm install --save mysql2
       - npm install --save mariadb
       - npm install --save sqlite3
       - npm install --save tedious # Microsoft SQL Server
       - npm install --save oracledb # Oracle Database


- [Insomnia Testing Installation](https://docs.insomnia.rest/insomnia/install)


## Links

[Repository](https://github.com/pb1983/ORM-Ecommerce)

[Walkthrough Video](https://drive.google.com/file/d/1OW8kL39D0z3tmk89r_-_2-Rk3y6aHMwQ/view)