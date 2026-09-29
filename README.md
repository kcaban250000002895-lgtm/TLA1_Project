# 💰 Enterprise Income Category Ledger (React + Vite)

A modular React application refactored from our Midterm Vanilla DOM Income Category Ledger for **Finals TLA 1**.

- **Live Demo (Vercel):** [https://tla-1-project-two.vercel.app/]
- **GitHub Repository:** [https://github.com/kcaban250000002895-lgtm/TLA1_Project]

---

## 🛠️ Key Architectural Differences

| Baseline Feature | Midterm Vanilla DOM Implementation | Refactored React Implementation |
| :--- | :--- | :--- |
| **Node Retrieval** | `document.getElementById("txtCatName")` | Controlled component state using `useState("")` |
| **Event Handling** | `addCategoryBtn.addEventListener("click", ...)` | Native form submit event handler (`onSubmit`) |
| **Dynamic Mutation**| `incomeTableBody.insertAdjacentHTML("beforeend", ...)` | Declarative array rendering via `categories.map()` |
| **Validation** | Native browser `alert()` popups | Dynamic in-app alert state feedback |
| **Data Persistence**| None (RAM reset on page refresh) | Synchronized persistent state via `localStorage` |

---

## 🤖 AI Implementation & Code Defense

### 1. AI-Assisted Features
- **State Flow Refactoring:** Guided the refactoring of imperative DOM queries into top-level unidirectional React state in `App.jsx`.
- **LocalStorage Sync:** Implemented lazy state initialization inside `useState` paired with `useEffect` side-effects.
- **UI Enhancements:** Built live search table filtering and metric summary cards.

### 2. Core Code Explanation

#### **A. Declarative Rendering vs. Direct DOM Injections**
In the Midterm baseline, elements were manually inserted into RAM:
```javascript
incomeTableBody.insertAdjacentHTML("beforeend", newRowHTML);
