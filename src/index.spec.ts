import { describe, it, expect } from 'vitest';
import { base64ToEmoji, emojiToBase64, emojiPattern } from './index';

const alphabet =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_/+=-';

const allAlphabet = Object.keys(emojiPattern);
const allEmoji = Object.values(emojiPattern);

describe('Base4 Emoji Parser', () => {
  it('parser', () => {
    const emoji = base64ToEmoji(alphabet);
    const base64 = emojiToBase64(emoji);
    expect(base64).toEqual(alphabet);
  });

  it('unique', () => {
    expect(new Set(allEmoji).size).toEqual(allEmoji.length);
  });

  it('unique', () => {
    expect(allAlphabet.join('')).toEqual(alphabet);
  });
});
