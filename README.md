# Collection of React UI components for Kamatech projects.

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

You can clone this repo and modify the components.

It is a collection of React UI components for Kamatech projects.

[**Live Demo**](https://kamatech-ir.github.io/kama-react-ui-kit/)

## Installation:

```bash
npm install kama-react-ui-kit
```

or

```bash
yarn add kama-react-ui-kit
```

## Usage :

Add `KamaSample` to your component:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { KamaSample } from 'kama-react-ui-kit'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <div>
            <h2>Default counter</h2>
            <KamaSample />
        </div>
        <hr />
        <div>
            <h2>Counter with predefined value</h2>
            <KamaSample defaultValue={5} />
        </div>
    </React.StrictMode>,
)

```

[npm-url]: https://www.npmjs.com/package/kama-react-ui-kit
[npm-image]: https://img.shields.io/npm/v/kama-react-ui-kit
[github-license]: https://img.shields.io/github/license/kamatech-ir/kama-react-ui-kit
[github-license-url]: https://github.com/kamatech-ir/kama-react-ui-kit/blob/master/LICENSE
[github-build]: https://github.com/kamatech-ir/kama-react-ui-kit/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/kamatech-ir/kama-react-ui-kit/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/kama-react-ui-kit