import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
    // A simple animated background with glowing orbs
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            overflow: 'hidden',
            background: 'var(--bg-color)',
            pointerEvents: 'none'
        }}>
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '20%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,255,136,0.1) 0%, rgba(0,0,0,0) 70%)',
                    filter: 'blur(40px)',
                }}
            />

            <motion.div
                animate={{
                    x: [0, -150, 0],
                    y: [0, -100, 0],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '10%',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(138, 43, 226, 0.1) 0%, rgba(0,0,0,0) 70%)', // Purple
                    filter: 'blur(50px)',
                }}
            />

            {/* Grid lines effect */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
            }}></div>
        </div>
    );
};

export default Background;
