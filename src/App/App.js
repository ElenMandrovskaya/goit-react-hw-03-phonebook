import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import contacts from "../data/contacts.json";
import { Main, Section, MainTitle } from './App.styled';
import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { Filter } from "../components/Filter/Filter";
import { Title } from "../components/Title/Title";

export default class App extends Component {
  state = {
    contacts: contacts,
    filter: "",
  };

  addContact = ({ name, number }) => {
  if (this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return
    }
  const newContact = {
      id: uuidv4(),
      name,
      number,
    }
  this.setState(({contacts}) => (
    {
      contacts: [newContact, ...contacts]
    }))
  };

  checkContact = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  filterContact = (e) => {
    this.setState({ filter: e.currentTarget.value })
  };

  removeContact = (contactId) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter(contact => contact.id !== contactId)
    }))
  };

  render() {
    return (
      <Main>
        <MainTitle>Phonebook</MainTitle>
        <Section>
          <Title title={"Add contact"} />
          <ContactForm
            onSubmit={this.addContact} />   
        </Section>
        <Section>
          <Title title="Search contact" />
          <Filter
            filterValue={this.state.filter}
            onChange={this.filterContact} />
        </Section>
        <Section>
          <Title title="Contacts list"/>
          <ContactList
            contacts={this.checkContact()}
            onDelete={this.removeContact} />
        </Section>
      </Main>
    )
  };
}
