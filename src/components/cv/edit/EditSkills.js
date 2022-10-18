import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '../../ui/Button';
import Input from '../../ui/Input';

function EditSkills(props) {
  const {
    skillsetsData,
    handleSkillsetChange,
    handleSkillChange,
    handleSkillsetDelete,
    handleSkillDelete,
    handleSkillsetAdd,
  } = props;

  return (
    <div className="mb-4 border-b-2 border-slate-200 pb-4">
      <p className="mb-4 font-lato text-xl font-bold uppercase">Skills</p>
      <form>
        {skillsetsData.map((skillset) => {
          return (
            <div key={skillset.id} className="mb-1 flex flex-col">
              <div data-skillset-id={skillset.id} className="mb-4 flex gap-4">
                <Input
                  placeholder="Skill category"
                  handleChange={handleSkillsetChange}
                  value={skillset.title}
                />
                <Button
                  value="remove"
                  size="small"
                  handleClick={handleSkillsetDelete}
                />
              </div>
              <div className="pb-4 font-normal">
                {skillset.skills.map((skill) => {
                  return (
                    <div
                      key={skill.id}
                      data-skillset-id={skillset.id}
                      data-skill-id={skill.id}
                      className="ml-2 mb-4 flex items-stretch gap-4"
                    >
                      <FontAwesomeIcon
                        className="self-center text-slate-700"
                        size="xs"
                        icon={faCircle}
                      />
                      <Input
                        placeholder="Skill"
                        handleChange={handleSkillChange}
                        value={skill.title}
                      />
                      <Button
                        value="remove"
                        size="small"
                        handleClick={handleSkillDelete}
                      />
                    </div>
                  );
                })}
                <Button value="Add skill" size="small" />
              </div>
            </div>
          );
        })}
        <Button value="Add skills category" handleClick={handleSkillsetAdd} />
      </form>
    </div>
  );
}

EditSkills.propTypes = {
  handleSkillsetChange: PropTypes.func.isRequired,
  handleSkillChange: PropTypes.func.isRequired,
  handleSkillsetDelete: PropTypes.func.isRequired,
  handleSkillDelete: PropTypes.func.isRequired,
  handleSkillsetAdd: PropTypes.func.isRequired,
  skillsetsData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default EditSkills;
