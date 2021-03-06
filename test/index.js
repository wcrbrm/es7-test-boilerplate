import React from 'react';
import { expect, assert } from 'chai';
import renderer from 'react-test-renderer';

describe('Describing', () => {
  it('expect immutable', () => {
    const person = { name: 'John', age: 28 };
    const personCopy = { ...person };  
    person.age = 30;
    expect(personCopy.age).to.equal(28);
  });
});

