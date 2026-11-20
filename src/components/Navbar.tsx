function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">✓</span>
        <span>TaskMate</span>
      </div>

      <div className="navbar-menu">
        <a href="#dashboard" className="active">
          Dashboard
        </a>
        <a href="#tasks">
          Daftar Tugas
        </a>
        <a href="#about">
          Tentang
        </a>
      </div>

      <div className="navbar-profile">
        <div className="profile-avatar">F</div>
        <span>Mahasiswa</span>
      </div>
    </nav>
  )
}

export default Navbar
