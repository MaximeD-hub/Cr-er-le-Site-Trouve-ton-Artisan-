import logoRegion from "../../assets/images/logo-region.png";
import "./Footer.scss";

const Footer = () => (
  <footer className="footer-site" role="contentinfo">
    <div className="container-fluid px-4">
      <div className="footer-site__inner">

        <div className="footer-site__brand">
          <img
            src={logoRegion}
            alt="Logo Région Auvergne-Rhône-Alpes"
            className="footer-site__logo-img"
          />
        </div>

        <address className="footer-site__address">
          101 cours Charlemagne<br/>
          CS 20033<br/>
          69269 LYON CEDEX 02<br/>
          France<br/><br/>
          +33 (0)4 26 73 40 00
        </address>

        <nav className="footer-site__legal" aria-label="Liens légaux">
          <a href="/404">Mentions légales</a>
          <a href="/404">Données personnelles</a>
          <a href="/404">Accessibilité</a>
          <a href="/404">Cookies</a>
        </nav>

      </div>
    </div>
  </footer>
);

export default Footer;