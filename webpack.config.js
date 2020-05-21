const path = require('path');

module.exports = {
    "entry": "./proto/src/index.js",
    "mode": 'development',
    "output": {
        "filename": "script.min.js",
        "path": path.resolve(__dirname, 'proto/build')
    }
};