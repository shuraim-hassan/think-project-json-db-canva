import React from 'react';
import Canva from './components/canva.jsx';
import DarkModeThemeProvider from './components/darkmode.jsx';
import FinalForm from './components/finalForm.jsx';
import JsonViewer from './components/jsonViewer.jsx';
function App() {
  return (
    <>
      <div className="dark flex justify-center flex-col items-center my-4">
        {/* <DarkModeThemeProvider /> */ }
        <div className="m-10 border border-yellow-500 bg-gray-50  text-white p-2 rounded shadow-lg">
          <Canva />
        </div>
        <JsonViewer />
        {/* <FinalForm/> */}
      </div>
    </>
  );
}

export default App;
