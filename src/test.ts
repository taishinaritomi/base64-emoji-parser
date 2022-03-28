import { base64ToEmoji, emojiToBase64 } from './index';

const alphabet =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/+=-_';

function test(str = alphabet) {
  const emoji = base64ToEmoji(str);
  const base64 = emojiToBase64(emoji);
  if (str === base64) {
    console.log('success');
  } else {
    console.error('error');
  }
}
test();
