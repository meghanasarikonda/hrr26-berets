import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const LoadingCircle = () => (
  <div className="loading-circle">
    <CircularProgress size={80} thickness={5} />
  </div>
);

export default LoadingCircle;