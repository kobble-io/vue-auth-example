![Vue App example with Kobble Authentication for SPA](https://github.com/kobble-io/vue-auth-example/blob/main/.readme/banner.png?raw=true)

[![License](https://img.shields.io/:license-mit-blue.svg?style=flat)](https://opensource.org/licenses/MIT)
![Status](https://img.shields.io/:status-stable-green.svg?style=flat)


This template will get you started developing with Vue 3 in Vite with Kobble SDK.

It uses vue-router, pinia and [@kobbleio/auth-spa-js SDK](https://github.com/kobble-io/auth-spa-js).


## Getting Started

### Installation

Using [npm](https://npmjs.org) in your project directory run the following command:

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Configure Kobble

Create an **Application** in your [Kobble Dashboard](https://app.kobble.io/p/applications).

Make sure your application can handle your localhost callback URL (see section below).

Note the **Client ID** and your **Portal Domain** values.

### Update environment

Copy the `.env.example` file to `.env` and update the values with your Kobble Application details.

```bash
cp .env.example > .env
```

Example: 
```
VITE_KOBBLE_DOMAIN=http://localhost:3003
VITE_KOBBLE_CLIENT_ID=cluipasqr0000k8bzevczqy23
VITE_KOBBLE_REDIRECT_URI=http://localhost:4000/callback
```

### Raise an issue

To provide feedback or report a bug, please [raise an issue on our issue tracker](https://github.com/kobble-io/vue-auth-example/issues).

___

## What is Kobble?

<p align="center">
  <picture>
    <img alt="Kobble Logo" src="https://github.com/kobble-io/vue-auth-example/blob/main/.readme/logo.png?raw=true" width="150">
  </picture>
</p>
<p align="center">
 Kobble is the one-stop solution for monetizing modern SaaS and APIs. It allows to add authentication, analytics and payment to any app in under 10 minutes.
</p>

