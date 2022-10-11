import PropTypes from 'prop-types';

import Button from '../../UI/Button';

function EditSkills(props) {
  const { skillsets, handleChange } = props;

  return (
    <div className="mb-4">
      <p className="mb-1 text-xl font-bold uppercase">Skills</p>
      <div className="mb-2">
        {skillsets.map((skillset) => {
          return (
            <div key={skillset.id} className="mb-1 flex flex-col font-bold">
              <div data-key={skillset.id}>
                <Button value="remove" size="small" />
                <input
                  className="ml-2 mb-1"
                  defaultValue={skillset.title}
                  onChange={handleChange}
                />
              </div>
              <div className="ml-7 font-normal">
                {skillset.skills.map((skill) => {
                  return (
                    <p key={skill}>
                      <Button value="remove" size="small" />
                      <input className="ml-2 mb-1" defaultValue={skill} />
                    </p>
                  );
                })}
                <Button value="Add skill" size="small" />
              </div>
            </div>
          );
        })}
      </div>
      <Button value="Add skills category" size="big" />
    </div>
  );
}

EditSkills.propTypes = {
  handleChange: PropTypes.func.isRequired,
  skillsets: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default EditSkills;

// return (
//   <p key={skillset.id} className="mb-1 flex font-bold">
//     <Button value="remove" size="small" />
//     <input className="ml-2" defaultValue={skillset.title} />
//     <span className="ml-2 font-normal">
//       {skillset.skills.map((skill) => {
//         return (
//           <span key={skill}>
//             <input className="mr-1" defaultValue={skill} />
//             <Button value="remove" size="small" />
//           </span>
//         );
//       })}
//       <br />
//       <Button value="Add skill" size="small" />
//     </span>
//   </p>
// );
