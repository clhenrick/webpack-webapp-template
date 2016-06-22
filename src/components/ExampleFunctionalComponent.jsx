import React, { PropTypes } from 'react';

// an example stateless or functional component.
const ExampleFunctionalComponent = ({ onClick, children }) => (
  <div
    className='example-functional-component'
    onClick={onClick}>
    {children}
  </div>
);

// we can still tack on prop types to functional components
ExampleFunctionalComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ]).isRequired
};

export default ExampleFunctionalComponent;
