import PropTypes from 'prop-types';

function Experience(props) {
  const { experience } = props;
  return (
    <div className="mb-2">
      <p className="pb-1 text-xl font-bold">EXPERIENCE</p>
      <div>
        {experience.map((job) => {
          return (
            <div className="mb-2">
              <p className="font-bold">
                {job.position} -{' '}
                <span className="font-normal italic">{job.company}</span>
              </p>
              <p className="text-sm">
                {job.from} - {job.to}
              </p>
              <p>{job.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Experience.propTypes = {
  experience: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Experience;
