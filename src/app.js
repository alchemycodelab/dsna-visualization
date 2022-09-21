import {
  // Use HashRouter so we can deploy this statically.
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import homeFn from './home.jsx'
import queueFn from './queue.jsx'
const Home = homeFn();
const Queue = queueFn();

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <nav>
            <Link to="/">home</Link>
            <Link to="/queue">queue</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/queue" element={<Queue />}/>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
