import './App.css';
import { useState } from 'react'
import TestReporter from './components/TestReporter/index.jsx'
function App() {
    const [ activeClass, setActiveClass] = useState('')

  return (
    <div >
      <TestReporter 
        activeClass={activeClass} 
        setActiveClass={setActiveClass}
        config={{ API: 'dasdads', others: '' }}
        /></div>
  );
}

export default App;
