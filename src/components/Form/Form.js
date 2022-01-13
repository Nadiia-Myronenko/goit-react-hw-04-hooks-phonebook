import { useState } from "react";
import { ContactsForm, InputField, Button } from "./Form.styled";
import PropTypes from "prop-types";

const Form = ({ onSubmitProp }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const handleInputChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "number":
        setNumber(event.target.value);
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setName("");
    setNumber("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    onSubmitProp({ name, number });
    reset();
  };

  return (
    <ContactsForm onSubmit={handleSubmit}>
      <label>
        Name
        <InputField
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Phone
        <InputField
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInputChange}
        />
      </label>
      <Button type="submit">Add contact</Button>
    </ContactsForm>
  );
};
Form.propTypes = {
  onSubmitProp: PropTypes.func,
};
export default Form;
