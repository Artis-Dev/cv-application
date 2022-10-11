import PropTypes from 'prop-types';

function EditHeading(props) {
  const { heading, handleChange } = props;

  return (
    <div className="mb-4 border-b-2 border-slate-900 pb-2">
      <input
        data-key="fullName"
        onChange={handleChange}
        className="mb-1 text-4xl font-bold"
        defaultValue={heading.fullName}
      />
      <input
        data-key="title"
        onChange={handleChange}
        className="text-2xl font-bold"
        defaultValue={heading.title}
      />
    </div>
  );
}

EditHeading.propTypes = {
  handleChange: PropTypes.func.isRequired,
  heading: PropTypes.shape({
    fullName: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default EditHeading;
