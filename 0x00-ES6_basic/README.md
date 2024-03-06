# alx-frontend-javascript | 0x00. ES6 Basics


# Description:bulb:
Javascript ES6

# . What ES6 is

# . New features introduced in ES6

# . The difference between a constant and a variable

# . Block-scoped variables

# . Arrow functions and function parameters default to them

# . Rest and spread function parameters

# . String templating in ES6

# . Object creation and their properties in ES6

# . Iterators and for-of loops

# Technologies & Tools:computer:
![image](https://github.com/hephzibahij/alx-frontend-javascript/assets/128981877/ba63086e-3407-4cac-ad8f-5c3aef7e45a6)
![image](https://github.com/hephzibahij/alx-frontend-javascript/assets/128981877/dfe44e67-aa32-43b8-96d2-75d928d4d913)
![image](https://github.com/hephzibahij/alx-frontend-javascript/assets/128981877/57ad1190-91f3-4611-8e87-f1c59b921985)
![image](https://github.com/hephzibahij/alx-frontend-javascript/assets/128981877/dc1aad00-7cad-406d-abf3-1b28e6a1324d)
![image](https://github.com/hephzibahij/alx-frontend-javascript/assets/128981877/f70f6996-2199-4601-b71b-8e7e708ac75d)
![image](https://github.com/hephzibahij/alx-frontend-javascript/assets/128981877/6c5f8ea4-93e4-43e2-a987-f243d463806a)
![image](https://github.com/hephzibahij/alx-frontend-javascript/assets/128981877/49389ad2-e3a1-40fd-bdb0-55fd9b216a0d)
![image](https://github.com/hephzibahij/alx-frontend-javascript/assets/128981877/20c07761-5c08-40c4-85f2-9bff0d0c1606)
![image](https://github.com/hephzibahij/alx-frontend-javascript/assets/128981877/675f331a-47f1-4d83-93cd-6cf8f2a6413b)
![image](https://github.com/hephzibahij/alx-frontend-javascript/assets/128981877/dd554ecc-73f8-4ba2-a173-689b18a928f9)
![image](https://github.com/hephzibahij/alx-frontend-javascript/assets/128981877/89e4a065-410e-460a-906e-e5cf9b4a2467)
![image](https://github.com/hephzibahij/alx-frontend-javascript/assets/128981877/587df9a6-0ef5-4fbd-9191-f9a1bf4cf029)

# Resources:books:

Read or watch:

# . ECMAScript 6 - ECMAScript 2015

# . Statements and declarations

# . Arrow functions

# . Default parameters

# . Rest parameter

# . Javascript ES6 — Iterables and Iterators

# . Requirements:hammer:

# . Ubuntu 18.04 LTS using NodeJS 12.22.x

# . Jest Testing Framework

# . ESLint

# Install NodeJS 12.22.x 

root@AZ-IHEPHZIBAH:~$ curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh

root@AZ-IHEPHZIBAH:~$ sudo bash nodesource_setup.sh

root@AZ-IHEPHZIBAH:~$ sudo apt install nodejs -y

# Check version

# root@AZ-IHEPHZIBAH:~$ nodejs -v
v12.22.1

# root@AZ-IHEPHZIBAH:~$ npm -v
6.14.12

# Install Jest, Babel, and ESLint

# root@AZ-IHEPHZIBAH:~$ npm install --save-dev jest

# root@AZ-IHEPHZIBAH:~$ npm install --save-dev babel-jest @babel/core @babel/preset-env

# root@AZ-IHEPHZIBAH:~$ npm install --save-dev eslint

# .eslintrc.js

``javascript module.exports = { env: { browser: false, es6: true, jest: true, }, extends: [ 'airbnb-base', 'plugin:jest/all', ], globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly', }, parserOptions: { ecmaVersion: 2018, sourceType: 'module', }, plugins: ['jest'], rules: { 'no-console': 'off', 'no-shadow': 'off', 'no-restricted-syntax': [ 'error', 'LabeledStatement', 'WithStatement', ], }, overrides:[ { files: ['*.js'], excludedFiles: 'babel.config.js', } ] }; ```

# Files:card_file_box:

# 0. # Const or let?
    
# 1. # Block Scope
 
# 2. # Arrow functions
 
# 3. # Parameter defaults
 
# 4. # Rest parameter syntax for functions
 
# 5. # The wonders of spread syntax
 
# 6. # Take advantage of template literals
 
# 7. # Object property value shorthand syntax
 
# 8. # No need to create empty objects before adding in properties
 
# 9. # ES6 method properties
 
# 10. # For...of Loops
 
# 11. # Iterator
 
# 12. # Let's create a report object

# Author

Ijeje Hephzibah Owoma (@hephzibahij) - ![image](https://github.com/hephzibahij/alx-frontend-javascript/assets/128981877/f1967155-09e4-4b0b-bc5f-5e28d8bcca28)
![image](https://github.com/hephzibahij/alx-frontend-javascript/assets/128981877/99d5ab0e-9338-4188-b00c-819a835f01db)
![image](https://github.com/hephzibahij/alx-frontend-javascript/assets/128981877/a39aa5e8-167f-4020-b263-c9e5d78aa41f)
![image](https://github.com/hephzibahij/alx-frontend-javascript/assets/128981877/7cac5ee2-43fc-4f3a-bd0c-a3952f8de1bb)
