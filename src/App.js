import { Header } from "./header";
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

import "./styles.css";
export default function App() {
  return (
     <Router>
      <Header />
    </Router>
  );
}
