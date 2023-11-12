import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  formNameId = nanoid();
  numberId = nanoid();

  state = {
    name: '',
    number: '',
  };

  onChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmitAddContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={css.contact_form} onSubmit={this.handleSubmit}>
        <div className={css.contact_form_container}>
          <label htmlFor={this.formNameId} className={css.contact_label}>
            Name
          </label>
          <input
            id={this.formNameId}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            required
            className={css.contact_input}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </div>

        <div className={css.contact_form_container}>
          <label htmlFor={this.numberId} className={css.contact_label}>
            Number
          </label>
          <input
            id={this.numberId}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.onChange}
            required
            placeholder="+380"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            className={css.contact_input}
          />
        </div>
        <button type="submit" className={css.contact_btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
