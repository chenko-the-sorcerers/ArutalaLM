# Arutala Language Model (ArutalaLM)

ArutalaLM is a modern, full-stack web application designed for interacting with language models. It features a sleek user interface built with React and a robust backend powered by Express. The project is structured to provide a seamless chat experience with support for various UI components and real-time interactions.

## 🚀 Features

- **Modern UI/UX**: Built with React 19, Tailwind CSS 4, and Radix UI for a responsive and accessible experience.
- **Chat Interface**: Interactive chat box with support for templates and persona cards.
- **Full-Stack Architecture**: Integrated client-server setup using Vite and Express.
- **Type Safety**: Fully written in TypeScript for better developer experience and code quality.
- **Custom Components**: Includes a wide range of reusable UI components like Dialogs, Drawers, Charts, and more.
- **Theming**: Built-in support for light and dark modes.

## 🛠️ Tech Stack

- **Frontend**: [React](https://reactjs.org/), [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/)
- **Backend**: [Express](https://expressjs.com/), [Node.js](https://nodejs.org/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/)
- **State Management & Routing**: [Wouter](https://github.com/molefrog/wouter), [React Hook Form](https://react-hook-form.com/)
- **Utilities**: [Zod](https://zod.dev/), [Axios](https://axios-http.com/), [Clsx](https://github.com/lukeed/clsx)

## 📁 Project Structure

```text
├── client/           # Frontend React application
│   ├── src/          # Source code (components, hooks, pages, etc.)
│   └── public/       # Static assets
├── server/           # Backend Express server
├── shared/           # Shared constants and types
├── patches/          # Dependency patches
└── package.json      # Project configuration and scripts
```

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [pnpm](https://pnpm.io/) (v10 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chenko-the-sorcerers/ArutalaLM.git
   cd ArutalaLM
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Running the Project

- **Development Mode**:
  ```bash
  pnpm run dev
  ```
  This starts the Vite development server.

- **Build for Production**:
  ```bash
  pnpm run build
  ```

- **Start Production Server**:
  ```bash
  pnpm run start
  ```

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

Built with ❤️ by [Chenko the Sorcerers](https://github.com/chenko-the-sorcerers)
