import PropTypes from 'prop-types';

function About(props) {
  const { about } = props;

  return (
    <div className="mb-4">
      <p className="mb-1 text-xl font-bold uppercase">About</p>
      <p>{about.summary}</p>
    </div>
  );
}

About.propTypes = {
  about: PropTypes.shape({
    summary: PropTypes.string,
  }).isRequired,
};

export default About;
