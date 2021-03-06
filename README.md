# Base64 Emoji Parser

## Installation 

```sh
yarn add base64-emoji-parser
# or
npm i base64-emoji-parser
```

## Examples

### Convert Base64 to Emoji
Base64 strings can be easily converted to Emoji(pictograms)
```ts
import { base64ToEmoji } from 'base64-emoji-parser';

const base64String = 'TWVzc2FnZSAhIQ==';

const emojiParsed = base64ToEmoji(base64String);

console.log(emojiParsed); 
//π’π π€π€ͺππ₯Άπ€©ππ€―π₯Ίπ€¨π€£ππ«π€₯π€₯
```

### Convert Emoji to Base64
Emoji can also be set to base64
```ts
import { emojiToBase64 } from 'base64-emoji-parser';

const emojiString = 'π’π π€π€ͺππ₯Άπ€©ππ€―π₯Ίπ€¨π€£ππ«π€₯π€₯';

const base64Parsed = emojiToBase64(base64String);

console.log(base64Parsed);
//TWVzc2FnZSAhIQ==
```

### Custom Emoji pattern
It is also possible to convert with the Emoji you want to use
```ts
import { base64ToEmoji, emojiToBase64, EmojiPattern } from 'base64-emoji-parser';

const base64String = "TWVzc2FnZSAhIQ==";

const customEmojiPatten:EmojiPattern = {
  T: "πΆ",
  W: "π±",
  V: "π¦",
  z: "π΄",
}

const emojiParsed = base64ToEmoji(base64String,customEmojiPatten);
console.log(emojiParsed);
//πΆπ±π¦π΄ππ₯Άπ€©ππ€―π₯Ίπ€¨π€£ππ«π€₯π€₯

const base64Parsed = emojiToBase64(emojiParsed,customEmojiPatten);
console.log(base64Parsed);
//TWVzc2FnZSAhIQ==
```

## License
MIT
