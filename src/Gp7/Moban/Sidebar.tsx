const Sidebar = ({ title, menuItems }) => {
    return (
      <div className="sidebar w-64 p-4">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="sidebar-item p-2 rounded mb-2">
              <a href={item.link} className="block">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Sidebar;