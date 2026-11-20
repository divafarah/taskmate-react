import { useState, useEffect } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Header from './components/Header'
import DashboardStats from './components/DashboardStats'
import TaskForm from './components/TaskForm'
import FilterBar from './components/FilterBar'
import TaskList from './components/TaskList'
import Footer from './components/Footer'

import type { Task } from './types/Task'

function App() {
  // Mengambil data tugas dari LocalStorage
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('taskmate-tasks')

    if (savedTasks) {
      try {
        return JSON.parse(savedTasks) as Task[]
      } catch {
        return []
      }
    }

    return [
      {
        id: 1,
        title: 'Membuat laporan praktikum',
        course: 'Basis Data',
        deadline: '2026-11-25',
        completed: false,
      },
      {
        id: 2,
        title: 'Menyelesaikan project React',
        course: 'Pengembangan Aplikasi Web',
        deadline: '2026-11-27',
        completed: false,
      },
      {
        id: 3,
        title: 'Membuat presentasi kelompok',
        course: 'Rekayasa Perangkat Lunak',
        deadline: '2026-11-29',
        completed: true,
      },
    ]
  })

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('Semua')

  // Menyimpan data tugas setiap kali terjadi perubahan
  useEffect(() => {
    localStorage.setItem('taskmate-tasks', JSON.stringify(tasks))
  }, [tasks])

  // Menambahkan tugas baru
  const handleAddTask = (
    title: string,
    course: string,
    deadline: string,
  ) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      course,
      deadline,
      completed: false,
    }

    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  // Mengubah status tugas
  const handleToggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task,
      ),
    )
  }

  // Menghapus tugas
  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id),
    )
  }

  // Pencarian dan filter tugas
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesFilter =
      filter === 'Semua' ||
      (filter === 'Selesai' && task.completed) ||
      (filter === 'Belum Selesai' && !task.completed)

    return matchesSearch && matchesFilter
  })

  // Menghitung statistik tugas
  const totalTasks = tasks.length
  const completedTasks = tasks.filter((task) => task.completed).length
  const pendingTasks = totalTasks - completedTasks

  return (
    <div className="app">
      <Navbar />

      <main className="main-content" id="dashboard">
        <Header
          name="Farah Diva Mumtazah"
          nim="1247050131"
        />

        <DashboardStats
          total={totalTasks}
          pending={pendingTasks}
          completed={completedTasks}
        />

        <TaskForm onAddTask={handleAddTask} />

        <FilterBar
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
        />

        <TaskList
          tasks={filteredTasks}
          onToggle={handleToggleTask}
          onDelete={handleDeleteTask}
        />
      </main>

      <Footer />
    </div>
  )
}

export default App