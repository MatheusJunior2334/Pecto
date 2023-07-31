import { Nav } from 'react-bootstrap';

import style from './Footer.module.scss';

import AppStoreImage from './Images/AppStoreImage';
import GooglePlayImage from './Images/GooglePlayImage';
import InstagramIcon from './Images/InstagramIcon';
import WhatsappIcon from './Images/WhatsappIcon';
import FacebookIcon from './Images/FacebookIcon';
import TwitterIcon from './Images/TwitterIcon';
import LinkedinIcon from './Images/LinkedinIcon';

const OpenInNewTab = url => {
    window.open(url, '_blank', 'noopener, noreferrer')
}

function Footer(props) {
    return (
        <footer>
            <nav className={style.footer_superior}>
                <div className={style.logo}>
                    <img src={props.footer_img} alt="logo da pecto" />
                </div>
                <div className={style.footer_options}>
                    <h5>Quem Somos</h5>
                    <ul>
                        <Nav.Link href='/Institucional' style={{textDecoration: 'none', color: 'black'}}><li>Institucional</li></Nav.Link>
                        <li>Notícias e eventos</li>
                        <Nav.Link href='/PoliticaPrivacidade' style={{textDecoration: 'none', color: 'black'}}><li>Política e privacidade</li></Nav.Link>
                    </ul>
                </div>
                <div className={style.footer_options}>
                    <h5>Contato</h5>
                    <ul>
                        <Nav.Link href='/Contato' style={{textDecoration: 'none', color: 'black'}}><li>Fale Conosco</li></Nav.Link>
                        <li>Trabalhe conosco</li>
                        <Nav.Link href='/Faq' style={{textDecoration: 'none', color: 'black'}}><li>FAQ</li></Nav.Link>
                    </ul>
                </div>
                <div className={style.footer_options}>
                    <h5>Nosso <br/> Aplicativo</h5>
                    <ul className={style.aplicativo} >
                        <AppStoreImage/>
                        <GooglePlayImage />
                    </ul>
                </div>
                <div className={style.footer_options}>
                    <h5>Como Doar?</h5>
                    <ul>
                        <li>
                            <form action="https://www.paypal.com/donate" method="post" target="_blank">
                                <input type="hidden" name="hosted_button_id" value="4C8JRQMVPTDFE" />
                                <input type="image" src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Faça doações com o botão do PayPal" />
                                <img alt="logo" border="0" src="https://www.paypal.com/pt_BR/i/scr/pixel.gif" width="1" height="1" />
                            </form>
                        </li>
                        <div>
                            <InstagramIcon title='Instagram' OpenInNewTab={OpenInNewTab} />
                            <WhatsappIcon title='Whatsapp' />
                            <FacebookIcon title='Facebook' />
                            <TwitterIcon title='Twitter' />
                            <LinkedinIcon title='Linkedin' OpenInNewTab={OpenInNewTab} />
                        </div>
                    </ul>
                </div>
            </nav>
            <div className={style.footer_inferior}>
                <h6>Copyright © Pecto - <span> 2023 </span> - Todos os direitos reservados</h6>
            </div>
        </footer>
    )
}

export default Footer