export type BankAccount = {
  accountNo: string;
  holderName: string;
  balance: number;
  isKYCVerified: boolean;
};

export const accounts: Record<string, BankAccount> = {};
