import PropTypes from 'prop-types';

function EditableAbout(props) {
  const { about } = props;

  return (
    <div className="mb-4">
      <p className="mb-1 text-xl font-bold uppercase">About</p>
      <textarea className="w-full" defaultValue={about.summary} />
    </div>
  );
}

EditableAbout.propTypes = {
  about: PropTypes.shape({
    summary: PropTypes.string,
  }).isRequired,
};

export default EditableAbout;
