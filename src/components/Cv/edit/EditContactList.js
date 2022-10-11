import PropTypes from 'prop-types';

import EditContact from './EditContact';

function EditContacts(props) {
  const { contacts, contactChange } = props;

  return (
    <div className="mb-4 flex gap-x-8 text-sm">
      <div className="w-1/2">
        <EditContact
          title="Mail"
          value={contacts.mail}
          contactChange={contactChange}
        />
        <EditContact
          title="Phone"
          value={contacts.phone}
          contactChange={contactChange}
        />
      </div>
      <div className="w-1/2">
        <EditContact
          title="LinkedIn"
          value={contacts.linkedin}
          contactChange={contactChange}
        />
        <EditContact
          title="GitHub"
          value={contacts.github}
          contactChange={contactChange}
        />
      </div>
    </div>
  );
}

EditContacts.propTypes = {
  contactChange: PropTypes.func.isRequired,
  contacts: PropTypes.shape({
    mail: PropTypes.string,
    phone: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
  }).isRequired,
};

export default EditContacts;
