"use strict";
import 'dotenv/config';

const sayHello = (subject: string): void => {
    console.log('Hello ' + subject);
  };
  
  sayHello('TypeScript');

console.log(process.env.MY_SECRET);