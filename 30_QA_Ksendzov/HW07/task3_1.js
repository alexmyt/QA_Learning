// Написать функцию, которая найдет и выведет в консоль юзеров, зарегистрированных 09.10.2021 и 10.10.2021
// Массив в task1.txt
const users = [
    {
        firstName: 'John',
        lastName: 'Caper',
        phone: '7436676737634',
        registrationDate: '12.10.2021'
    },
    {
        firstName: 'Clark',
        lastName: 'Kent',
        phone: '4346676737634',
        registrationDate: '16.09.2021'
    },
    {
        firstName: 'Tony',
        lastName: 'Stark',
        phone: '7436698337634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Bruce',
        lastName: 'Wayne',
        phone: '1111176737634',
        registrationDate: '09.10.2021'
    },
    {
        firstName: 'Star',
        lastName: 'Lord',
        phone: '7439374737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Kate',
        lastName: 'Bishop',
        phone: '7436693647634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Jerry',
        lastName: 'James',
        phone: '7409048737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Jeremy',
        lastName: 'Clarkson',
        phone: '743667600289334',
        registrationDate: '16.10.2020'
    },
    {
        firstName: 'Robert',
        lastName: 'Patrik',
        phone: '7436676730093',
        registrationDate: '10.10.2020'
    },
    {
        firstName: 'Jonny',
        lastName: 'Sins',
        phone: '74923982737634',
        registrationDate: '01.01.2021'
    },
    {
        firstName: 'Andrew',
        lastName: 'Garfield',
        phone: '743667988344',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Jane',
        lastName: 'Foster',
        phone: '74368783427634',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Rick',
        lastName: 'Smith',
        phone: '700000037634',
        registrationDate: '12.10.2021'
    },
];

/**
 * Variant 1 - with loop
 * @param {object} users - array of users structures
 * @param {object} regDates - array of registration dates
 */
const printUsersByRegDates = function (users, regDates) {
    users.forEach(user => {
        if (regDates.includes(user.registrationDate)) console.log(user);
    });
}

/**
 * Variant 2 - with 'filter' method of array
 * @param {object} users array of users structures
 * @param {object|string} regDates string or array of registration dates
 * @returns {object} array of users which registrationDaye in regDates
 */
const filterUsersByRegDates = function(users, regDates){
    return Array.isArray(regDates)
        ? users.filter(element => regDates.includes(element.registrationDate))
        : users.filter(element => regDates == element.registrationDate);
}

//printUsersByRegDates(users, ['09.10.2021', '10.10.2021']);
console.log(filterUsersByRegDates(users, ['09.10.2021', '10.10.2021']));
console.log(filterUsersByRegDates(users, '12.10.2021'));