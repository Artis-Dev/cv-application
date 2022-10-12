import PropTypes from 'prop-types';

function Contact(props) {
  const { title, value } = props;

  return (
    <p className="font-bold">
      {title}: <span className="font-normal">{value}</span>
    </p>
  );
}

Contact.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Contact;
