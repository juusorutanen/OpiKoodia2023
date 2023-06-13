import './App.css';
import ContactInfo from './components/ContactInfo';
import ContactCard from './components/ContactCard';
import NamedChildren from './components/NamedChildren';
import { useState } from 'react';

function App() {

  const [click,setClick] = useState(0);


  return (
    <div className="App">
      <ContactCard>
        <ContactInfo name="Juuso" profession="Boss"/>
      </ContactCard>
      <ContactCard>
        <h3>Current clicks:{click}</h3>
        <button onClick={() => setClick(click => click +1)}>Click mee</button>
      </ContactCard>
      <NamedChildren 
      header={<h2>Complex card</h2>}
      media={<h3>Media area</h3>}
      content={<h3>Content area</h3>}
      />
       <NamedChildren 
      header={<h2>No media</h2>}
      content={<h3>Content area</h3>}
      />
      
    </div>
  );
}

export default App;
