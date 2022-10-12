import PropTypes from 'prop-types';

import EditContact from './EditContact';

function EditContactList(props) {
  const { contacts, handleChange } = props;

  return (
    <div className="mb-4 flex gap-x-8 text-sm">
      <div className="w-1/2">
        <EditContact
          title="Mail"
          value={contacts.mail}
          handleChange={handleChange}
        />
        <EditContact
          title="Phone"
          value={contacts.phone}
          handleChange={handleChange}
        />
      </div>
      <div className="w-1/2">
        <EditContact
          title="LinkedIn"
          value={contacts.linkedin}
          handleChange={handleChange}
        />
        <EditContact
          title="GitHub"
          value={contacts.github}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

EditContactList.propTypes = {
  handleChange: PropTypes.func.isRequired,
  contacts: PropTypes.shape({
    mail: PropTypes.string,
    phone: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
  }).isRequired,
};

export default EditContactList;
