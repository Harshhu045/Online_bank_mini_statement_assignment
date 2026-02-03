import { accounts } from "../store/accounts";
import {
  ensureAccountExists,
  ensurePositiveAmount,
  ensureSufficientBalance,
  ensureKYC,
} from "./validation";

export function createAccount(
  accountNo: string,
  holderName: string,
  balance: number,
  isKYCVerified: boolean
) {
  if (accounts[accountNo]) {
    throw new Error("Account number already exists");
  }

  if (balance < 0) {
    throw new Error("Initial balance cannot be negative");
  }

  accounts[accountNo] = {
    accountNo,
    holderName,
    balance,
    isKYCVerified,
  };

  return "Account created successfully";
}

export function deposit(accountNo: string, amount: number) {
  const account = accounts[accountNo];

  ensureAccountExists(account, accountNo);
  ensurePositiveAmount(amount);

  account!.balance += amount;
  return `₹${amount} deposited successfully`;
}

export function withdraw(accountNo: string, amount: number) {
  const account = accounts[accountNo];

  ensureAccountExists(account, accountNo);
  ensurePositiveAmount(amount);
  ensureSufficientBalance(account!, amount);

  account!.balance -= amount;
  return `₹${amount} withdrawn successfully`;
}

export function transferMoney(
  senderAccountNo: string,
  receiverAccountNo: string,
  amount: number
) {
  if (senderAccountNo === receiverAccountNo) {
    throw new Error("Sender and receiver cannot be the same");
  }

  const sender = accounts[senderAccountNo];
  const receiver = accounts[receiverAccountNo];

  ensureAccountExists(sender, senderAccountNo);
  ensureAccountExists(receiver, receiverAccountNo);
  ensurePositiveAmount(amount);
  ensureKYC(sender!);
  ensureSufficientBalance(sender!, amount);

  sender!.balance -= amount;
  receiver!.balance += amount;

  return `₹${amount} transferred successfully`;
}
