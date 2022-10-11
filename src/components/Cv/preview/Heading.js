import PropTypes from 'prop-types';

function Heading(props) {
  const { heading } = props;

  return (
    <div className="mb-4 border-b-2 border-slate-900 pb-2">
      <p className="text-4xl font-bold">{heading.fullName}</p>
      <p className="text-2xl font-bold">{heading.title}</p>
    </div>
  );
}

Heading.propTypes = {
  heading: PropTypes.shape({
    fullName: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default Heading;
