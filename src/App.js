import React from 'react';
import Canva from './components/canva.jsx';
import ScratchApp from './components/CanvaScratch.tsx';
import DarkModeThemeProvider from './components/darkmode.jsx';
import JsonViewer from './components/jsonViewer.jsx';
import { Upload } from './components/uploadJsonDataFile.jsx';
import JsonDownloadFIle from './components/writeJson.js';


function App() {
  
  
  // write async await function
  return (
    <>
      <div >
        <ScratchApp/>
       {/* <JsonDownloadFIle/> */}
        {/* <DarkModeThemeProvider />  */ }
        {/* <div className="m-10 border border-yellow-500 bg-gray-50  text-white p-2 rounded shadow-lg">
          <Canva />
        </div> */}
        {/* <JsonViewer /> */ }
        {/* <FinalForm /> */ }
        {/* <Upload>
          <button>Upload Files</button>
        </Upload> */}


      </div>
    </>
  );
}

export default App;
