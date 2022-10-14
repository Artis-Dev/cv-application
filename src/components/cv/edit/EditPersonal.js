import PropTypes from 'prop-types';

import Input from '../../ui/Input';

function EditPersonal(props) {
  const { personalData, handleChange } = props;

  return (
    <div className="mb-4 border-b-2 border-slate-200">
      <p className="mb-4 font-lato text-xl font-bold uppercase">
        Personal information
      </p>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <Input
              id="firstName"
              placeholder="First name"
              handleChange={handleChange}
              value={personalData.firstName}
            />
          </div>
          <div className="mb-4">
            <Input
              id="lastName"
              placeholder="Last name"
              handleChange={handleChange}
              value={personalData.lastName}
            />
          </div>
        </div>
        <div className="mb-4">
          <Input
            id="title"
            placeholder="Title (e.g. Frontend Developer)"
            handleChange={handleChange}
            value={personalData.title}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <Input
              id="email"
              placeholder="Email"
              handleChange={handleChange}
              value={personalData.email}
              type="email"
            />
          </div>
          <div className="mb-4">
            <Input
              id="phone"
              placeholder="Phone"
              handleChange={handleChange}
              value={personalData.phone}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <Input
              id="linkedin"
              placeholder="LinkedIn username"
              handleChange={handleChange}
              value={personalData.linkedin}
            />
          </div>
          <div className="mb-4">
            <Input
              id="github"
              placeholder="GitHub username"
              handleChange={handleChange}
              value={personalData.github}
            />
          </div>
        </div>
        <div className="mb-4">
          <textarea
            className="w-full rounded border px-3 py-1.5 transition ease-in-out focus:border-slate-600 focus:outline-none"
            id="summary"
            placeholder="Write about yourself"
            onChange={handleChange}
            defaultValue={personalData.summary}
          />
        </div>
      </form>
    </div>
  );
}

EditPersonal.propTypes = {
  handleChange: PropTypes.func.isRequired,
  personalData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    title: PropTypes.string,
    summary: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
  }).isRequired,
};

export default EditPersonal;
