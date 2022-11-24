import FooterCSS from './Footer.module.css';

const Footer = () => {
    return (  
        <nav className={ FooterCSS.footer}>
            <div className={FooterCSS.footerBoks1}>  
                <h1>Musik Samspil</h1>
                <a href="/">Home</a>
                <a href="/profil">Profile</a>
        </div>  
    </nav>
    );
}
 
export default Footer;