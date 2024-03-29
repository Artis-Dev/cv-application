import PropTypes from 'prop-types';

import EditView from './edit/EditView';
import Preview from './preview/Preview';

function Cv(props) {
  const {
    cvData,
    editMode,
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
    <div className="container mx-auto my-8 max-w-3xl bg-white px-16 py-8">
      {editMode ? (
        <EditView
          cvData={cvData}
          handlePersonalChange={handlePersonalChange}
          handleSkillsetChange={handleSkillsetChange}
          handleSkillChange={handleSkillChange}
          handleSkillsetDelete={handleSkillsetDelete}
          handleSkillDelete={handleSkillDelete}
          handleSkillsetAdd={handleSkillsetAdd}
          handleSkillAdd={handleSkillAdd}
          handleExperienceChange={handleExperienceChange}
          handleExperienceDelete={handleExperienceDelete}
          handleExperienceAdd={handleExperienceAdd}
          handleEducationChange={handleEducationChange}
          handleEducationDelete={handleEducationDelete}
          handleEducationAdd={handleEducationAdd}
        />
      ) : (
        <Preview cvData={cvData} />
      )}
    </div>
  );
}

Cv.propTypes = {
  editMode: PropTypes.bool.isRequired,
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

export default Cv;
