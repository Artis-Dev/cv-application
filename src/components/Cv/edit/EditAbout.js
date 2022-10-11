import PropTypes from 'prop-types';

function EditAbout(props) {
  const { about, handleChange } = props;

  return (
    <div className="mb-4">
      <p className="mb-1 text-xl font-bold uppercase">About</p>
      <textarea
        data-key="summary"
        className="w-full"
        defaultValue={about.summary}
        onChange={handleChange}
      />
    </div>
  );
}

EditAbout.propTypes = {
  handleChange: PropTypes.func.isRequired,
  about: PropTypes.shape({
    summary: PropTypes.string,
  }).isRequired,
};

export default EditAbout;
