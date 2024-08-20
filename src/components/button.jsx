import PropTypes from "prop-types";

const buttonType = {
  light: "bg-white text-orange border-orange",
  dark: "bg-orange text-white border-white",
};

export const Button = ({ title, clickHandler, type = "light", _style }) => {
  return (
    <button
      onClick={clickHandler}
      className={` ${buttonType[type]} font-medium border-2 rounded-md ${_style}}`}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  clickHandler: PropTypes.func,
  _style: PropTypes.string,
  type: PropTypes.string,
};
