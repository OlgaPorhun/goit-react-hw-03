import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
import styles from "./Contact.module.css";

const Contact = ({ contact, onDeleteContact }) => (
  <li className={styles.item}>
    <div className={styles.info}>
      <p>
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
        {contact.name}
      </p>
      <p>
        <FontAwesomeIcon icon={faPhone} className={styles.icon} />
        {contact.number}
      </p>
    </div>
    <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
  </li>
);

export default Contact;
