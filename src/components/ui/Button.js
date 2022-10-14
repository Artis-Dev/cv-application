import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Button(props) {
  const { handleClick, size, value } = props;

  let buttonSize;
  let buttonValue = value;

  if (size === 'small') {
    buttonSize = 'text-xs';
  }

  if (value === 'remove') {
    buttonValue = <FontAwesomeIcon icon={faTimes} pointerEvents="none" />;
  }

  return (
    <button
      onClick={handleClick}
      className={`${buttonSize} rounded bg-slate-700 py-2 px-4 font-bold uppercase text-slate-100 duration-200 hover:bg-slate-600`}
      type="button"
    >
      {buttonValue}
    </button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  size: PropTypes.string,
};

Button.defaultProps = {
  size: null,
};

export default Button;
