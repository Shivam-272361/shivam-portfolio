// components/BlurBlob.jsx
import React from 'react';
import PropTypes from 'prop-types';

const BlurBlob = ({ position, size }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="pointer-events-none absolute"
      style={{
        top,
        left,
        width,
        height,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="h-full w-full rounded-full opacity-70 blur-3xl animate-blob"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.35) 0%, rgba(45,212,191,0.24) 40%, rgba(59,130,246,0.08) 70%, transparent 100%)",
        }}
      />
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;
