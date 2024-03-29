import PropTypes from 'prop-types';

function Experience(props) {
  const { experience } = props;
  return (
    <div className="mb-4">
      <p className="mb-1 font-lato text-xl font-bold uppercase">Experience</p>
      <div>
        {experience.map((job) => (
          <div key={job.id} className="mb-2">
            <p className="font-bold">
              {job.position} -{' '}
              <span className="font-normal italic">{job.company}</span>
            </p>
            <p className="text-sm">
              {job.from} - {job.to}
            </p>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

Experience.propTypes = {
  experience: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Experience;
