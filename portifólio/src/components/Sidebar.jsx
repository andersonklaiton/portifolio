import Avatar from "../img/avatar.jpeg"

import "../styles/components/sidebar.sass";

const Sidebar = () => {
    return (
      <aside id="sidebar">
        <img src={Avatar} alt="Anderson da Silva" />
        <p className="title">Desenvolvedor</p>
        <a href="#" className="btn">
          Download currículo
        </a>
      </aside>
    );
  };
  
  export default Sidebar;