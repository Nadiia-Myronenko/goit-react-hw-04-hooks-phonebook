import { Component } from "react";
import { ContactsForm, InputField, Button } from "./Form.styled";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };
  handleInputChange = (event) => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };
  reset = () => {
    this.setState({ name: "", number: "" });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmitProp(this.state);
    event.currentTarget.reset();
  };

  render() {
    return (
      <ContactsForm onSubmit={this.handleSubmit}>
        <label>
          Name
          <InputField
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.inputValue}
            onChange={this.handleInputChange}
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
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </label>
        <Button type="submit">Add contact</Button>
      </ContactsForm>
    );
  }
}

export default Form;
