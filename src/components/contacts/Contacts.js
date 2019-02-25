import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContacts } from "../../actions/contactActions";

class Contacts extends Component {
  deleteContact = id => {
    const { contacts } = this.state;
    this.setState({ contacts: contacts.filter(x => x.id !== id) });
  };

  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact List</span>
        </h1>
        {contacts.map(contact => (
          <Contact
            contact={contact}
            key={contact.id}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

export default connect(
  mapStateToProps,
  { getContacts }
)(Contacts);
