'use strict';

const Employee = require('../lib/Employee');

test('Instantiate Employee instance', () => {
    const testName = new Employee();
    expect(typeof testName).toBe('object');
});

test('Set name via constructor arguments', () => {
    const name = 'Lloyd';
    const testName = new Employee(name);
    expect(testName.name).toBe(name);
});

test('Set id via constructor argument', () => {
    const value = 12345;
    const testId = new Employee('Lloyd', value);
    expect(testId.id).toBe(value);
});

test('Set email via constructor argument', () => {
    const value = 'test@only.com';
    const testEmail = new Employee('Lloyd', 789, value);
    expect(testEmail.email).toBe(value);
});

test('Check name via getName()', () => {
    const value = 'Lloyd';
    const name = new Employee(value);
    expect(name.getName()).toBe(value);
});

test('Check id via getId()', () => {
    const value = 930;
    const testId = new Employee('Lloyd', value);
    expect(testId.getId()).toBe(value);
});

test('Check email via getEmail()', () => {
    const value = 'test@only.com';
    const testEmail = new Employee('Lloyd', 789, value);
    expect(testEmail.getEmail()).toBe(value);
});


