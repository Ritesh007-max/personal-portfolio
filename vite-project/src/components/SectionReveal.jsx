import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const directions = {
    up: { x: 0, y: 36 },
    down: { x: 0, y: -36 },
    left: { x: 36, y: 0 },
    right: { x: -36, y: 0 }
};

const SectionReveal = ({ children, delay = 0, direction = 'up' }) => {
    const shouldReduceMotion = useReducedMotion();
    const offset = directions[direction] ?? directions.up;

    return (
        <motion.div
            className="section-reveal"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.985, ...offset }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, scale: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: '0px 0px -80px 0px' }}
            transition={{
                duration: 1.05,
                delay,
                ease: [0.16, 1, 0.3, 1]
            }}
        >
            {children}
        </motion.div>
    );
};

export default SectionReveal;
