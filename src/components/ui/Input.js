import PropTypes from 'prop-types';

function Input(props) {
  const { handleChange, type, id, placeholder, value } = props;

  return (
    <input
      type={type}
      className="w-full rounded border px-3 py-1.5 transition focus:border-slate-600 focus:outline-none"
      id={id}
      placeholder={placeholder}
      onChange={handleChange}
      defaultValue={value}
    />
  );
}

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  id: '',
};

export default Input;
