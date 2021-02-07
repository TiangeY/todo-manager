import React from "react";
import PropTypes from "prop-types";

const ShowStateLink = ({ children, active, handleTodosShowState }) => {
  if (active) return <span className="state-item-span">{children}</span>;
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      className="state-item-link"
      href=""
      onClick={(e) => {
        e.preventDefault(); //不在 mapDispatchToProps 里阻止？？
        handleTodosShowState(); //（）
      }}
    >
      {children}
    </a>
  );
};

ShowStateLink.propTypes = {
  children: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  handleTodosShowState: PropTypes.func.isRequired,
};

export default ShowStateLink;
