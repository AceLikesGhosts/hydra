> **Another dead project that I gave up on. Please ignore this, it won't be updated.**


# Hydra

a simple, fast, and flexible way to modify your JavaScript objects.

## Installation

```bash
npm i @acelikesghosts/hydra
```

## Examples

```ts
import hydra from 'hydra';

// False tells Hydra that we have not passed an object 
// which will give us back our proper interface.
hydra<false>()
    .create()
    .set('thing', 'thing2')
    // { thing: 'thing2' }
    .value();

let value: Record<string, unknown>;
const hydr = hydra<true>(value)
    .set('thing', 'thing2');

const hydrVal = hydr.value();

// value = undefined
// hydrVal = { thing: thing'2 }
// To set the object we pass to the object Hydra has modified
// run .apply();

// Returns HydraObject, you can continue to dot chain.
// value is now equal to { thing: 'thing2' }, which was what
// we set previously
hydr.apply(); 

// true
value === hydr.value()
```
