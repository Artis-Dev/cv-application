import PropTypes from 'prop-types';

function Contact(props) {
  const { title, value, contactChange } = props;

  return (
    <div className="mb-1">
      <span className="font-bold">{title}: </span>
      <input
        data-value={title.toLowerCase()}
        onChange={contactChange}
        type="text"
        className="font-normal"
        defaultValue={value}
      />
    </div>
  );
}

Contact.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  contactChange: PropTypes.func.isRequired,
};

export default Contact;
