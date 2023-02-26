import * as typedObject from './typedObject';

const planets = {
  earth: 'Earth',
  mars: 'Mars',
  jupiter: 'Jupiter',
} as const;

/**
 * Keys Type Check
 */

const originalKeys = Object.keys(planets);
const typedKeys = typedObject.keys(planets);

// @ts-expect-no-error
const originalKey: (typeof originalKeys)[number] = 'potato';

// @ts-expect-error
const typedKey: (typeof typedKeys)[number] = 'potato';

/**
 * Entries Type Check
 */

const originalEntries = Object.entries(planets);
const typedEntries = typedObject.entries(planets);

// @ts-expect-no-error
const originalEntry: (typeof originalEntries)[number][0] = 'potato';

// @ts-expect-error
const typedEntry: (typeof typedEntries)[number][0] = 'potato';
