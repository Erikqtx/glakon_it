const NewsLetter = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default form submission behavior
    // handle form submission logic
  };

  return (
    <form onClick={handleSubmit} className="position-relative">
      <input type="email" placeholder="Ihre E-Mail Adresse" required />
      <button className="tran3s fw-500 position-absolute">Senden</button>
    </form>
  );
};

export default NewsLetter;
