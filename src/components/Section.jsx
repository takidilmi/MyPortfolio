import React from 'react';
import { useInView } from 'react-intersection-observer';

const Section = ({ id, children }) => {
  const threshold = id === 'projects' ? 0.3 : 0.9;
  const { ref, inView } = useInView({
    threshold: threshold, // The section is in view when it's 90% in the viewport, or 20% for the 'projects' section
  });

  React.useEffect(() => {
    if (inView) {
      window.history.replaceState(null, null, `#${id}`);
    }
  }, [inView, id]);

  return (
    <div id={id} ref={ref}>
      {children}
    </div>
  );
};

export default Section;
