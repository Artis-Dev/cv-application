import PropTypes from 'prop-types';

function EditAbout(props) {
  const { personalData, handleChange } = props;

  return (
    <div className="mb-4">
      <p className="mb-1 text-xl font-bold uppercase">About</p>
      <textarea
        data-key="summary"
        className="w-full"
        defaultValue={personalData.summary}
        onChange={handleChange}
      />
    </div>
  );
}

EditAbout.propTypes = {
  handleChange: PropTypes.func.isRequired,
  personalData: PropTypes.shape({
    summary: PropTypes.string,
  }).isRequired,
};

export default EditAbout;
