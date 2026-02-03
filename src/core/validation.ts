import type { BankAccount } from "../store/accounts";

export function ensureAccountExists(
  account: BankAccount | undefined,
  accountNo: string
) {
  if (!account) {
    throw new Error(`Account ${accountNo} does not exist`);
  }
}

export function ensurePositiveAmount(amount: number) {
  if (amount <= 0) {
    throw new Error("Amount must be greater than zero");
  }
}

export function ensureSufficientBalance(
  account: BankAccount,
  amount: number
) {
  if (account.balance < amount) {
    throw new Error("Insufficient balance");
  }
}

export function ensureKYC(account: BankAccount) {
  if (!account.isKYCVerified) {
    throw new Error("Sender must be KYC verified to transfer money");
  }
}
