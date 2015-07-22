# VG.no ESLint Config

[![Version npm](http://img.shields.io/npm/v/eslint-config-vgno.svg?style=flat-square)](http://browsenpm.org/package/eslint-config-vgno)[![Build Status](http://img.shields.io/travis/vgno/eslint-config-vgno/master.svg?style=flat-square)](https://travis-ci.org/vgno/eslint-config-vgno)

ESLint configuration for VG.no coding standard

## How to use it

First, install the npm package:

```bash
npm install --save-dev eslint-config-vgno
```

Then add the `extends` option to your `.eslintrc`:

```json
{
    "extends": "vgno"
}
```

Alternatively, you can specify this in your package.json:

```json
{
    "name": "...",
    "other": "options",

    "eslintConfig": {
        "extends": "vgno"
    }
}
```

You can override specific settings by specifying them as normal. See <http://eslint.org/docs/developer-guide/shareable-configs> for more details.
