# FatihAI Email Verification SDK

[![npm](https://img.shields.io/badge/npm-fatihai--email--verify-red)](https://www.npmjs.com/package/fatihai-email-verify)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Real-time Email Validation API - Fast, accurate, affordable.

## Features

- ✅ Real-time validation (<100ms)
- ✅ Syntax, domain, MX checks
- ✅ Disposable email detection
- ✅ 99.9% accuracy
- ✅ Webhook support
- ✅ Bulk verification

## Pricing

| Plan | Credits/mo | Price |
|------|------------|-------|
| Starter | 1,000 | $29/mo |
| Growth | 10,000 | $59/mo |
| Business | 50,000 | $99/mo |

## Quick Start

### JavaScript

```javascript
const axios = require('axios');

async function verifyEmail(email) {
  const response = await axios.post(
    'https://fatihai.app/api/v1/email/verify',
    { email },
    { headers: { 'X-API-Key': process.env.FATIHAI_API_KEY } }
  );
  return response.data;
}

// Usage
const result = await verifyEmail('test@example.com');
console.log(result.valid ? 'Valid!' : 'Invalid');
```

### Python

```python
import requests
import os

def verify_email(email: str) -> dict:
    response = requests.post(
        'https://fatihai.app/api/v1/email/verify',
        json={'email': email},
        headers={'X-API-Key': os.environ['FATIHAI_API_KEY']}
    )
    return response.json()

# Usage
result = verify_email('test@example.com')
print('Valid' if result['valid'] else 'Invalid')
```

### cURL

```bash
curl -X POST https://fatihai.app/api/v1/email/verify \
  -H "X-API-Key: your_api_key" \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'
```

## Response

```json
{
  "valid": true,
  "email": "test@example.com",
  "checks": {
    "syntax": true,
    "domain": true,
    "mx": true,
    "disposable": false
  }
}
```

## Links

- 🌐 [Website](https://fatihai.app/tools/email-verify)
- 📦 [RapidAPI](https://rapidapi.com/fatihai/api/fatihai-email-verification)
- 📧 [Support](mailto:support@fatihai.app)

---

Made with ❤️ by [FatihAI](https://fatihai.app) | Updated: 2026-02-02
