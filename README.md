# VSCode-Clone

A clone of Visual Studio Code built with React + TypeScript + Vite, replicating core features of the popular code editor.

## 🧩 Project Overview

This project aims to replicate the core UX and functionality of Visual Studio Code: editor panes, tabs, file tree, syntax highlighting, etc. It is built using:

* React (frontend UI)
* TypeScript (type safety)
* Vite (fast build/dev tooling)
* HTML/CSS for layout and styling

## ✅ Key Features

* Editor component supporting multiple tabs
* File explorer / tree view
* Syntax highlighting for major languages
* Split-view / multiple panes support
* Custom theming / dark & light mode
* Basic keyboard shortcut support

## 🚀 Getting Started

### Prerequisites

* Node.js (≥ 12.x)
* npm or yarn

### Installation

```bash
git clone https://github.com/7amok4a/VSCode-Clone.git  
cd VSCode-Clone  
npm install       # or yarn  
```

### Running in Development Mode

```bash
npm run dev       # or yarn dev  
```

This will launch the app in your browser with hot module reloading.

### Build for Production

```bash
npm run build  
```

Outputs optimized build files, ready for deployment.

## 🔧 Project Structure

```
/public           → static assets (icons, fonts, index.html)  
/src              → main source code  
    /components   → reusable React components  
    /editor       → core editor & tab logic  
    /theme        → theming and styling  
vite.config.ts    → Vite configuration  
tsconfig.json     → TypeScript settings  
```

## 📌 Why This Project?

* A strong learning exercise for React, TypeScript, and build tools.
* Gives insight into how a modern code editor is structured.
* Enables experimentation: you can add features (extensions, linting, …).
* Great reference for building your own developer tools UI (especially fitting for someone with your AI/algorithms background).

## 🛠️ Roadmap & Future Enhancements

* Add plugin/extension architecture (like VS Code).
* Integrate terminal emulator pane.
* Add git integration & file versioning.
* Improve performance for large files.
* Add more keyboard shortcuts and UX polish.

## 📝 Contribution

Contributions are welcome! If you want to add a feature or fix a bug, please:

1. Fork the repository.
2. Create a branch (`feature/my-cool-feature`).
3. Make your changes and add tests if possible.
4. Open a Pull Request with a clear description of your changes.

