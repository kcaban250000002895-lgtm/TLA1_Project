import { useState } from 'react';

export default function CategoryForm({ onAddCategory }) {
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

  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-header custom-gradient-header text-white py-3">
        <h2 className="h5 mb-0 fw-bold">
          <i className="bi bi-plus-circle me-2"></i>Income Category Registration
        </h2>
      </div>
      <div className="card-body p-4">
        {error && (
          <div className="alert alert-danger py-2 d-flex align-items-center">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            <div>{error}</div>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="txtCatName" className="form-label fw-semibold text-secondary">
              Category Name
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light text-muted">
                <i className="bi bi-tag"></i>
              </span>
              <input
                type="text"
                id="txtCatName"
                className="form-control"
                placeholder="e.g., Consulting"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="txtCatDesc" className="form-label fw-semibold text-secondary">
              Description
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light text-muted">
                <i className="bi bi-file-text"></i>
              </span>
              <input
                type="text"
                id="txtCatDesc"
                className="form-control"
                placeholder="e.g., Enterprise technical support contract"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" id="btnAdd" className="btn btn-primary px-4 fw-semibold shadow-sm">
            <i className="bi bi-check-lg me-1"></i>Save Category
          </button>
        </form>
      </div>
    </div>
  );
}
