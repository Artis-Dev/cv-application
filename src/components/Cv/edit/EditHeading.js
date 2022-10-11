import PropTypes from 'prop-types';

function EditHeading(props) {
  const { heading } = props;

  return (
    <div className="mb-4 border-b-2 border-slate-900 pb-2">
      <input
        className="mb-1 text-4xl font-bold"
        defaultValue={heading.fullName}
      />
      <input className="text-2xl font-bold" defaultValue={heading.title} />
    </div>
  );
}

EditHeading.propTypes = {
  heading: PropTypes.shape({
    fullName: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default EditHeading;
