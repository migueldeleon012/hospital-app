//didn't put Link or anchor tags here, but if there were links I would use the ul tag

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar__logo">
        <img src="" alt="" />
      </div>
      <div className="sidebar__content">
        <p>Home</p>
        <p className="active">Hospitals</p>
        <p>Submissions</p>
        <p>Reports</p>
        <p>Custom Charts</p>
        <p>Users</p>
      </div>
    </nav>
  );
};

export default Sidebar;
