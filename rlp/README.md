# SYNOPSIS

[![NPM Package](https://img.shields.io/npm/v/rlp.svg)](https://www.npmjs.org/package/rlp)
[Recursive Length](https://github.com/ethereum/wiki/wiki/RLP) Prefix Encoding for node.js.

## USAGE

```javascript
var RLP = require('rlp')
var assert = require('assert')

var nestedList = [[], [[]], [[], [[]]]]
var encoded = RLP.encode(nestedList)
var decoded = RLP.decode(encoded)
assert.deepEqual(nestedList, decoded)
```

# EthereumJS

See our organizational [documentation](https://ethereumjs.readthedocs.io) for an introduction to `EthereumJS` as well as information on current standards and best practices.

If you want to join for work or do improvements on the libraries have a look at our [contribution guidelines](https://ethereumjs.readthedocs.io/en/latest/contributing.html).
