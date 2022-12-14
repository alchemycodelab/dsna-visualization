import React, { type ReactElement } from 'react'
import ReactDOM from 'react-dom/client'
import {
  // Use HashRouter so we can deploy this statically.
  HashRouter as Router,
  Link,
  Routes,
  Route,
} from "react-router-dom";
import homeFn from './home'
import linkStyles from './link.module.css'
import linkedListFn from './linked-list'
import queueFn from './queue'
const Home = homeFn();
const LinkedList = linkedListFn();
const Queue = queueFn();

function App(props: {}): ReactElement {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <nav>
            <Link className={linkStyles['nav-link']} to="/">home</Link>
            <Link className={linkStyles['nav-link']} to="/queue">queue</Link>
            <Link className={linkStyles['nav-link']} to="/linked-list">
              linked-list
            </Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/queue" element={<Queue />}/>
            <Route path="/linked-list" element={<LinkedList />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}
const rootEl = document.getElementById('root')
if(rootEl == null) {
  console.error('Cannot find #root, giving up!');
} else {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
