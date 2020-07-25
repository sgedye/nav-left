import React from 'react';
import styles from "../assets/scss/contact.module.scss";

const Contact = () => (
  <section className="page-wrapper">
    <h1 className="section-title">We'd love to hear from you:</h1>
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Contact Me</h2>
        <h3 className={styles.formSubtitle}>Please fill out the form below:</h3>
      </div>
      <div className={styles.postalColours}></div>
      <div className={styles.formBody}>

        <div id="form-error"></div>

        <form id="contact-form" action="/" method="GET">
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <label className={styles.formLabel} htmlFor="name">Name:</label>
              <input id='form-name' className={styles.formInput} type="text" name="name" required placeholder="Enter your name" />
            </li>
            <li className={styles.listItem}>
              <label className={styles.formLabel} htmlFor="email">Email:</label>
              <input id='form-email' className={styles.formInput} type="email" name="email" required placeholder="Enter your email" />
            </li>
            <li className={styles.listItem}>
              <div className={styles.formDivider}></div>
            </li>
            <li className={styles.listItem}>
              <label className={styles.formLabel} htmlFor="comments">Comments:</label>
              <textarea className={styles.formTextArea} cols="16" rows="3" required name="comments"></textarea>
            </li>
            <li className={styles.listItem}>
              <input className={styles.submitButton} type="submit" value="Submit" />
              {/* <small>or press <strong>enter</strong></small> */}
            </li>
          </ul>
        </form>
      </div>
      <div className={styles.postalColours}></div>
    </div>
  </section>
);

export default Contact;