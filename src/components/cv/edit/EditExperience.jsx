import PropTypes from 'prop-types';

import Input from '../../ui/Input';
import Button from '../../ui/Button';

function EditExperience(props) {
  const { experienceData, handleChange, handleDelete, handleAdd } = props;

  return (
    <div className="mb-4 border-b-2 border-slate-200 pb-4">
      <p className="mb-4 font-lato text-xl font-bold uppercase">Experience</p>
      <form>
        {experienceData.map((position) => (
          <div
            key={position.id}
            data-position-id={position.id}
            className="pb-4"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="md:mb-4" data-position-id={position.id}>
                <Input
                  id="position"
                  placeholder="Title"
                  handleChange={handleChange}
                  value={position.position}
                />
              </div>
              <div className="mb-4" data-position-id={position.id}>
                <Input
                  id="company"
                  placeholder="Company name"
                  handleChange={handleChange}
                  value={position.company}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="md:mb-4" data-position-id={position.id}>
                <Input
                  id="from"
                  placeholder="Start date"
                  handleChange={handleChange}
                  value={position.from}
                />
              </div>
              <div className="mb-4" data-position-id={position.id}>
                <Input
                  id="to"
                  placeholder="End date"
                  handleChange={handleChange}
                  value={position.to}
                />
              </div>
            </div>
            <div className="mb-4" data-position-id={position.id}>
              <textarea
                className="w-full rounded border px-3 py-1.5 transition ease-in-out focus:border-slate-600 focus:outline-none"
                id="description"
                placeholder="Description"
                onChange={handleChange}
                value={position.description}
              />
            </div>
            <Button
              value="Remove position"
              size="small"
              handleClick={handleDelete}
            />
          </div>
        ))}
        <Button value="Add position" handleClick={handleAdd} />
      </form>
    </div>
  );
}

EditExperience.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
  experienceData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default EditExperience;
