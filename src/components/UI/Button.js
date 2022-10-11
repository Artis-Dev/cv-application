import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Button(props) {
  const { clickEvent, size, value } = props;

  let buttonSize;
  let buttonValue = value;

  if (size === 'small') {
    buttonSize = 'py-1 px-2 text-xs';
  } else if (size === 'big') {
    buttonSize = 'py-2 px-3';
  }

  if (value === 'remove') {
    buttonValue = <FontAwesomeIcon icon={faTimes} />;
  }

  return (
    <button
      onClick={clickEvent}
      className={`${buttonSize} rounded bg-slate-700 font-bold uppercase text-slate-100 duration-200 hover:bg-slate-600`}
      type="button"
    >
      {buttonValue}
    </button>
  );
}

Button.propTypes = {
  clickEvent: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Button;
