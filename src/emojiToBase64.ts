import { EmojiPattern, emojiPattern } from './emojiPattern';

const emojiToBase64 = (
  str: string,
  pattern: EmojiPattern = emojiPattern,
) => {
  const patterned = { ...emojiPattern, ...pattern };
  for (const [key, value] of Object.entries(patterned)) {
    str = str.split(value).join(key);
  }
  return str;
};
export default emojiToBase64;
