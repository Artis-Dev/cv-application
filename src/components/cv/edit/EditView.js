import PropTypes from 'prop-types';
import EditPersonal from './EditPersonal';
import EditSkills from './EditSkills';
import EditExperience from './EditExperience';
import EditEducation from './EditEducation';

function EditView(props) {
  const {
    cvData,
    handlePersonalChange,
    handleSkillsetChange,
    handleSkillChange,
    handleSkillsetDelete,
    handleSkillDelete,
    handleSkillsetAdd,
    handleSkillAdd,
    handleExperienceChange,
    handleExperienceDelete,
    handleExperienceAdd,
    handleEducationChange,
    handleEducationDelete,
    handleEducationAdd,
  } = props;

  return (
    <>
      <EditPersonal
        personalData={cvData.personal}
        handleChange={handlePersonalChange}
      />
      <EditSkills
        skillsetsData={cvData.skillsets}
        handleSkillsetChange={handleSkillsetChange}
        handleSkillChange={handleSkillChange}
        handleSkillsetDelete={handleSkillsetDelete}
        handleSkillDelete={handleSkillDelete}
        handleSkillsetAdd={handleSkillsetAdd}
        handleSkillAdd={handleSkillAdd}
      />
      <EditExperience
        experienceData={cvData.experience}
        handleChange={handleExperienceChange}
        handleDelete={handleExperienceDelete}
        handleAdd={handleExperienceAdd}
      />
      <EditEducation
        educationData={cvData.education}
        handleChange={handleEducationChange}
        handleDelete={handleEducationDelete}
        handleAdd={handleEducationAdd}
      />
    </>
  );
}

EditView.propTypes = {
  handlePersonalChange: PropTypes.func.isRequired,
  handleSkillsetChange: PropTypes.func.isRequired,
  handleSkillChange: PropTypes.func.isRequired,
  handleSkillsetDelete: PropTypes.func.isRequired,
  handleSkillDelete: PropTypes.func.isRequired,
  handleSkillsetAdd: PropTypes.func.isRequired,
  handleSkillAdd: PropTypes.func.isRequired,
  handleExperienceChange: PropTypes.func.isRequired,
  handleExperienceDelete: PropTypes.func.isRequired,
  handleExperienceAdd: PropTypes.func.isRequired,
  handleEducationChange: PropTypes.func.isRequired,
  handleEducationDelete: PropTypes.func.isRequired,
  handleEducationAdd: PropTypes.func.isRequired,
  cvData: PropTypes.shape({
    personal: PropTypes.shape({}),
    skillsets: PropTypes.arrayOf(PropTypes.shape({})),
    experience: PropTypes.arrayOf(PropTypes.shape({})),
    education: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default EditView;
