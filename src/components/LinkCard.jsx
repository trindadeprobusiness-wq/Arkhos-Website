import React from 'react';

export default function LinkCard({ href, badge, title, subtitle, description, type, styleDelay }) {
    // Determine class based on type prop
    let cardClass = 'link-card';
    if (type === 'secondary') cardClass += ' secondary';
    if (type === 'tertiary') cardClass += ' tertiary';

    const handleClick = (e) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            console.log(`Card clicked: ${title}`);
        }
    };

    return (
        <a
            href={href}
            className={cardClass}
            onClick={handleClick}
            style={{ animationDelay: styleDelay }}
        >
            <div className="card-content">
                <span className="card-badge">{badge}</span>
                <div className="card-title">{title}</div>
                <div className="card-subtitle">{subtitle}</div>
                <div className="card-description">
                    {description}
                </div>
            </div>
        </a>
    );
}
