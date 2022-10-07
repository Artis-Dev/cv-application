import PropTypes from 'prop-types';

function Button(props) {
  const { toggleMode, editMode } = props;

  return (
    <button
      onClick={toggleMode}
      className="rounded bg-slate-700 py-2 px-3 font-bold uppercase text-slate-100 duration-200 hover:bg-slate-600"
      type="button"
    >
      {editMode ? 'Preview mode' : 'Edit mode'}
    </button>
  );
}

Button.propTypes = {
  editMode: PropTypes.bool.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

export default Button;
