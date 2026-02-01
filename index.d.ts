declare class FatihAIEmailVerify {
  constructor(apiKey: string);
  
  verify(email: string): Promise<{
    valid: boolean;
    email: string;
    checks: {
      syntax: boolean;
      domain: boolean;
      mx: boolean;
      disposable: boolean;
    };
  }>;
  
  verifyBulk(emails: string[]): Promise<Array<{
    valid?: boolean;
    email: string;
    error?: string;
  }>>;
  
  isValid(email: string): Promise<boolean>;
  isDisposable(email: string): Promise<boolean>;
}

export = FatihAIEmailVerify;
