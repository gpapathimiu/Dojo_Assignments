const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const createUser = () => {
const newUser = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    _id: faker.string.binary()
}
return newUser;
}

const createCompany = () => {
    const newCompany = {
        _id: faker.string.binary(),
        name: faker.company.name(),
        address : {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
    return newCompany;
}

app.get("/api/users/new", (req, res) => {
    res.json(createUser());
});

app.get("/api/company/new", (req, res) => {
    res.json(createCompany());
})

app.get("/api/user/company", (req, res) => {
    const randomUser = createUser();
    const randomCompany = createCompany();
    res.json({ userInfo: randomUser, companyInfo: randomCompany });
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );