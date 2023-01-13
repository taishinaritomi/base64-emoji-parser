<div>
  <div align="center">
    <br />
    <h2>Base64 Emoji Parser</h2>
    <br />
    <hr />
  </div>
  <br />
  <div align="center">
    <a href='https://www.npmjs.com/package/base64-emoji-parser'>
      <img src='https://img.shields.io/npm/v/base64-emoji-parser?style=for-the-badge'>
    </a>
    <a href='https://github.com/taishinaritomi/base64-emoji-parser/blob/main/LICENSE'>
      <img src='https://img.shields.io/github/license/taishinaritomi/base64-emoji-parser?style=for-the-badge'>
    </a>
    <a href='https://bundlephobia.com/package/base64-emoji-parser'>
      <img src='https://img.shields.io/bundlephobia/minzip/base64-emoji-parser?style=for-the-badge'>
    </a>
    <a href='https://github.com/microsoft/typescript'>
      <img src='https://img.shields.io/npm/types/base64-emoji-parser?style=for-the-badge'>
    </a>
  </div>
  <br />
</div>
## Install

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
//😢😠😤🤪😄🥶🤩😉🤯🥺🤨🤣😒😫🤥🤥
```

### Convert Emoji to Base64

Emoji can also be set to base64

```ts
import { emojiToBase64 } from 'base64-emoji-parser';

const emojiString = '😢😠😤🤪😄🥶🤩😉🤯🥺🤨🤣😒😫🤥🤥';

const base64Parsed = emojiToBase64(base64String);

console.log(base64Parsed);
//TWVzc2FnZSAhIQ==
```

### Custom Emoji pattern

It is also possible to convert with the Emoji you want to use

```ts
import {
  base64ToEmoji,
  emojiToBase64,
  EmojiPattern,
} from 'base64-emoji-parser';

const base64String = 'TWVzc2FnZSAhIQ==';

const customEmojiPatten: EmojiPattern = {
  T: '🐶',
  W: '🐱',
  V: '🦄',
  z: '🐴',
};

const emojiParsed = base64ToEmoji(base64String, customEmojiPatten);
console.log(emojiParsed);
//🐶🐱🦄🐴😄🥶🤩😉🤯🥺🤨🤣😒😫🤥🤥

const base64Parsed = emojiToBase64(emojiParsed, customEmojiPatten);
console.log(base64Parsed);
//TWVzc2FnZSAhIQ==
```

# Author

[Taishi Naritomi](https://github.com/taishinaritomi)

# License

[MIT](https://github.com/taishinaritomi/base64-emoji-parser/blob/main/LICENSE)
