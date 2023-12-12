import PropTypes from 'prop-types';

import ContactList from './ContactList';
import Heading from './Heading';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';

function Preview(props) {
  const { cvData } = props;

  return (
    <>
      <ContactList personalData={cvData.personal} />
      <Heading personalData={cvData.personal} />
      <About personalData={cvData.personal} />
      <Skills skillsets={cvData.skillsets} />
      <Experience experience={cvData.experience} />
      <Education education={cvData.education} />
    </>
  );
}

Preview.propTypes = {
  cvData: PropTypes.shape({
    personal: PropTypes.shape({}),
    skillsets: PropTypes.arrayOf(PropTypes.shape({})),
    experience: PropTypes.arrayOf(PropTypes.shape({})),
    education: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default Preview;
