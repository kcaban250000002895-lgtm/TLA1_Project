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

Lazy State Initialization: Passing a function into useState ensures localStorage.getItem() is executed only once when the component initially mounts, avoiding unnecessary computational overhead on subsequent re-renders.

Immutability: When appending a new category, array state is updated immutably using the spread operator ([...prev, newCat]), ensuring React detects state changes and triggers a re-render.

#### **B. State Persistence via Side Effects (useEffect)
To ensure data persists across browser reloads, useEffect triggers a synchronization side-effect whenever the categories state changes:

JavaScript
useEffect(() => {
  localStorage.setItem('income_categories', JSON.stringify(categories));
}, [categories]);
Dependency Array: [categories] guarantees that localStorage.setItem runs only when categories changes, preventing unneeded storage writes.

#### **C. Controlled Components & Form Validation (CategoryForm.jsx)
Instead of querying input elements directly from the DOM on submit, input values are continuously synchronized with local component state via onChange.

JavaScript
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [error, setError] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();

  if (!name.trim() || !description.trim()) {
    setError('Please complete both input fields.');
    return;
  }

  setError('');
  onAddCategory({ name: name.trim(), description: description.trim() });
  setName('');
  setDescription('');
};
Preventing Page Reloads: e.preventDefault() halts default browser HTTP form submissions.

Controlled Inputs: value={name} and onChange={(e) => setName(e.target.value)} ensure that React serves as the single source of truth for the form data.

D. Declarative Table Rendering & Live Filtering (CategoryTable.jsx)
The UI is a direct expression of current state. Filtered array results are calculated dynamically during render without mutating the underlying data array:

JavaScript
const filteredCategories = categories.filter(
  (cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchTerm.toLowerCase())
);
JavaScript
{categories.map((cat) => (
  <tr key={cat.id}>
    <td className="fw-semibold text-dark">{cat.name}</td>
    <td className="text-secondary">{cat.description}</td>
    <td className="text-end">
      <button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(cat.id)}>
        Delete
      </button>
    </td>
  </tr>
))}
Keys in Lists: The key={cat.id} prop allows React’s Virtual DOM reconciliation engine to uniquely identify rows, ensuring optimal rendering performance when items are added or removed.

## 🛠️ Tech Stack & Dependencies
Framework: React 18 / 19 (via Vite)

Styling: Bootstrap 5.3 CDN & Bootstrap Icons

Version Control: Git & GitHub

Deployment Platform: Vercel
