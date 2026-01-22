import React from 'react';
import { motion } from 'framer-motion';
import Card from './components/Card';
import Background from './components/Background';
import { ctfs } from './data/ctfs';
import './App.css';

function App() {
  return (
    <>
      <Background />
      <div className="app-container">
        <header className="header">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="title"
          >
            CTF <span className="highlight">Writeups</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="subtitle"
          >
            Exploits, Flags, and Glory
          </motion.p>
        </header>

        <main className="grid-container">
          {ctfs.map((ctf, index) => (
            <Card key={ctf.id} ctf={ctf} index={index} />
          ))}
        </main>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Swarnim. All flags captured.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
