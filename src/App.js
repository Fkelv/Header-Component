import { Header } from "./header";
import { BrowserRouter as Router } from 'react-router-dom';

import "./styles.css";
export default function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}
