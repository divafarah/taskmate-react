interface HeaderProps {
  name: string
  nim: string
}

function Header({ name, nim }: HeaderProps) {
  return (
    <header className="page-header">
      <div>
        <p className="greeting">STUDENT TASK MANAGEMENT</p>
        <h1>Halo, {name}! 👋</h1>
        <p className="header-description">
          Selamat datang di TaskMate. Yuk, atur tugas kuliahmu hari ini.
        </p>
      </div>

      <div className="student-info">
        <span>Nama Mahasiswa</span>
        <strong>{name}</strong>
        <span>NIM: {nim}</span>
      </div>
    </header>
  )
}

export default Header