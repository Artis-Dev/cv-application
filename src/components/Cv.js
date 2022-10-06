import PropTypes from 'prop-types';

import Contacts from './sections/Contacts';

function Cv(props) {
  const { cvData } = props;

  return (
    <div className="container mx-auto my-8 max-w-3xl bg-white py-8 px-16">
      <Contacts contacts={cvData.contacts} />
      {/* Heading */}
      {/* About */}
      {/* Skills */}
      {/* Experience */}
      {/* Education */}
    </div>
  );
}

Cv.propTypes = {
  cvData: PropTypes.shape({
    contacts: PropTypes.shape({}),
  }).isRequired,
};

export default Cv;
