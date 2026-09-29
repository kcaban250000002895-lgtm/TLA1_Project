# 💰 Enterprise Income Category Ledger (React + Vite)

A modular React application refactored from our Midterm Vanilla DOM Income Category Ledger for **Finals TLA 1**.

- **Live Demo (Vercel):** [https://tla-1-project-two.vercel.app/]
- **GitHub Repository:** [https://github.com/kcaban250000002895-lgtm/TLA1_Project]

---

## 📋 Architectural Overview: Vanilla DOM vs. React Refactor

This application transitions our Midterm baseline logic from imperative Document Object Model (DOM) manipulation into a declarative React functional component model:

| Architectural Concept | Midterm Vanilla DOM Baseline | Refactored React Application |
| :--- | :--- | :--- |
| **Node Access & Retrieval** | Direct element lookup via `document.getElementById("txtCatName")` | Controlled inputs bound to component state (`useState`) |
| **Event Subscriptions** | Manual listener wiring via `addCategoryBtn.addEventListener("click", ...)` | Declarative form submission via `onSubmit={handleSubmit}` |
| **Dynamic UI Rendering** | Direct string mutation via `incomeTableBody.insertAdjacentHTML("beforeend", ...)` | Reactive rendering by mapping array state (`categories.map()`) |
| **User Validation** | Blocking browser alert boxes (`alert(...)`) | In-app, non-blocking dynamic error banner state |
| **Data Persistence** | RAM-only storage (resets on page refresh) | Persistent browser synchronization via `localStorage` side-effects |

---

## 🤖 AI Implementation & Code Defense

### 1. Features & Components Developed with AI Assistance

AI assistance was utilized throughout the refactoring workflow to improve structure, state predictability, and visual polish:

* **Modular Component Architecture:** Assisted in decomposing the monolithic single-file HTML/JS structure into modular, single-responsibility React functional components (`SummaryCards`, `CategoryForm`, `CategoryTable`).
* **Unidirectional State Flow:** Guided the migration of state ownership upward to `App.jsx` ("Lifting State Up") to enable seamless prop sharing across independent components.
* **Persistent Local Storage Sync:** Formulated a lazy initialization strategy using `useState` paired with `useEffect` side-effects to synchronize application state with `localStorage`.
* **Enhanced UI & Features:** Designed an integrated real-time text filter/search feature, metric KPI overview cards, and integrated Bootstrap Icons.

---

### 2. Deep-Dive Technical Explanation & Code Defense

#### **A. Centralized State Ownership & Unidirectional Data Flow (`App.jsx`)**
State is centralized in the parent component (`App.jsx`) and passed down to child components via props.

```jsx
const [categories, setCategories] = useState(() => {
  const saved = localStorage.getItem('income_categories');
  return saved
    ? JSON.parse(saved)
    : [{ id: 1, name: 'Consulting', description: 'Enterprise technical support contract' }];
});
const [searchTerm, setSearchTerm] = useState('');
