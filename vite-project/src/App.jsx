import { useState, useEffect } from 'react';
import CategoryForm from './components/CategoryForm';
import CategoryTable from './components/CategoryTable';
import SummaryCards from './components/SummaryCards';

export default function App() {
  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem('income_categories');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: 'Consulting', description: 'Enterprise technical support contract' }
    ];
  });

  const [searchTerm, setSearchTerm] = useState('');

  // Persist categories in LocalStorage on update
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
              <h1 className="fw-bold text-primary">Enterprise Income Tracker</h1>
              <p className="text-muted">React Refactored Income Category Ledger</p>
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