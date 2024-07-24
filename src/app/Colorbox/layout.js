import React from 'react';

export default function ColorBoxLayout({ children, left, right }) {
    const sidebar = true; // This can be a state or prop

    return (
        <section>
            {children}
            {sidebar ? left : right}
        </section>
    );
}
