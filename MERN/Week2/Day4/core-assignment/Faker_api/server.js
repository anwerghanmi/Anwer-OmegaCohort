const express = require("express");
const faker = require('@faker-js/faker');
const app = express();

class User {
    constructor() {
        this.id = faker.random.number();
        this.firstName = faker.random.firsName();
        this.lastName = faker.random.lastName();
        this.phoneNumber = faker.random.phoneNumber();
        this.email = faker.random.email();
        this.passeword = faker.random.passeword();
    }
}
const newUser = new User ();
console.log(newUser);


class Company {
    constructor() {
        this._id = faker.random.number();
        this.name= faker.company.companyName();
        this.address = newAdd;
    }
  }
  const newComp = new Company();
  console.log(newComp);
  app.get("/api/:users/:new", (req, res) => {
    if(req.params.users === "users"){
      res.send(`User First Name: ${newUser.firstName}; User Last Name: ${newUser.lastName}`);
    }
    if(req.params.users === "companies"){
        res.send(`Company name: ${newComp.name}`);
      }
      if(req.params.users === "user" && req.params.new === "company"){
        res.send(`User First Name: ${newUser.firstName}; Company name: ${newComp.name}`);
      }
    });
    const server = app.listen(8000, () =>
      console.log(`Server is locked and loaded on port ${server.address().port}!`)
    );