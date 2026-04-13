import React, { useEffect } from 'react';

const Seo = ({ title, description, metaName = 'description' }) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const selector = `meta[name="${metaName}"]`;
    let metaTag = document.querySelector(selector);

    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', metaName);
      document.head.appendChild(metaTag);
    }

    const previousContent = metaTag.getAttribute('content');
    metaTag.setAttribute('content', description);

    return () => {
      document.title = previousTitle;

      if (previousContent === null) {
        metaTag.removeAttribute('content');
      } else {
        metaTag.setAttribute('content', previousContent);
      }
    };
  }, [description, metaName, title]);

  return null;
};

export default Seo;
