import { useState } from 'react';

export default function CategoryForm({ onAddCategory }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Guard clause validation (matching Midterm baseline)
    if (!name.trim() || !description.trim()) {
      setError('Please complete both input fields.');
      return;
    }

    setError('');
    onAddCategory({ name: name.trim(), description: description.trim() });

    // Reset inputs
    setName('');
    setDescription('');
  };

  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-header bg-primary text-white py-3">
        <h2 className="h5 mb-0 fw-bold">Income Category Registration</h2>
      </div>
      <div className="card-body p-4">
        {error && <div className="alert alert-danger py-2">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="txtCatName" className="form-label fw-semibold">
              Category Name
            </label>
            <input
              type="text"
              id="txtCatName"
              className="form-control"
              placeholder="e.g., Consulting"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="txtCatDesc" className="form-label fw-semibold">
              Description
            </label>
            <input
              type="text"
              id="txtCatDesc"
              className="form-control"
              placeholder="e.g., Enterprise technical support contract"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="submit" id="btnAdd" className="btn btn-primary px-4 fw-semibold">
            Save Category
          </button>
        </form>
      </div>
    </div>
  );
}