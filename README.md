# Hydra

a simple, fast, and flexible way to modify your Javascript objects.

## Installation

```bash
# add or something, upload to npm
# or something idk man
# kill me
```

## Usage

```javascript
const hydra = require('hydra');

const obj = {
  foo: 'bar',
  baz: 'qux'
};

const newObj = hydra()
  .set('foo', 'bar')
  .set('baz', 'qux')
  .value();

// New object and original object are the same.
console.log(newObj === obj); // true

const tempObj = hydra(obj)
  .set('foo', 'qux')
  .set('baz', 'bar')
  .value();

// Original object is not modified by the temporary object.
console.log(obj); // { foo: 'bar', baz: 'qux' }
console.log(tempObj); // { foo: 'qux', baz: 'bar' }

// If you want it to be modified, use the `apply` method.
hydra(obj)
  .set('foo', 'qux')
  .set('baz', 'bar')
  .apply()
  .value();

console.log(obj); // { foo: 'qux', baz: 'bar' }
```

We also implement an easy way to use hydra with callbacks.

```javascript
const hydra = require('hydra');

function callback(stuff) {
    // do whatever ...
    return [null, 0];
}

// Callback is a function on the callback object, which will return the values of the callback.
hydra().callback(callback, (err, result) => {
    // do whatever...

    if(err) 
        // do whatever...

    // do whatever...
});
```