import PropTypes from 'prop-types';

function Contacts(props) {
  const { contacts } = props;

  return (
    <div className="mb-4 flex gap-x-8 text-sm">
      <div className="w-1/2">
        <p className="font-bold">
          Mail: <span className="font-normal">{contacts.mail}</span>
        </p>
        <p className="font-bold">
          Phone: <span className="font-normal">{contacts.phone}</span>
        </p>
      </div>
      <div className="w-1/2">
        <p className="font-bold">
          LinkedIn: <span className="font-normal">{contacts.linkedin}</span>
        </p>
        <p className="font-bold">
          GitHub: <span className="font-normal">{contacts.github}</span>
        </p>
      </div>
    </div>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.shape({
    mail: PropTypes.string,
    phone: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
  }).isRequired,
};

export default Contacts;
