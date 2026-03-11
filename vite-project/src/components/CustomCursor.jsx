import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const interactiveSelector = 'a, button, input, textarea, select, label, [role="button"], .glass, .project-card, .skill-cyber-card';

const springConfig = {
    damping: 30,
    mass: 0.4,
    stiffness: 350
};

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isInteractive, setIsInteractive] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [cursorLabel, setCursorLabel] = useState('');
    const [isPressed, setIsPressed] = useState(false);

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);
    const auraX = useSpring(mouseX, { ...springConfig, damping: 32, stiffness: 180 });
    const auraY = useSpring(mouseY, { ...springConfig, damping: 32, stiffness: 180 });
    const trailOneX = useSpring(mouseX, { damping: 30, mass: 0.5, stiffness: 200 });
    const trailOneY = useSpring(mouseY, { damping: 30, mass: 0.5, stiffness: 200 });
    const trailTwoX = useSpring(mouseX, { damping: 32, mass: 0.6, stiffness: 170 });
    const trailTwoY = useSpring(mouseY, { damping: 32, mass: 0.6, stiffness: 170 });
    const trailThreeX = useSpring(mouseX, { damping: 34, mass: 0.7, stiffness: 140 });
    const trailThreeY = useSpring(mouseY, { damping: 34, mass: 0.7, stiffness: 140 });

    const getCursorLabel = (target) => {
        if (!target) {
            return '';
        }

        const interactiveElement = target.closest(interactiveSelector);

        if (!interactiveElement) {
            return '';
        }

        if (interactiveElement.matches('input, textarea, select, label')) {
            return 'type';
        }

        if (interactiveElement.matches('.project-card, .skill-cyber-card, .glass')) {
            return 'view';
        }

        if (interactiveElement.matches('button')) {
            return 'click';
        }

        if (interactiveElement.matches('a')) {
            return 'open';
        }

        return 'view';
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia('(hover: none), (pointer: coarse)');
        const syncTouchState = () => setIsTouchDevice(mediaQuery.matches);

        syncTouchState();
        mediaQuery.addEventListener('change', syncTouchState);

        return () => {
            mediaQuery.removeEventListener('change', syncTouchState);
        };
    }, []);

    useEffect(() => {
        if (isTouchDevice) {
            return undefined;
        }

        const handlePointerMove = (event) => {
            mouseX.set(event.clientX);
            mouseY.set(event.clientY);
            setIsVisible(true);
        };

        const handlePointerOver = (event) => {
            const nextInteractive = Boolean(event.target.closest(interactiveSelector));
            setIsInteractive(nextInteractive);
            setCursorLabel(getCursorLabel(event.target));
        };

        const handlePointerLeave = () => {
            setIsVisible(false);
            setIsInteractive(false);
            setCursorLabel('');
            setIsPressed(false);
        };

        const handlePointerDown = () => {
            setIsPressed(true);
        };

        const handlePointerUp = () => {
            setIsPressed(false);
        };

        window.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('pointerover', handlePointerOver);
        document.addEventListener('pointerleave', handlePointerLeave);
        window.addEventListener('pointerdown', handlePointerDown);
        window.addEventListener('pointerup', handlePointerUp);

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('pointerover', handlePointerOver);
            document.removeEventListener('pointerleave', handlePointerLeave);
            window.removeEventListener('pointerdown', handlePointerDown);
            window.removeEventListener('pointerup', handlePointerUp);
        };
    }, [isTouchDevice, mouseX, mouseY]);

    if (isTouchDevice) {
        return null;
    }

    return (
        <>
            <motion.div
                className={`cursor-spotlight ${isVisible ? 'visible' : ''} ${isInteractive ? 'interactive' : ''}`}
                style={{
                    x: auraX,
                    y: auraY
                }}
            />
            <motion.div
                className={`cursor-trail cursor-trail-1 ${isVisible ? 'visible' : ''} ${isInteractive ? 'interactive' : ''}`}
                style={{
                    x: trailOneX,
                    y: trailOneY
                }}
            />
            <motion.div
                className={`cursor-trail cursor-trail-2 ${isVisible ? 'visible' : ''} ${isInteractive ? 'interactive' : ''}`}
                style={{
                    x: trailTwoX,
                    y: trailTwoY
                }}
            />
            <motion.div
                className={`cursor-trail cursor-trail-3 ${isVisible ? 'visible' : ''} ${isInteractive ? 'interactive' : ''}`}
                style={{
                    x: trailThreeX,
                    y: trailThreeY
                }}
            />
            <motion.div
                className={`cursor-aura ${isVisible ? 'visible' : ''} ${isInteractive ? 'interactive' : ''} ${isPressed ? 'pressed' : ''}`}
                style={{
                    x: auraX,
                    y: auraY
                }}
            />
            <motion.div
                className={`custom-cursor ${isVisible ? 'visible' : ''} ${isInteractive ? 'interactive' : ''} ${isPressed ? 'pressed' : ''}`}
                style={{
                    x: cursorX,
                    y: cursorY
                }}
            >
                <span className="cursor-core" />
                <span className="cursor-ring" />
                <span className={`cursor-label ${cursorLabel ? 'visible' : ''}`}>{cursorLabel}</span>
            </motion.div>
        </>
    );
};

export default CustomCursor;
