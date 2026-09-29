export default function SummaryCards({ totalCategories }) {
  return (
    <div className="row mb-4">
      <div className="col-md-6">
        <div className="card border-0 shadow-sm bg-white p-3">
          <span className="text-muted small fw-semibold">TOTAL CATEGORIES</span>
          <span className="fs-3 fw-bold text-primary">{totalCategories}</span>
        </div>
      </div>
      <div className="col-md-6 mt-3 mt-md-0">
        <div className="card border-0 shadow-sm bg-white p-3">
          <span className="text-muted small fw-semibold">SYSTEM STATUS</span>
          <span className="fs-3 fw-bold text-success">Active & Synced</span>
        </div>
      </div>
    </div>
  );
}