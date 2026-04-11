import React from 'react';

const ExternalButton = ({ href, children, className = '', ariaLabel, title }) => {
    const openLink = () => {
        if (!href) {
            return;
        }

        window.open(href, '_blank', 'noopener,noreferrer');
    };

    return (
        <button
            type="button"
            className={className}
            onClick={openLink}
            aria-label={ariaLabel}
            title={title}
        >
            {children}
        </button>
    );
};

export default ExternalButton;
