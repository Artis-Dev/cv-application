import PropTypes from 'prop-types';

function Contacts(props) {
  const { cvData } = props;

  console.log(cvData.contacts);

  return (
    <div className="flex gap-x-8 text-sm">
      <div className="w-1/2">
        <p className="font-bold">
          Mail: <span className="font-normal">{cvData.contacts.mail}</span>
        </p>
        <p className="font-bold">
          Phone: <span className="font-normal">{cvData.contacts.phone}</span>
        </p>
      </div>
      <div className="w-1/2">
        <p className="font-bold">
          LinkedIn:{' '}
          <span className="font-normal">{cvData.contacts.linkedin}</span>
        </p>
        <p className="font-bold">
          GitHub: <span className="font-normal">{cvData.contacts.github}</span>
        </p>
      </div>
    </div>
  );
}

Contacts.propTypes = {
  cvData: PropTypes.shape({
    contacts: PropTypes.shape({
      mail: PropTypes.string,
      phone: PropTypes.string,
      linkedin: PropTypes.string,
      github: PropTypes.string,
    }),
  }).isRequired,
};

export default Contacts;
