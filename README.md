# AI Accelerator

## Overview

This repository is a monorepo containing two main projects:

- **Frontend**: A React application built with Vite.
- **Backend**: A Node.js application using Express.

### Project Description

Use this project to debug or improve code. Through the OpenAI API, we can interpret and suggest refactorings that can directly impact the performance and efficiency of your application.

---

## Installation and Setup

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (version 16 or higher)
- **npm** (or **yarn**, if preferred)
- **Git**

### Steps to Install from Github

1. **Clone the repository:**

   ```bash
   git clone <https://github.com/FredNeves95/code-suggestions.git>
   cd <code-suggestions>
   ```

2. **Install dependencies for the entire monorepo:**

   ```bash
   npm install
   ```

3. **Navigate to individual projects (if needed):**

   - For frontend:
     ```bash
     cd apps/frontend
     ```
   - For backend:
     ```bash
     cd apps/backend
     ```

---

### Steps to Install from Zipfile

1. **Unzip the project:**
   Use a file decompression program to access the project. Examples of programs that can be used include WinRAR, 7-Zip, and The Unarchiver.

   ```bash
   cd <code-suggestions>
   ```

2. **Install dependencies for the entire monorepo:**

   ```bash
   npm install
   ```

3. **Navigate to individual projects (if needed):**

   - For frontend:
     ```bash
     cd apps/frontend
     ```
   - For backend:
     ```bash
     cd apps/backend
     ```

---

## Running the Project

### Development Mode

Run both frontend and backend simultaneously in development mode:

```bash
npm run dev
```

This will:

- Start the **frontend** development server (Vite) - Default Port 5173.
- Start the **backend** development server (Express) - Default Port 5001.

Note: For the version stored on GitHub, the backend application's .env file has been excluded for security reasons.

---

## Stretch goals

1. **Add End-to-End Testing**
   - Integrate Cypress for full-stack testing.
2. **Create a login system**
   - Authenticate the api route to increase security.
3. **Alternative to login -> Rate-limiting**

   - Implement a rate-limiting feature to prevent consecutive requests from the same IP address. This will restrict the number of requests an IP can make within a given time frame, helping to mitigate abuse and improve server stability, also, since the OpenAI charges per token, it could reduce costs.
     - To implement rate limiting, a system can be set up to track the number of requests made by each IP address within a specified time window. This can be done by storing the timestamp of each request and comparing it with the current time. If the number of requests exceeds the allowed limit within that window, further requests are blocked.
       A possible implementation could involve using a caching system like Redis to store request data. When a request is made, the system checks the number of requests from that IP in the last X minutes. If the limit is exceeded, the request is denied with a 429 Too Many Requests response. Otherwise, the request count is incremented.
       This approach helps prevent abuse and reduces server load by limiting excessive requests from the same source.

4. **Shared Utilities**

- I created the two projects separately and then added them to the Turborepo, but I believe some files could be reused to avoid duplication, such as the TypeScript configurations..
