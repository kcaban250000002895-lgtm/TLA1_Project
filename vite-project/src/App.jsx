import { useState, useEffect } from 'react';
import CategoryForm from './components/CategoryForm';
import CategoryTable from './components/CategoryTable';
import SummaryCards from './components/SummaryCards';

export default function App() {
  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem('income_categories');
    return saved
      ? JSON.parse(saved)
      : [{ id: 1, name: 'Consulting', description: 'Enterprise technical support contract' }];
  });

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('income_categories', JSON.stringify(categories));
  }, [categories]);

  const handleAddCategory = (newCat) => {
    setCategories((prev) => [...prev, { ...newCat, id: Date.now() }]);
  };

  const handleDeleteCategory = (id) => {
    setCategories((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredCategories = categories.filter(
    (cat) =>
      cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-light min-vh-100 py-5">
      <main className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <header className="mb-4 text-center">
              <div className="d-inline-flex align-items-center justify-content-center bg-primary text-white p-3 rounded-circle mb-3 shadow-sm">
                <i className="bi bi-wallet2 fs-2"></i>
              </div>
              <h1 className="fw-bold text-primary mb-1">Enterprise Income Tracker</h1>
              <p className="text-muted">React Modular Refactor — Finals TLA 1</p>
            </header>

            <SummaryCards totalCategories={categories.length} />
            <CategoryForm onAddCategory={handleAddCategory} />
            <CategoryTable
              categories={filteredCategories}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              onDelete={handleDeleteCategory}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
