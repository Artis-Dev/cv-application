import PropTypes from 'prop-types';

function Heading(props) {
  const { personalData } = props;

  return (
    <div className="mb-4 border-b-2 border-slate-200 pb-2">
      <p className="text-4xl font-bold">{`${personalData.firstName} ${personalData.lastName}`}</p>
      <p className="text-2xl font-bold">{personalData.title}</p>
    </div>
  );
}

Heading.propTypes = {
  personalData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default Heading;
