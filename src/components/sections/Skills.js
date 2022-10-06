import PropTypes from 'prop-types';

function Skills(props) {
  const { skillsets } = props;

  return (
    <div className="mb-2">
      <p className="pb-1 text-xl font-bold">SKILLS</p>
      <div>
        {skillsets.map((skillset) => {
          return (
            <p className="font-bold">
              {skillset.title}:
              <span className="ml-2 font-normal">
                {skillset.skills.map((skill, i) => {
                  if (i + 1 !== skillset.skills.length) {
                    return <span>{skill}, </span>;
                  }
                  return <span>{skill}</span>;
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
  skillsets: PropTypes.shape([]).isRequired,
};

export default Skills;
