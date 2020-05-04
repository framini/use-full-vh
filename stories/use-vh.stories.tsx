import React from 'react';

import { useVh } from '../src';

export default {
  title: 'useVh',
};

const commonStyles = {
  backgroundColor: '#e0f7fa',
  width: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#006064',
} as React.CSSProperties;

export const fullViewportHeight = () => {
  const fullVh = useVh();

  return (
    <div
      style={{
        ...commonStyles,
        height: `${fullVh}px`,
      }}
    >
      Viewport Height: {fullVh}
    </div>
  );
};

export const halfViewportHeight = () => {
  const vh = useVh(50);

  return (
    <div
      style={{
        ...commonStyles,
        height: `${vh}px`,
      }}
    >
      Viewport Height: {vh}
    </div>
  );
};
