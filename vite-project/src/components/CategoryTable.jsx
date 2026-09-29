export default function CategoryTable({ categories, searchTerm, onSearchChange, onDelete }) {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-header bg-white py-3 d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-2">
        <h2 className="h6 mb-0 text-secondary fw-bold text-uppercase">
          <i className="bi bi-journal-text me-2"></i>Registered Categories ({categories.length})
        </h2>
        
        <div className="input-group input-group-sm w-auto">
          <span className="input-group-text bg-light text-muted border-end-0">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th scope="col" style={{ width: '35%' }}>Category Name</th>
              <th scope="col">Description</th>
              <th scope="col" className="text-end">Actions</th>
            </tr>
          </thead>
          <tbody id="listIncomeCat">
            {categories.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-5 text-muted">
                  <i className="bi bi-inbox fs-1 d-block mb-2 text-secondary opacity-50"></i>
                  <p className="mb-0 fw-medium">No registered categories found.</p>
                  <small className="text-muted">Use the form above to add your first income category.</small>
                </td>
              </tr>
            ) : (
              categories.map((cat) => (
                <tr key={cat.id}>
                  <td className="fw-semibold text-dark">
                    <span className="badge bg-primary-subtle text-primary border border-primary-subtle me-2 px-2 py-1">
                      <i className="bi bi-folder-fill me-1"></i>Category
                    </span>
                    {cat.name}
                  </td>
                  <td className="text-secondary">{cat.description}</td>
                  <td className="text-end">
                    <button
                      className="btn btn-outline-danger btn-sm rounded-pill px-3"
                      onClick={() => onDelete(cat.id)}
                    >
                      <i className="bi bi-trash3 me-1"></i>Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
