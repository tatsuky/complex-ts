# complex-ts
A TypeScript library to represent complex numbers.

## Getting Started
```ts
import { Complex } from './complex';
```

```ts
// Initialize with an Euclidean coordinate
let c1 = new Complex({real: 3, imag: -2.55});

// Initialize with a polar coordinate
let c2 = new Complex({radius: 3, arg: Math.PI / 4});
```

After initialization, `real`, `imag`, `radius` and `arg` property can be accessed publicly.

## Updating Values
```ts
let c1 = new Complex({real: 3, imag: -2.55});

console.log(c1.toString()); // 3 - i2.55

// Update values
c1.real = 1;
c1.imag = 3;

console.log(c1.toString()); // 1 + i3
```

For example, if you change the `real` and `imag` property, the corresponding values for `radius` and `arg` will be computed and assigned immediately. Same applies for `radius` and `arg` (or even just one of which).

## Basic Arithmetics
Note that in the below examples `c1` and `c2` are not affected by the arithmetics.

### Sum
```ts
let c3 = c1.add(c2);
```

### Subtraction
```ts
let c3 = c1.subtract(c2);
```

### Multiplication
```ts
let c3 = c1.multiply(c2);
```

### Division
```ts
let c3 = c1.divide(c2);
```

## Other Arithmetics
### Conjugation
```ts
let c2 = c1.conjugate();
```

### Absolute Value
```ts
let c2 = c1.absolute();
```

### Swapping
```ts
let c1 = new Complex({real: 1.5, imag: -3});
let c2 = c1.swap(); // Represents -3 + i1.5
```

## Duplication
```ts
let c2 = c1.copy();
```
This generates a new Complex object with the same `real` and `imag` properties.

## Stringify
```ts
let c = new Complex({real: 1.5, imag: -3});
c.toString(); // '1.5 - i3'

// You can change the imaginary unit.
// Only 'i' and 'j' are allowed. (The default is 'i')
c.toString('j'); // '1.5 - j3'
```

## Making an Array
```ts
let c = new Complex({real: 1.5, imag: -3});
let array = c.toArray(); // [1.5, -3]
```

## Liscense
MIT
