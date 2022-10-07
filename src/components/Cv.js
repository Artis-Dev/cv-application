import PropTypes from 'prop-types';

import Contacts from './sections/Contacts';
import EditableContacts from './sections/EditableContacts';
import Heading from './sections/Heading';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';

function Cv(props) {
  const { cvData, editMode } = props;
  if (editMode) {
    return (
      <div className="container mx-auto my-8 max-w-3xl bg-white py-8 px-16">
        <EditableContacts contacts={cvData.contacts} />
        {/* <Heading heading={cvData.heading} />
        <About about={cvData.about} />
        <Skills skillsets={cvData.skillsets} />
        <Experience experience={cvData.experience} />
        <Education education={cvData.education} /> */}
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
