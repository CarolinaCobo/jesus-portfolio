import Footer from "../../components/Footer/Footer";
import NavbarProjects from "../../components/Nav/NavBarProjects";

import Contact from "../../components/Contact/Contact";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <>
      <NavbarProjects />
      <div className={styles["body"]}>
        <Contact />
      </div>
      <Footer />
    </>
  );
}
