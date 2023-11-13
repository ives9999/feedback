import { PropTypes } from 'prop-types'
import React from 'react'

function Button({ children, version, type, isDisable }) {
  return (
    <button type={type} disabled={isDisable} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisable: false,
}

Button.propTypes = {
    children: PropTypes.string,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisable: PropTypes.bool,
}
export default Button
