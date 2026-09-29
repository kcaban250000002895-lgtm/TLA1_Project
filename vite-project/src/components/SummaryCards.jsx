export default function SummaryCards({ totalCategories }) {
  return (
    <div className="row g-3 mb-4">
      <div className="col-md-6">
        <div className="card border-0 shadow-sm bg-white p-3 border-start border-4 border-primary">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <span className="text-muted small fw-bold text-uppercase">Total Categories</span>
              <h3 className="fs-2 fw-bold text-dark mb-0 mt-1">{totalCategories}</h3>
            </div>
            <div className="bg-primary-subtle text-primary p-3 rounded-circle">
              <i className="bi bi-folder-check fs-4"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card border-0 shadow-sm bg-white p-3 border-start border-4 border-success">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <span className="text-muted small fw-bold text-uppercase">System Status</span>
              <h3 className="fs-2 fw-bold text-success mb-0 mt-1">Active & Synced</h3>
            </div>
            <div className="bg-success-subtle text-success p-3 rounded-circle">
              <i className="bi bi-cloud-check fs-4"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
