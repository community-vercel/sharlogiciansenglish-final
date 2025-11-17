import React, { Component } from "react";
import { FiX, FiMenu, FiGlobe, FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import LanguageSelectors from "./Customdropdown3";
import styles from '../components/home.module.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "en",
      isDropdownOpen: false,
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.dropdownRef = React.createRef();
  }

  componentDidMount() {
    const savedLanguage = localStorage.getItem("language") || "en";
    this.setState({ language: savedLanguage });

    document.addEventListener("click", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.dropdownRef.current && !this.dropdownRef.current.contains(event.target)) {
      this.setState({ isDropdownOpen: false });
    }
  };

  toggleDropdown() {
    this.setState((prevState) => ({ isDropdownOpen: !prevState.isDropdownOpen }));
  }

  changeLanguage(lang) {
    this.setState({ language: lang, isDropdownOpen: false }, () => {
      localStorage.setItem("language", lang);
      window.location.reload();
    });
  }

  render() {
    const { logo, color = "default-color" } = this.props;
    let logoUrl;
    if (logo === "light") {
      logoUrl = <Image className="logo-2" width={270} height={72} src="/logo-light.png" alt="Sharplogicians" />;
    } else if (logo === "dark") {
      logoUrl = <Image className="logo-2" width={270} height={72} src="/logo-light.png" alt="Sharplogicians" />;
    } else {
      logoUrl = <Image className="logo-2" width={270} height={72} src="/logo-light.png" alt="Sharplogicians" />;
    }


    

    const { language, isDropdownOpen } = this.state;
   

    return (
      <header className={`header-area formobile-menu header--transparent ${color}`}>
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <a href="/">{logoUrl}</a>
            </div>
          </div>
          
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/services">Service</Link>
                </li>
                <li>
                  <Link href="/#about">About</Link>
                </li>
                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link href="/#team">Team</Link>
                </li>
                <li>
                  <Link href="/#testimonial">Testimonial</Link>
                </li>
                <li>
                  <Link href="/news">Blog</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <div className="header-btn">
              <a className="rn-btn" href="/quote">
                <span>Get a quote</span>
              </a>
            </div>

            {/* Language Selector */}
            <div className="header-btns p-0">
 <LanguageSelectors />
    </div>

            {/* Start Humberger Menu */}
            <div className="humberger-menu d-block d-lg-none pl--6">
              <span onClick={this.menuTrigger} className="menutrigger text-white">
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;