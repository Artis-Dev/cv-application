import PropTypes from 'prop-types';

import EditView from './edit/EditView';
import Preview from './preview/Preview';

function Cv(props) {
  const {
    cvData,
    editMode,
    handlePersonalChange,
    // handleSkillsetChange,
    // handleSkillChange,
  } = props;

  return (
    <div className="container mx-auto my-8 max-w-3xl bg-white py-8 px-16">
      {editMode ? (
        <EditView
          personalData={cvData.personal}
          handleChange={handlePersonalChange}
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
  // handleSkillsetChange: PropTypes.func.isRequired,
  // handleSkillChange: PropTypes.func.isRequired,
  cvData: PropTypes.shape({
    personal: PropTypes.shape({}),
    skillsets: PropTypes.arrayOf(PropTypes.shape({})),
    experience: PropTypes.arrayOf(PropTypes.shape({})),
    education: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default Cv;
