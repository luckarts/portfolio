import React, { useEffect, useState } from 'react';
import { Loader } from 'components/shared';

const LazyComponent = ({ src, placeholder, children, alt, className }) => {
  let observer;
  const [child, setChild] = useState('');
  const [imageRef, setImageRef] = useState();
  const [hide, setHide] = useState(null);

  useEffect(() => {
    let didCancel = false;
    let option = {
      threshold: 0.2,
      rootMargin: '75%'
    };

    if (imageRef) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver((obersvables) => lazyload(obersvables, observer, didCancel), option);

        setHide(true);
        observer.observe(imageRef);
      } else {
        setChild(children);
      }
    }
    return () => {
      didCancel = true;
      setHide(false);
      setChild(children);
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef, setChild]);

  const lazyload = async (obersvables, observer, didCancel) => {
    obersvables.forEach((obersvable) => {
      if (!didCancel && (obersvable.intersectionRatio > 1 || obersvable.isIntersecting)) {
        setHide(false);
        console.log(obersvable);
        setChild(children);
        console.log('visible');
        observer.unobserve(imageRef);
      }
    });
  };

  return (
    <div ref={setImageRef} className={`${hide ? 'opacity-0' : 'fadeSlide animationD-60s'} ${className}  `}>
      {child ? child : <Loader bg="bg-primary" />}
    </div>
  );
};
export default LazyComponent;
