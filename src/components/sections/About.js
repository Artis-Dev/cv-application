import PropTypes from 'prop-types';

function About(props) {
  const { about } = props;

  return (
    <div className="my-4 pb-2">
      <p className="pb-1 text-xl font-bold">ABOUT</p>
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
