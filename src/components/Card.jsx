import React from 'react';
import { motion } from 'framer-motion';
import './Card.css'; // We'll create this for specific card styles if needed, or inline

const Card = ({ ctf, index }) => {
    return (
        <motion.a
            href={ctf.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px var(--accent-glow)",
                borderColor: "var(--accent-color)"
            }}
        >
            <div className="card-image-container">
                {ctf.image ? (
                    <img src={ctf.image} alt={ctf.name} className="card-image" />
                ) : (
                    <div className="card-placeholder">?</div>
                )}
            </div>
            <div className="card-content">
                <h3 className="card-title">{ctf.name}</h3>
                <div className="card-meta">
                    <span className="card-date">{ctf.date}</span>
                    <span className="card-rank">{ctf.rank}</span>
                </div>
                <div className="card-tags">
                    {ctf.tags.map((tag, i) => (
                        <span key={i} className="card-tag">{tag}</span>
                    ))}
                </div>
            </div>
        </motion.a>
    );
};

// Inline styles for simplicity in this artifact, or we could write to Card.css
// I will create a separate Card.css next as imported above.

export default Card;
