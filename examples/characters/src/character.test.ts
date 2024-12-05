import { describe, it, expect } from 'vitest';
import { Character } from './character.js';

describe('Character', () => {
  let character;
  beforeEach(() => {
    character = new Character('Jhon', 'Deo', 'king');
  }); // you can do it, but you can just write dump code as previous, but there are usecases where we can do it

  it('should create a character with a first name, last name, and role', () => {
    expect(character).toEqual({
      firstName: 'Jhon',
      lastName: 'Deo',
      role: 'king',
      wisdom: expect.any(Number), // we can also do that
      lastModified: expect.any(Date), // can also do that
      ...character, // also do that
    });
  });

  // it('should create a character with a first name, last name, and role', () => {
  //   expect(character).toEqual(
  //     expect.objectContaining({
  //       firstName: 'Jhon',
  //       lastName: 'Deo',
  //       role: 'king',it('should create a character with a first name, last name, and role', () => {
  //   expect(character).toEqual(
  //     expect.objectContaining({
  //       firstName: 'Jhon',
  //       lastName: 'Deo',
  //       role: 'king',
  //     }),
  //   );
  // });
  //     }),
  //   );
  // }); // also do that

  // the more you mock, the more you are divorcing yourself from reality

  it('should allow you to increase the level', () => {
    const prevLevel = character.level;
    character.levelUp();
    expect(character).toEqual({
      level: prevLevel + 1,
      ...character,
    });
  });

  it('should update the last modified date when leveling up', () => {
    const lastModified = character.lastModified;
    character.levelUp();
    expect(character).toEqual({
      lastModified: !lastModified,
      ...character,
    });
  });

  // it('should use async/await for async code', async () => {
  //   const code = await addAsync(2, 5);
  //   expect(code).toBe(7);
  // }); // testing a sync code
});
