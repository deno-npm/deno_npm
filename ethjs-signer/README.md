## ethjs-signer

<div>
  <!-- NPM Version -->
  <a href="https://www.npmjs.org/package/ethjs-signer">
    <img src="http://img.shields.io/npm/v/ethjs-signer.svg"
    alt="NPM version" />
  </a>
</div>

## Usage

```js
const HttpProvider = require('ethjs-provider-http');
const Eth = require('ethjs-query');
const eth = new Eth(new HttpProvider('http://localhost:8545'));
const sign = require('ethjs-signer').sign;
const BN = require('bignumber.js');

const address = '0x0F6af8F8D7AAD198a7607C96fb74Ffa02C5eD86B';
const privateKey = '0xecbcd9838f7f2afa6e809df8d7cdae69aa5dfc14d563ee98e97effd3f6a652f2';

eth.getTransactionCount(address).then((nonce) => {
  eth.sendRawTransaction(sign({
    to: '0xce31a19193d4b23f4e9d6163d7247243bAF801c3',
    value: 300000,
    gas: new BN('43092000'),
    // when sending a raw transactions it's necessary to set the gas price, currently 0.00000002 ETH
    gasPrice: new BN('20000000000'),
    nonce: nonce,
  }, privateKey)).then((txHash) => {
    console.log('Transaction Hash', txHash);
  });
});
```

Note, that address and private key are a valid address and private key. Only use this example address for local testing and setup. You will loose your Ether if you send it to this address.

## Licence

This project is licensed under the MIT license, Copyright (c) 2016 Nick Dodson. For more information see LICENSE.md.

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

## TODO
- [ ] Bring back TestRPC test case
- [ ] Bring back ethereumjs-tx test case