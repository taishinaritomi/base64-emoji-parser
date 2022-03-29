import { base64ToEmoji, emojiToBase64, emojiPattern } from '../src/index';

const alphabet =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_/+=-';

function emojiParserCheck(str = alphabet) {
  const emoji = base64ToEmoji(str);
  const base64 = emojiToBase64(emoji);
  if (str === base64) {
    return 'success emojiParserCheck';
  } else {
    throw new Error("emojiParserCheck");
  }
}

function duplicateCheck(len = Object.values(emojiPattern)) {
  var set = new Set(len);
  if(set.size === len.length) {
    return 'success duplicateCheck';
  } else {
    throw new Error("duplicateCheck");
  }
}

function allAlphabet(len = Object.keys(emojiPattern)) {
  if(len.join("") === alphabet) {
    return 'success allAlphabets';
  } else {
    throw new Error("allAlphabets");
  }
}

console.log(emojiParserCheck());
console.log(duplicateCheck());
console.log(allAlphabet());
