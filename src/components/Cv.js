import PropTypes from 'prop-types';

import Contacts from './sections/Contacts';
import Heading from './sections/Heading';
import About from './sections/About';
import Skills from './sections/Skills';

function Cv(props) {
  const { cvData } = props;

  return (
    <div className="container mx-auto my-8 max-w-3xl bg-white py-8 px-16">
      <Contacts contacts={cvData.contacts} />
      <Heading heading={cvData.heading} />
      <About about={cvData.about} />
      <Skills skillsets={cvData.skillsets} />
      {/* Experience */}
      {/* Education */}
    </div>
  );
}

Cv.propTypes = {
  cvData: PropTypes.shape({
    contacts: PropTypes.shape({}),
    heading: PropTypes.shape({}),
    about: PropTypes.shape({}),
    skillsets: PropTypes.shape([]),
  }).isRequired,
};

export default Cv;
