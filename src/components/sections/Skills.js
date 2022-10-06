import PropTypes from 'prop-types';

function Skills(props) {
  const { skillsets } = props;

  return (
    <div className="mb-4">
      <p className="pb-1 text-xl font-bold">SKILLS</p>
      <div>
        {skillsets.map((skillset) => {
          return (
            <p key={skillset.id} className="font-bold">
              {skillset.title}:
              <span className="ml-2 font-normal">
                {skillset.skills.map((skill, i) => {
                  if (i + 1 !== skillset.skills.length) {
                    return <span key={skill}>{skill}, </span>;
                  }
                  return <span key={skill}>{skill}</span>;
                })}
              </span>
            </p>
          );
        })}
      </div>
    </div>
  );
}

Skills.propTypes = {
  skillsets: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Skills;
