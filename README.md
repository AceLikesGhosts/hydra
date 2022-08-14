# Hydra

a simple, fast, and flexible way to modify your Javascript objects.

## Installation

```bash
# add or something, upload to npm
# or something idk man
# kill me
```

## Usage

```ts
import hydra from '@AceLikesGhosts/hydra';
import type { IExportOBJ } from '@AceLikesGhosts/hydra';

const obj: any = {
  foo: 'bar', 
  baz: 'qux'
};

const newObj: IExportOBJ = hydra(obj)
  .set('baz', 'quux')
  .set('foo', 'bar')
  .value();

// The base OBJ and newOBJ are not the same object.
console.log(newObj); // { foo: 'bar', baz: 'quux' }
console.log(obj); // { foo: 'bar', baz: 'quux' }

// To make them the same object use the .apply() method, which will
// make the base object equal to the new object.

hydra(obj)
  .set('baz', 'quux')
  .set('foo', 'bar')
  .apply()
  .value(); // Value is required to get the new object / the object hydra is working on.

console.log(obj); // { foo: 'bar', baz: 'quux' }
console.log(newObj); // { foo: 'bar', baz: 'quux' }
```

Hydra also implements a basic way to create a new object.

```ts
import hydra from '@AceLikesGhosts/hydra';
import type { IExportOBJ } from '@AceLikesGhosts/hydra';

const hydr = (hydra() as IExport).create();
hydr.set('foo', 'bar');
hydr.set('baz', 'qux');

console.log(hydr.value()); // { foo: 'bar', baz: 'qux' }
```

Hydra also implements a basic utility function for callbacks.

```ts
import hydra from '@AceLikesGhosts/hydra';
import type { IExportOBJ } from '@AceLikesGhosts/hydra';

// Our basic callback, which returns null for error
// and 0 for arg0
function callback(stuff: any): any[]
{
  // Do whatever you need to do here.
  return [null, 0];
}

hydra().callback(callback, (err: unknown, arg0: number) =>
{
  // Do whatever you need to do here.
  console.log(arg0); // 0
});
```