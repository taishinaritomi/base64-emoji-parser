import type { EmojiPattern } from './emojiPattern';
import { emojiPattern } from './emojiPattern';

export const base64ToEmoji = (
  str: string,
  pattern: EmojiPattern = emojiPattern,
) => {
  const patterned = { ...emojiPattern, ...pattern };
  for (const [key, value] of Object.entries(patterned)) {
    str = str.split(key).join(value);
  }
  return str;
};
