import PropTypes from 'prop-types';

import Contact from './Contact';

function ContactList(props) {
  const { contacts } = props;

  return (
    <div className="mb-4 flex gap-x-8 text-sm">
      <div className="w-1/2">
        <Contact title="Mail" value={contacts.mail} />
        <Contact title="Phone" value={contacts.phone} />
      </div>
      <div className="w-1/2">
        <Contact title="LinkedIn" value={contacts.linkedin} />
        <Contact title="GitHub" value={contacts.github} />
      </div>
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.shape({
    mail: PropTypes.string,
    phone: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
  }).isRequired,
};

export default ContactList;
