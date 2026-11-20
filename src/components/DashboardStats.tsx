
interface DashboardStatsProps {
  total: number
  pending: number
  completed: number
}
function DashboardStats({
  total,
  pending,
  completed,
}: DashboardStatsProps) {
  return (
    <section className="stats-container">
      <div className="stat-card purple">
        <div className="stat-icon">📚</div>
        <div>
          <p>Total Tugas</p>
          <h2>{total}</h2>
        </div>
      </div>

      <div className="stat-card blue">
        <div className="stat-icon">⏳</div>
        <div>
          <p>Belum Selesai</p>
          <h2>{pending}</h2>
        </div>
      </div>

      <div className="stat-card green">
        <div className="stat-icon">✓</div>
        <div>
          <p>Selesai</p>
          <h2>{completed}</h2>
        </div>
      </div>
    </section>
  )
}

export default DashboardStats