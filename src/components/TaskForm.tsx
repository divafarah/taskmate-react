import { useState } from 'react'

interface TaskFormProps {
  onAddTask: (
    title: string,
    course: string,
    deadline: string,
  ) => void
}

function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState('')
  const [course, setCourse] = useState('')
  const [deadline, setDeadline] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!title.trim() || !course.trim() || !deadline) {
      return
    }

    onAddTask(title, course, deadline)

    setTitle('')
    setCourse('')
    setDeadline('')
  }

  return (
    <section className="form-container">
      <h2>Tambah Tugas Baru</h2>
      <p>Catat tugas kuliahmu agar tidak terlewat.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nama Tugas</label>
          <input
            type="text"
            placeholder="Contoh: Membuat laporan praktikum"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Mata Kuliah</label>
          <input
            type="text"
            placeholder="Contoh: Pemrograman Web"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Deadline</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="add-button">
          + Tambah Tugas
        </button>
      </form>
    </section>
  )
}

export default TaskForm