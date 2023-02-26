# typed-helpers

[![npm](https://img.shields.io/npm/v/typed-helpers.svg)](https://www.npmjs.com/package/typed-helpers)

Typed utils for TypeScript codebases.

## Installation

```bash
npm i typed-helpers --save
```

## Usage

### `typedObject.keys()`

```typescript
import { typedObject } from 'typed-helpers';

const planets = {
  earth: 'Earth',
  mars: 'Mars',
  jupiter: 'Jupiter',
} as const;

const nativeKeys = Object.keys(planets);
// string[]

const typedKeys = typedObject.keys(planets);
// ("earth" | "mars" | "jupiter")[]
```

### `typedObject.entries()`

```typescript
import { typedObject } from 'typed-helpers';

const planets = {
  earth: 'Earth',
  mars: 'Mars',
  jupiter: 'Jupiter',
} as const;

const nativeEntries = Object.entries(planets);
// [string, "Earth" | "Mars" | "Jupiter"][]

const typedEntries = typedObject.entries(planets);
// ["earth" | "mars" | "jupiter", "Earth" | "Mars" | "Jupiter"][]
```

## License

Open source under the terms of the [MIT License](/LICENSE).
