import React from 'react';

const ErrorIndicator = ({ error }: any = {}) => {
  return (
    <div>
      <b>Error!: </b>
      {error}
    </div>
  )
};

export default ErrorIndicator;
