import Avatar from "../img/avatar.jpeg"

import "../styles/components/sidebar.sass"

const Sidebar = ()=>{
    return(
        <aside id="sidebar">
            <img src={Avatar} alt="Anderson Silva"/>
            <p className="tittle">Desenvolvedor</p>
            <p>redes sociais</p>
            <p>informações de contato</p>
            <a href="" className="btn">Download Currículo</a>
        </aside>
    )
}

export default Sidebar