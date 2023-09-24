import React from 'react';
import PropTypes from 'prop-types';

const PropTypesComponent = ({ texto }) => {
  return (
    <div>
      {texto}
    </div>
  );
};

PropTypesComponent.propTypes = {
  texto: PropTypes.string.isRequired
};

export default PropTypesComponent;