import PropTypes from 'prop-types';
import EditPersonal from './EditPersonal';
import EditSkills from './EditSkills';

function EditView(props) {
  const {
    cvData,
    handlePersonalChange,
    handleSkillsetChange,
    handleSkillChange,
    handleSkillsetDelete,
    handleSkillDelete,
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
  cvData: PropTypes.shape({
    personal: PropTypes.shape({}),
    skillsets: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default EditView;
