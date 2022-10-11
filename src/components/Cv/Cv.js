import PropTypes from 'prop-types';

import Contacts from './preview/Contacts';
import EditContacts from './edit/EditContacts';
import Heading from './preview/Heading';
import EditHeading from './edit/EditHeading';
import About from './preview/About';
import EditAbout from './edit/EditAbout';
import Skills from './preview/Skills';
import Experience from './preview/Experience';
import Education from './preview/Education';

function Cv(props) {
  const { cvData, editMode, contactChange } = props;
  if (editMode) {
    return (
      <div className="container mx-auto my-8 max-w-3xl bg-white py-8 px-16">
        <EditContacts
          contacts={cvData.contacts}
          contactChange={contactChange}
        />
        <EditHeading heading={cvData.heading} />
        <EditAbout about={cvData.about} />
        {/* <EditSkills skillsets={cvData.skillsets} />
        <EditExperience experience={cvData.experience} />
        <EditEducation education={cvData.education} /> */}
      </div>
    );
  }
  return (
    <div className="container mx-auto my-8 max-w-3xl bg-white py-8 px-16">
      <Contacts contacts={cvData.contacts} />
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
  contactChange: PropTypes.func.isRequired,
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
