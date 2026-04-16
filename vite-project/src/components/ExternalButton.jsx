import React from 'react';

const ExternalButton = ({
    href,
    children,
    className = '',
    ariaLabel,
    title,
    target = '_blank',
    rel = 'noopener noreferrer',
    download = false
}) => {
    if (href) {
        return (
            <a
                href={href}
                className={className}
                aria-label={ariaLabel}
                title={title}
                target={target}
                rel={target === '_blank' ? rel : undefined}
                download={download || undefined}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            type="button"
            className={className}
            aria-label={ariaLabel}
            title={title}
        >
            {children}
        </button>
    );
};

export default ExternalButton;
