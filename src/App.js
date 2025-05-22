// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AlarkaExecutiveSummary from './slides/ExecutiveSummary';
import AlarkaLocationSlide from './slides/Location';
import AlarkaDriveMarketSlide from './slides/DriveMarket';
import AlarkaTimelineSlide from './slides/Timeline';
import AlarkaUseOfFunds from './slides/UseOfFunds';
import AlarkaTeamSlide from './slides/Team';
import AlarkaExitStrategy from './slides/Exit';
import AlarkaCaseStudies from './slides/CaseStudies';
import AlarkaOperationsSlide from './slides/Operations';
import AlarkaRiskMitigationSlide from './slides/Risks';
import AlarkaClosingSlide from './slides/Closing';

export default function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4 space-x-2 text-sm">
          <Link to="/">Home</Link>
          <Link to="/executive-summary">Executive Summary</Link>
          <Link to="/location">Location</Link>
          <Link to="/drive-market">Drive Market</Link>
          <Link to="/timeline">Timeline</Link>
          <Link to="/use-of-funds">Use of Funds</Link>
          <Link to="/team">Team</Link>
          <Link to="/exit">Exit</Link>
          <Link to="/case-studies">Case Studies</Link>
          <Link to="/operations">Operations</Link>
          <Link to="/risks">Risks</Link>
          <Link to="/closing">Closing</Link>
        </nav>
        <Routes>
          <Route path="/" element={<AlarkaExecutiveSummary />} />
          <Route path="/executive-summary" element={<AlarkaExecutiveSummary />} />
          <Route path="/location" element={<AlarkaLocationSlide />} />
          <Route path="/drive-market" element={<AlarkaDriveMarketSlide />} />
          <Route path="/timeline" element={<AlarkaTimelineSlide />} />
          <Route path="/use-of-funds" element={<AlarkaUseOfFunds />} />
          <Route path="/team" element={<AlarkaTeamSlide />} />
          <Route path="/exit" element={<AlarkaExitStrategy />} />
          <Route path="/case-studies" element={<AlarkaCaseStudies />} />
          <Route path="/operations" element={<AlarkaOperationsSlide />} />
          <Route path="/risks" element={<AlarkaRiskMitigationSlide />} />
          <Route path="/closing" element={<AlarkaClosingSlide />} />
        </Routes>
      </div>
    </Router>
  );
}
