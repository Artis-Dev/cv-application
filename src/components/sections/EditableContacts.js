import PropTypes from 'prop-types';

function EditableContacts(props) {
  const { contacts } = props;

  return (
    <div className="mb-4 flex gap-x-8 text-sm">
      <div className="w-1/2">
        <div className="mb-1">
          <span className="font-bold">Mail: </span>
          <input
            type="text"
            className="font-normal"
            defaultValue={contacts.mail}
          />
        </div>
        <div className="mb-1">
          <span className="font-bold">Phone: </span>
          <input
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
            type="text"
            className="font-normal"
            defaultValue={contacts.linkedin}
          />
        </div>
        <div className="mb-1">
          <span className="font-bold">GitHub: </span>
          <input
            type="text"
            className="font-normal"
            defaultValue={contacts.github}
          />
        </div>
      </div>
    </div>
  );
}

EditableContacts.propTypes = {
  contacts: PropTypes.shape({
    mail: PropTypes.string,
    phone: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
  }).isRequired,
};

export default EditableContacts;
