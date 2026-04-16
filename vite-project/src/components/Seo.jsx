import React, { useEffect } from 'react';

const setMetaContent = (selector, attributeName, attributeValue, content) => {
  let tag = document.querySelector(selector);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attributeName, attributeValue);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
};

const setLinkHref = (selector, relValue, href) => {
  let linkTag = document.querySelector(selector);

  if (!linkTag) {
    linkTag = document.createElement('link');
    linkTag.setAttribute('rel', relValue);
    document.head.appendChild(linkTag);
  }

  linkTag.setAttribute('href', href);
};

const setStructuredData = (id, data) => {
  let scriptTag = document.querySelector(`script[type="application/ld+json"][data-seo-id="${id}"]`);

  if (!scriptTag) {
    scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.setAttribute('data-seo-id', id);
    document.head.appendChild(scriptTag);
  }

  scriptTag.textContent = JSON.stringify(data);
};

const Seo = ({ title, description }) => {
  useEffect(() => {
    const canonicalUrl = window.location.href.split('#')[0];
    const siteName = 'Ritesh Gabale Portfolio';
    const imageUrl = `${window.location.origin}/social-preview.svg`;
    const twitterHandle = '@RiteshGabale007';

    document.title = title;
    setMetaContent('meta[name="description"]', 'name', 'description', description);
    setMetaContent('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaContent('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaContent('meta[property="og:site_name"]', 'property', 'og:site_name', siteName);
    setMetaContent('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMetaContent('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaContent('meta[property="og:image"]', 'property', 'og:image', imageUrl);
    setMetaContent('meta[property="og:image:alt"]', 'property', 'og:image:alt', title);
    setMetaContent('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaContent('meta[name="twitter:site"]', 'name', 'twitter:site', twitterHandle);
    setMetaContent('meta[name="twitter:creator"]', 'name', 'twitter:creator', twitterHandle);
    setMetaContent('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaContent('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaContent('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl);
    setMetaContent('meta[name="twitter:image:alt"]', 'name', 'twitter:image:alt', title);
    setMetaContent('meta[name="theme-color"]', 'name', 'theme-color', '#080808');
    setLinkHref('link[rel="canonical"]', 'canonical', canonicalUrl);

    setStructuredData('person', {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Ritesh Gabale',
      url: canonicalUrl,
      image: imageUrl,
      jobTitle: 'MERN Stack Developer',
      sameAs: [
        'https://www.linkedin.com/in/ritesh-gabale-59a2b5365/',
        'https://github.com/Ritesh007-max',
        'https://leetcode.com/u/Riteshgabale/',
        'https://www.youtube.com/channel/UCvUx30QhPrjk0KUu4M0ILvA'
      ]
    });

    setStructuredData('website', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteName,
      url: canonicalUrl,
      description,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${canonicalUrl}?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    });
  }, [description, title]);

  return null;
};

export default Seo;
