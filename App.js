// App.js (React)
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/agents">Agents</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <section>
        <h1>The agent infrastructure platform for building reliable AI Agents</h1>
        <p>Automate entire job functions. Safe, responsible guardrails built in.</p>
        <button onClick={() => window.location.href='/book-demo'}>Book a Demo</button>
      </section>
      {/* Additional sections for use cases, testimonials, resources */}
    </main>
  );
}

// Add similar functional components for Agents, Solutions, About, Contact...

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      {/* More Route definitions for subpages */}
    </Router>
  );
}

export default App;
