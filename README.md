# FatihAI Email Verification

Fast and accurate email verification API client for Node.js.

[![npm](https://img.shields.io/npm/v/fatihai-email-verify)](https://www.npmjs.com/package/fatihai-email-verify)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- ✅ Real-time validation (<100ms)
- ✅ Syntax, domain, MX checks
- ✅ Disposable email detection
- ✅ 99.9% accuracy
- ✅ TypeScript support

## Installation

```bash
npm install fatihai-email-verify
```

## Quick Start

```javascript
const FatihAI = require('fatihai-email-verify');

const client = new FatihAI('your_api_key');

// Verify single email
const result = await client.verify('test@example.com');
console.log(result);
// { valid: true, email: '...', checks: { syntax: true, domain: true, mx: true, disposable: false } }

// Simple boolean check
const isValid = await client.isValid('test@example.com');
console.log(isValid); // true or false

// Check if disposable
const isDisposable = await client.isDisposable('temp@mailinator.com');
console.log(isDisposable); // true
```

## Pricing

| Plan | Verifications/month | Price |
|------|---------------------|-------|
| Starter | 1,000 | $29/mo |
| Growth | 10,000 | $59/mo |
| Business | 50,000 | $99/mo |

## Get API Key

Sign up at [fatihai.app](https://fatihai.app/register)

## Links

- 🌐 [Website](https://fatihai.app)
- 📦 [RapidAPI](https://rapidapi.com/fatihai/api/fatihai-email-verification)
- 📧 [Support](mailto:support@fatihai.app)

## License

MIT
