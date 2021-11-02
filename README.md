# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sdelacruz/lotide`

**Require it:**

`const _ = require('@sdelacruz/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first element in an array given an array
* `tail(array)`: Returns all but the first element in an array given an array
* `middle(array)`: Returns the middle one (if array has an odd number of elements) or two (if array has an even number of elements) elements in an array given an array
* `eqObjects`: Returns true if two objects are equal
* `eqArrays`: Returns true if two arrays are equal
* `assertArraysEqual`: Prints to the console if two given arrays are equal or not
* `assertEqual`:  Prints to the console if two given elements are equal or not
* `assertObjectsEqual`:  Prints to the console if two given objects are equal or not
* `countOnly`: Returns an object with the number of items in an object
* `countLetters`: Returns an object with the number of times a letter appears in a string
* `findKey`: Returns the first key in an object whose valuse pass a criteria
* `findKeyByValue`: Returns
* `flatten(array)`: Returns a non-nested array of elements given an array of elements
* `letterPositions`: Returns an object with the letters appearing in a string and their positions in a givenstring
* `map`: Returns a resulted array given a function and array
* `takeUntil`: Returns an array with elements from an array that pass a criteria until one fails
* `without`: Returns an array of elements minus the elements from a second array