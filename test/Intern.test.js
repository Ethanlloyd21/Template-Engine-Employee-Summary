'use strict';

const Intern = require('../lib/intern');

test('Checking for school via constructor', () => {
    const value = 'Udub';
    const intern = new Intern('Lloyd', 789, 'test@test.com', value);
    expect(intern.school).toBe(value);
});

test('Checking for school via getSchool()', () => {
    const value = 'Udub';
    const intern = new Intern('Lloyd', 789, 'test@test.com', value);
    expect(intern.getSchool()).toBe(value);
});