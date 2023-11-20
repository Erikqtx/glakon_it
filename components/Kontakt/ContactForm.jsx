import emailjs from "emailjs-com";
import React, { useState } from "react";

const ContactForm = () => {
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsButtonDisabled(true);

    if (event.target.fax.value) {
      console.log("Spam detected");
      setIsButtonDisabled(false);
      return;
    }

    emailjs
      .sendForm(
        "service_k1z30xc",
        "template_q3tgf0v",
        event.target,
        "user_uyDKYE4JjwAm7z2sXW8Zr"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFeedbackMessage("Nachricht erfolgreich gesendet!");
          event.target.reset(); // Optional: Reset the form after successful submission
        },
        (error) => {
          console.log(error.text);
          setFeedbackMessage(
            "Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut."
          );
        }
      );
  };

  return (
    <div className="form-style-one" data-aos="fade-up">
      <form onSubmit={handleSubmit}>
        <div className="messages" />
        <div className="row controls">
          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <input
                type="text"
                placeholder="Vor- und Nachname*"
                name="name"
                required="required"
                data-error="Bitte einen Namen eingeben."
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          {/* End .col-12 */}
          <input
            type="text"
            name="fax"
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />
          <div className="col-12">
            <div className="input-group-meta form-group mb-50">
              <input
                type="email"
                placeholder="Email Adresse*"
                name="email"
                required="required"
                data-error="Bitte eine gültige E-Mail Adresse eingeben."
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <input
                type="tel"
                placeholder="Telefonnummer (optional)"
                name="phone"
                data-error="Bitte eine Telefonnummer eingeben."
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          {/* End .col-12 */}
          <div className="col-12">
            <div className="input-group-meta form-group mb-50">
              <select
                name="subject"
                required="required"
                data-error="Bitte Betreff auswählen"
                className="form-control"
              >
                <option value="">Betreff auswählen*</option>
                <option value="Anfrage">Anfrage</option>
                <option value="Feedback">Feedback</option>
                <option value="Support">Support</option>
                <option value="Andere">Sonstiges</option>
              </select>
              <div className="help-block with-errors" />
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <textarea
                placeholder="Nachricht*"
                name="message"
                required="required"
                data-error="Bitte eine Nachricht eingeben."
                defaultValue={""}
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <button
              className="btn-twentyOne fw-500 tran3s d-block"
              disabled={isButtonDisabled}
            >
              Senden
            </button>
            {feedbackMessage && (
              <div className="feedback-message">{feedbackMessage}</div>
            )}
          </div>

          {/* End .col-12 */}
        </div>
        {/* End .row */}
      </form>
    </div>
  );
};

export default ContactForm;
