import PropTypes from 'prop-types';

function Education(props) {
  const { education } = props;
  return (
    <div className="mb-4">
      <p className="mb-1 font-lato text-xl font-bold uppercase">Education</p>
      <div>
        {education.map((edu) => {
          return (
            <div key={edu.id} className="mb-2">
              <p className="font-bold">
                {edu.field} -{' '}
                <span className="font-normal italic">{edu.school}</span>
              </p>
              <p className="text-sm">
                {edu.from} - {edu.to}
              </p>
              <p>{edu.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Education.propTypes = {
  education: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Education;
