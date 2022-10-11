import PropTypes from 'prop-types';

function EditContacts(props) {
  const { contacts, contactChange } = props;

  return (
    <div className="mb-4 flex gap-x-8 text-sm">
      <div className="w-1/2">
        <div className="mb-1">
          <span className="font-bold">Mail: </span>
          <input
            data-value="mail"
            onChange={contactChange}
            type="text"
            className="font-normal"
            defaultValue={contacts.mail}
          />
        </div>
        <div className="mb-1">
          <span className="font-bold">Phone: </span>
          <input
            data-value="phone"
            onChange={contactChange}
            type="text"
            className="font-normal"
            defaultValue={contacts.phone}
          />
        </div>
      </div>
      <div className="w-1/2">
        <div className="mb-1">
          <span className="font-bold">LinkedIn: </span>
          <input
            data-value="linkedin"
            onChange={contactChange}
            type="text"
            className="font-normal"
            defaultValue={contacts.linkedin}
          />
        </div>
        <div className="mb-1">
          <span className="font-bold">GitHub: </span>
          <input
            data-value="github"
            onChange={contactChange}
            type="text"
            className="font-normal"
            defaultValue={contacts.github}
          />
        </div>
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
