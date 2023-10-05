import React, { useState, useEffect } from 'react';

export default function MouseEffect() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    function handleMouseMove(e: any) {
        setPosition({ x: e.pageX, y: e.pageY });
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            style={{
                position: 'absolute',
                left: position.x,
                top: position.y,
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'rgba(235, 119, 119, 0.7)',
                zIndex: 1000,
                pointerEvents: 'none',
                transition: 'width 0.001s ease-out, height 0.001s ease-out',
                boxShadow: '0 0 40px rgba(235, 119, 119, 1)'
            }}
        />
    );
}