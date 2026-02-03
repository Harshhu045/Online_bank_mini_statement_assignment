🏦 Online Bank Mini System
📌 Project Overview

The Online Bank Mini System is a production-quality frontend application that simulates core banking operations such as account creation, deposits, withdrawals, and money transfers.

The project is designed to demonstrate strong validation logic, correct transaction handling, clean UI/UX, and a modular, scalable architecture, while intentionally avoiding unnecessary backend complexity as per the assignment scope.

The application is fully deployed and publicly accessible.

🎯 Objective

This project was built to evaluate:

Validation and business logic correctness

Transaction handling and error management

Clean, usable, multi-page UI

Code structure and separation of concerns

Readiness for real-world extension

🧱 Tech Stack

Frontend: React + TypeScript

Styling: Tailwind CSS

State Management: In-memory store (no database)

Routing: React Router

Deployment: Vercel

Version Control: GitHub

📦 Data Model
type BankAccount = {
accountNo: string;
holderName: string;
balance: number;
isKYCVerified: boolean;
};

✅ Functional Features

1. Create Account

Create a new bank account

Account number must be unique

Initial balance cannot be negative

KYC status selectable during creation

2. Deposit Money

Deposit only into existing accounts

Amount must be greater than zero

Balance updates correctly

Success or error feedback shown to user

3. Withdraw Money

Account must exist

Withdrawal amount must be greater than zero

Prevents overdraft

Proper validation messages displayed

4. Transfer Money

Function signature:

transferMoney(senderAccountNo, receiverAccountNo, amount)

Mandatory Validations:

Sender account exists

Receiver account exists

Sender must be KYC verified

Sender must have sufficient balance

Transfer amount must be greater than zero

Sender and receiver cannot be the same

All validation failures return clear, human-readable error messages.

🖥️ UI Features

Multi-page dashboard layout

Sidebar navigation

Dedicated pages for:

Account creation

Deposit

Withdraw

Transfer

Account listing screen with:

Account number

Holder name

Balance

KYC status

Real-time output/logs panel

Toast notifications for success and errors

UI is designed to be clean, usable, and professional, similar to an internal banking dashboard.

🧠 Architecture Overview
src/
├─ core/ // Business logic & validations
│ ├─ bank.ts
│ └─ validations.ts
│
├─ store/ // In-memory state
│ ├─ accounts.ts
│ ├─ logs.tsx
│ └─ toast.tsx
│
├─ components/ // Reusable UI components
│
├─ pages/ // Route-level screens
│
├─ App.tsx
└─ main.tsx

Key Design Decisions

❌ No business logic inside UI components

✅ All validations centralized in core/

✅ UI and logic cleanly decoupled

✅ Backend-ready architecture

⚠️ Error Handling

All invalid inputs are handled gracefully

User-friendly messages shown via UI notifications

No silent failures

Application never crashes due to invalid operations

🚀 Deployment

Application deployed on Vercel

Publicly accessible live URL

🔗 Live Demo:

Add your Vercel URL here

🎥 Demo Video

A 2-minute demo video is included showing:

Account creation

Deposit

Withdrawal

Transfer (success and failure cases)

Brief explanation of validation logic

🧾 Git Commit Strategy

Minimum 3 meaningful commits:

Core banking logic and validations

UI components and routing

Deployment, polish, and documentation

🧪 How to Run Locally
git clone <repository-url>
cd online-bank-mini-system
npm install
npm run dev

📈 Scope & Future Enhancements

This project intentionally avoids backend and database usage to stay within the assignment scope.
However, the architecture is designed to easily support:

REST APIs

Database persistence

Authentication

Multi-user access

👨‍💻 Author

Built as part of a technical evaluation to demonstrate logic building, clean architecture, and UI engineering best practices.
