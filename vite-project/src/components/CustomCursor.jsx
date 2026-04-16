import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const INTERACTIVE_ELEMENTS = 'a, button, input, textarea, [role="button"], .project-card, .cert-card, .skill-cyber-card, .project-card-tab, .skill-icon-cyber';
const CursorFollower = motion.div;
const CursorDot = motion.div;

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    // Single coordinate source for perfect synchronization
    const posX = useMotionValue(-100);
    const posY = useMotionValue(-100);

    useEffect(() => {
        const checkTouch = () => {
            setIsTouchDevice(window.matchMedia('(hover: none), (pointer: coarse)').matches);
        };
        checkTouch();
        window.addEventListener('resize', checkTouch);

        const handlePointerMove = (e) => {
            setIsVisible(true);
            posX.set(e.clientX);
            posY.set(e.clientY);

            const target = e.target;
            const isInteractive = target.closest(INTERACTIVE_ELEMENTS);
            setIsHovering(!!isInteractive);
        };

        const handlePointerDown = () => setIsPressed(true);
        const handlePointerUp = () => setIsPressed(false);
        const handlePointerLeave = () => {
            setIsVisible(false);
            setIsPressed(false);
        };
        const handlePointerEnter = () => setIsVisible(true);

        window.addEventListener('pointermove', handlePointerMove);
        window.addEventListener('pointerdown', handlePointerDown);
        window.addEventListener('pointerup', handlePointerUp);
        document.body.addEventListener('pointerleave', handlePointerLeave);
        document.body.addEventListener('pointerenter', handlePointerEnter);

        return () => {
            window.removeEventListener('resize', checkTouch);
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerdown', handlePointerDown);
            window.removeEventListener('pointerup', handlePointerUp);
            document.body.removeEventListener('pointerleave', handlePointerLeave);
            document.body.removeEventListener('pointerenter', handlePointerEnter);
        };
    }, [posX, posY]);

    if (isTouchDevice) return null;

    return (
        <div className="cursor-wrapper" style={{ opacity: isVisible ? 1 : 0 }}>
            {/* Synchronized Orbital Arcs */}
            <CursorFollower
                className={`cursor-follower ${isHovering ? 'hovering' : ''} ${isPressed ? 'pressed' : ''}`}
                animate={{
                    scale: isPressed ? 0.5 : isHovering ? 1.5 : 1,
                }}
                style={{
                    x: posX,
                    y: posY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
            >
                <div className="cursor-arc arc-1"></div>
                <div className="cursor-arc arc-2"></div>
                <div className="cursor-arc arc-3"></div>
            </CursorFollower>

            {/* Absolute center dot (moving in perfect sync) */}
            <CursorDot
                className={`cursor-dot ${isPressed ? 'pressed' : ''}`}
                animate={{
                    scale: isPressed ? 0.4 : 1,
                }}
                style={{
                    x: posX,
                    y: posY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
            />
        </div>
    );
};

export default CustomCursor;
