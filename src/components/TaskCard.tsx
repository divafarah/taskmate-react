interface TaskCardProps {
  id: number
  title: string
  course: string
  deadline: string
  completed: boolean
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

function TaskCard({
  id,
  title,
  course,
  deadline,
  completed,
  onToggle,
  onDelete,
}: TaskCardProps) {
  return (
    <article className={`task-card ${completed ? 'completed' : ''}`}>
      <div className="task-content">
        <h3>{title}</h3>
        <p>{course}</p>
        <span>Deadline: {deadline}</span>

        <span className={`task-status ${completed ? 'done' : 'pending'}`}>
          {completed ? 'Selesai' : 'Belum Selesai'}
        </span>
      </div>

      <div className="task-actions">
        <button onClick={() => onToggle(id)}>
          {completed ? 'Batalkan' : 'Selesaikan'}
        </button>

        <button onClick={() => onDelete(id)} className="delete-button">
          Hapus
        </button>
      </div>
    </article>
  )
}

export default TaskCard