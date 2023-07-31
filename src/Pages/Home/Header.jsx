import React, { useRef } from 'react';
import { Nav } from 'react-bootstrap';
import style from './Header.module.scss';

const Header = (props) => {

    //Efeito do Menu da Header

    const menuRef = useRef(null);

    function clickMenu(){
        if(menuRef.current.style.display === 'block'){
            menuRef.current.style.display = 'none';
        }
        else{
            menuRef.current.style.display = 'block';
        }
    }

    return (
        <header id={style.header} style={{backgroundColor: props.header_color}}>
            <nav>
                <input type="checkbox" className={style.menu_faketrigger} onClick={clickMenu} />
                <div className={style.menu_lines}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={style.menu} ref={menuRef} style={{backgroundColor: props.header_color}}>
                    <div>
                        <img src={props.header_img} alt="logo" />
                        <Nav.Link href='/' style={{textDecoration: 'none'}}><li>Home</li></Nav.Link>
                        <Nav.Link href='/Blog' style={{textDecoration: 'none'}}><li>Blog</li></Nav.Link>
                        <Nav.Link href='/LoginCadastro?cadastro' style={{textDecoration: 'none'}}> <li>Cadastro</li></Nav.Link>
                        <Nav.Link href='/LoginCadastro' style={{textDecoration: 'none'}}><li>Login</li></Nav.Link>
                        <Nav.Link href='/Demo' style={{textDecoration: 'none'}}><li>Demo</li></Nav.Link>
                    </div>
                </ul>
            </nav>
            <img src={props.header_img} alt="logo" className={style.logo} />
            <div className={style.acessibilidade}>
                {/*Tag vazia*/}
            </div>
        </header>
    )
}

export default Header