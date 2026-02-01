/**
 * FatihAI Email Verification API Client
 * https://fatihai.app/tools/email-verify
 */

const https = require('https');

class FatihAIEmailVerify {
  constructor(apiKey) {
    if (!apiKey) {
      throw new Error('API key is required. Get yours at https://fatihai.app');
    }
    this.apiKey = apiKey;
    this.baseUrl = 'fatihai.app';
  }

  /**
   * Verify a single email address
   * @param {string} email - Email to verify
   * @returns {Promise<Object>} Verification result
   */
  async verify(email) {
    return new Promise((resolve, reject) => {
      const data = JSON.stringify({ email });

      const options = {
        hostname: this.baseUrl,
        port: 443,
        path: '/api/v1/email/verify',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': this.apiKey,
          'Content-Length': data.length
        }
      };

      const req = https.request(options, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          try {
            const result = JSON.parse(body);
            resolve(result);
          } catch (e) {
            reject(new Error('Invalid response from API'));
          }
        });
      });

      req.on('error', reject);
      req.write(data);
      req.end();
    });
  }

  /**
   * Verify multiple emails
   * @param {string[]} emails - Array of emails to verify
   * @returns {Promise<Object[]>} Array of verification results
   */
  async verifyBulk(emails) {
    const results = [];
    for (const email of emails) {
      try {
        const result = await this.verify(email);
        results.push(result);
      } catch (error) {
        results.push({ email, error: error.message });
      }
    }
    return results;
  }

  /**
   * Check if email is valid (simple boolean check)
   * @param {string} email - Email to check
   * @returns {Promise<boolean>} True if valid
   */
  async isValid(email) {
    const result = await this.verify(email);
    return result.valid === true;
  }

  /**
   * Check if email is disposable
   * @param {string} email - Email to check
   * @returns {Promise<boolean>} True if disposable
   */
  async isDisposable(email) {
    const result = await this.verify(email);
    return result.checks?.disposable === true;
  }
}

module.exports = FatihAIEmailVerify;
module.exports.default = FatihAIEmailVerify;
