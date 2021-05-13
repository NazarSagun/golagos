import React, { useState } from 'react';
import axios from '../../../../../api';

import Individual from './Individuals/Individual';

import './index.css';

const PanelMainSection = () => {

  return (
    <React.Fragment>
      <Individual />
    </React.Fragment>
  );
};

export default PanelMainSection;