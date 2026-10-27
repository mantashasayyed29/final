import { useEffect, useState } from 'react';
import './App.css';
import ApplyForTrainer from './ApplyForTrainer';
import TrainerProfile from './TrainerProfile';

function App() {
  const [page, setPage] = useState(window.location.pathname);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    function handlePopState() {
      setPage(window.location.pathname);
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  function handleApplicationSubmit(details) {
    setProfile(details);
    window.history.pushState(null, '', '/profile');
    setPage('/profile');
  }

  return (
    <main className="App">
      <div className="brand-name">AURA YOGA</div>
      {page === '/apply' ? (
        <ApplyForTrainer onSubmit={handleApplicationSubmit} />
      ) : page === '/profile' && profile ? (
        <TrainerProfile profile={profile} />
      ) : page === '/profile' ? (
        <p>No application details found. Please submit the form first.</p>
      ) : (
        <a className="apply-link home-apply-link" href="/apply">
          Apply for Trainer
        </a>
      )}
    </main>
  );
}

export default App;
