import PropTypes from 'prop-types';

import Contact from './Contact';

function ContactList(props) {
  const { personalData } = props;

  return (
    <div className="mb-4 flex gap-x-8 text-sm">
      <div className="w-1/2">
        <Contact title="Mail" value={personalData.email} />
        <Contact title="Phone" value={personalData.phone} />
      </div>
      <div className="w-1/2">
        <Contact title="LinkedIn" value={personalData.linkedin} />
        <Contact title="GitHub" value={personalData.github} />
      </div>
    </div>
  );
}

ContactList.propTypes = {
  personalData: PropTypes.shape({
    email: PropTypes.string,
    phone: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
  }).isRequired,
};

export default ContactList;
