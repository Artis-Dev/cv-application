import PropTypes from 'prop-types';

import ContactList from './preview/ContactList';
import EditContactList from './edit/EditContactList';
import Heading from './preview/Heading';
import EditHeading from './edit/EditHeading';
import About from './preview/About';
import EditAbout from './edit/EditAbout';
import Skills from './preview/Skills';
import EditSkills from './edit/EditSkills';
import Experience from './preview/Experience';
import Education from './preview/Education';

function Cv(props) {
  const {
    cvData,
    editMode,
    handleContactChange,
    handleHeadingChange,
    handleAboutChange,
    handleSkillsetChange,
    handleSkillChange,
  } = props;

  if (editMode) {
    return (
      <div className="container mx-auto my-8 max-w-3xl bg-white py-8 px-16">
        <EditContactList
          contacts={cvData.contacts}
          handleChange={handleContactChange}
        />
        <EditHeading
          heading={cvData.heading}
          handleChange={handleHeadingChange}
        />
        <EditAbout about={cvData.about} handleChange={handleAboutChange} />
        <EditSkills
          skillsets={cvData.skillsets}
          handleSkillsetChange={handleSkillsetChange}
          handleSkillChange={handleSkillChange}
        />
        {/* <EditExperience experience={cvData.experience} />
        <EditEducation education={cvData.education} /> */}
      </div>
    );
  }
  return (
    <div className="container mx-auto my-8 max-w-3xl bg-white py-8 px-16">
      <ContactList contacts={cvData.contacts} />
      <Heading heading={cvData.heading} />
      <About about={cvData.about} />
      <Skills skillsets={cvData.skillsets} />
      <Experience experience={cvData.experience} />
      <Education education={cvData.education} />
    </div>
  );
}

Cv.propTypes = {
  editMode: PropTypes.bool.isRequired,
  handleContactChange: PropTypes.func.isRequired,
  handleHeadingChange: PropTypes.func.isRequired,
  handleAboutChange: PropTypes.func.isRequired,
  handleSkillsetChange: PropTypes.func.isRequired,
  handleSkillChange: PropTypes.func.isRequired,
  cvData: PropTypes.shape({
    contacts: PropTypes.shape({}),
    heading: PropTypes.shape({}),
    about: PropTypes.shape({}),
    skillsets: PropTypes.arrayOf(PropTypes.shape({})),
    experience: PropTypes.arrayOf(PropTypes.shape({})),
    education: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default Cv;
