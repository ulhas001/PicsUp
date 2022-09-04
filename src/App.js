import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
function App() {
  const [selectedimg,setSelectedimg]= useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedimg={setSelectedimg}/>
      {selectedimg && <Modal selectedimg= {selectedimg} setSelectedimg={setSelectedimg}/>}
    </div>
  );
}

export default App;
