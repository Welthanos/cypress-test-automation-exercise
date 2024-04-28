import { faker } from '@faker-js/faker';

export const user = {
    name: {
        first: () => faker.person.firstName(),
        last: () => faker.person.lastName(),
        full: () => this.first() + " " + this.last()
    },
    email: {
        valid: () => faker.internet.email(),
        invalid: () => faker.person.fullName(),
        existing: 'weltonsts15@gmail.com'
    },
    password: {
        valid: () => faker.internet.password(),
        existing: '12345678'
    },
    birthDate: {
        day: () => faker.number.int({ min: 1, max: 31 }),
        month: () => faker.date.month(),
        year: () => faker.number.int({ min: 1950, max: 2008 }).toString()
    },
    company: () => faker.company.name(),
    address: () => faker.location.streetAddress(),
    country: () => faker.number.int({ min: 0, max: 6 }),
    state: () => faker.location.state(),
    city: () => faker.location.city(),
    zipCode: () => faker.location.zipCode(),
    mobileNumber: () => faker.phone.number()
}