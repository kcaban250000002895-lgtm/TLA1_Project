export default function CategoryTable({ categories, searchTerm, onSearchChange, onDelete }) {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
        <h2 className="h6 mb-0 text-secondary fw-bold text-uppercase">
          Registered Categories ({categories.length})
        </h2>
        {/* Creative Feature: Live Search Filter */}
        <input
          type="text"
          className="form-control form-control-sm w-auto"
          placeholder="Search categories..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
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
                <td colSpan="3" className="text-center py-4 text-muted">
                  No categories registered yet.
                </td>
              </tr>
            ) : (
              categories.map((cat) => (
                <tr key={cat.id}>
                  <td className="fw-semibold text-dark">{cat.name}</td>
                  <td className="text-secondary">{cat.description}</td>
                  <td className="text-end">
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => onDelete(cat.id)}
                    >
                      Delete
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