import PropTypes from 'prop-types';
import EditPersonal from './EditPersonal';

function EditView(props) {
  const { personalData, handleChange } = props;

  return (
    <EditPersonal personalData={personalData} handleChange={handleChange} />
  );
}

EditView.propTypes = {
  handleChange: PropTypes.func.isRequired,
  personalData: PropTypes.shape({}).isRequired,
};

export default EditView;
