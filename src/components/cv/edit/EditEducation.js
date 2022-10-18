import PropTypes from 'prop-types';

import Input from '../../ui/Input';
import Button from '../../ui/Button';

function EditEducation(props) {
  const { educationData, handleChange, handleDelete, handleAdd } = props;

  return (
    <div className="mb-4 border-b-2 border-slate-200 pb-4">
      <p className="mb-4 font-lato text-xl font-bold uppercase">Experience</p>
      <form>
        {educationData.map((school) => {
          return (
            <div key={school.id} data-school-id={school.id} className="pb-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4" data-school-id={school.id}>
                  <Input
                    id="field"
                    placeholder="Field"
                    handleChange={handleChange}
                    value={school.field}
                  />
                </div>
                <div className="mb-4" data-school-id={school.id}>
                  <Input
                    id="school"
                    placeholder="School"
                    handleChange={handleChange}
                    value={school.school}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4" data-school-id={school.id}>
                  <Input
                    id="from"
                    placeholder="Start date"
                    handleChange={handleChange}
                    value={school.from}
                  />
                </div>
                <div className="mb-4" data-school-id={school.id}>
                  <Input
                    id="to"
                    placeholder="End date"
                    handleChange={handleChange}
                    value={school.to}
                  />
                </div>
              </div>
              <div className="mb-4" data-school-id={school.id}>
                <textarea
                  className="w-full rounded border px-3 py-1.5 transition ease-in-out focus:border-slate-600 focus:outline-none"
                  id="description"
                  placeholder="Description"
                  onChange={handleChange}
                  defaultValue={school.description}
                />
              </div>
              <Button
                value="Remove education"
                size="small"
                handleClick={handleDelete}
              />
            </div>
          );
        })}
        <Button value="Add education" handleClick={handleAdd} />
      </form>
    </div>
  );
}

EditEducation.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
  educationData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default EditEducation;
