import PropTypes from 'prop-types';

function About(props) {
  const { personalData } = props;

  return (
    <div className="mb-4">
      <p className="mb-1 font-lato text-xl font-bold uppercase">About</p>
      <p>{personalData.summary}</p>
    </div>
  );
}

About.propTypes = {
  personalData: PropTypes.shape({
    summary: PropTypes.string,
  }).isRequired,
};

export default About;
