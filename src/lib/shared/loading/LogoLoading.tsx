import React from 'react';

import './logoLoading.scss';

export const LogoLoading: React.FC = () => {
  return (
    <div className="axr-loading-container">
      <div className="axr-strip-loading axr-strip-one" />
      <div className="axr-strip-loading axr-strip-two" />
      <div className="axr-strip-loading axr-strip-three" />
    </div>
  );
};
