## ethjs-account

<div>
  <!-- NPM Version -->
  <a href="https://www.npmjs.org/package/ethjs-account">
    <img src="http://img.shields.io/npm/v/ethjs-account.svg"
    alt="NPM version" />
  </a>
</div>

A simple Ethereum account utility module.

Warning: if using with React Native, please use a pre-build distribution (i.e. npm run buld -> /dist/..). We will be switching to the Sepcc256k1 module which should resolve this issue.

## Usage

```js
const generate = require('ethjs-account').generate;

console.log(generate('892h@fsdf11ks8sk^2h8s8shfs.jk39hsoi@hohskd'));

/* result
{
  address: '0x...',
  privateKey: '0x...',
  publicKey: '0x....',
}
*/
```

Note, the address exported is the mix case checksum.

## About

This module is meant to aid in the management and generation of Ethereum account keys. It is still pending review. Entropy generation is handled by a combination of sha3 hashing, crypto random bytes and provided entropy salt. It is up the developer to ensure good entropy is generated for the accounts.

This module contains methods to convert private keys into Buffer public keys, and Buffer public keys into Ethereum addresses. The sha3 method is exposed as it is needed for key generation.

See the `user-guide` for more details on good entropy generation, and other module information.

## Licence

This project is licensed under the MIT license, Copyright (c) 2016 Nick Dodson/2014 Richard Moore. For more information see LICENSE.md.

```
The MIT License (MIT)
 
Copyright (c) 2016 Nick Dodson
Copyright (c) 2014 Richard Moore
 
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

## Original Port Checksum/getAddress Author

Richard Moore <me@ricmoo.com>

## TODO

- [ ] Brink back tests for ethjs comparison
