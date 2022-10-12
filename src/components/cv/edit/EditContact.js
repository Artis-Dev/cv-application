import PropTypes from 'prop-types';

function EditContact(props) {
  const { title, value, handleChange } = props;

  return (
    <div className="mb-1">
      <span className="font-bold">{title}: </span>
      <input
        data-key={title.toLowerCase()}
        onChange={handleChange}
        type="text"
        className="font-normal"
        defaultValue={value}
      />
    </div>
  );
}

EditContact.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default EditContact;
