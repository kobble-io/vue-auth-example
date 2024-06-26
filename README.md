![Vue App example with Kobble Authentication for SPA](https://github.com/kobble-io/vue-auth-example/blob/main/.readme/banner-with-screen.png?raw=true)

[![License](https://img.shields.io/:license-mit-blue.svg?style=flat)](https://opensource.org/licenses/MIT)
![Status](https://img.shields.io/:status-stable-green.svg?style=flat)


This template will get you started developing with Vue 3 in Vite with Kobble SDK.

It uses vue-router, pinia and [@kobbleio/auth-spa-js SDK](https://github.com/kobble-io/auth-spa-js).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkobble-io%2Fvue-auth-example&env=VITE_KOBBLE_DOMAIN,VITE_KOBBLE_CLIENT_ID,VITE_KOBBLE_REDIRECT_URI&envDescription=These%20variables%20can%20be%20obtained%20from%20your%20dashboard%20at%20Kobble.io%20after%20configuring%20your%20new%20OAuth%20Application.&envLink=https%3A%2F%2Fdocs.kobble.io%2Fproduct%2Fauthentication%2Foverview&demo-title=Vue%20Auth%20Example&demo-description=Example%20Vue%203%20application%20including%20Kobble%20Authentication%20SDK%2C%20Pinia%2C%20vue-router%20and%20Tailwind.&demo-url=https%3A%2F%2Fvue-auth-example.vercel.app&demo-image=https%3A%2F%2Fgithub.com%2Fkobble-io%2Fvue-auth-example%2Fblob%2Fmain%2F.readme%2Fscreenshot.png%3Fraw%3Dtrue)
_[![Preview](https://github.com/kobble-io/vue-auth-example/blob/main/.readme/preview-btn.svg?raw=true)](https://vue-auth-example.vercel.app)_

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

## What is Kobble?

<p align="center">
  <picture>
    <img alt="Kobble Logo" src="https://github.com/kobble-io/vue-auth-example/blob/main/.readme/logo.png?raw=true" width="150">
  </picture>
</p>
<p align="center">
 Kobble is the one-stop solution for monetizing modern SaaS and APIs. It allows to add authentication, analytics and payment to any app in under 10 minutes.
</p>

