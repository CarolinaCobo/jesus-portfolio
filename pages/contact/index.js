import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Nav/NavBar";
import Contact from "../../components/Contact/Contact";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className={styles["body"]}>
        <Contact />
      </div>
      <Footer />
    </>
  );
}
