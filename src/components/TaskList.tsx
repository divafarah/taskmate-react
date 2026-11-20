import TaskCard from './TaskCard'

interface Task {
  id: number
  title: string
  course: string
  deadline: string
  completed: boolean
}

interface TaskListProps {
  tasks: Task[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  return (
    <section className="task-list-container" id="tasks">
      <h2>Daftar Tugas</h2>
      <p>Kelola semua tugas kuliahmu di sini.</p>

      <div className="task-list">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              {...task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))
        ) : (
          <div className="empty-state">
            <span>📭</span>
            <h3>Belum ada tugas</h3>
            <p>Tugas yang kamu tambahkan akan muncul di sini.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default TaskList