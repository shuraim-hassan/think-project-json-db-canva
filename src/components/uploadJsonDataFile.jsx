import React, { useState } from "react";

export function Upload({ children }) {
  const [files, setFiles] = useState("");

  const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8",4);
    fileReader.onload = e => {
      console.log("e.target.result", e.target.result);
      setFiles(e.target.result);
    };
  }
 
  return (
    <>
      <h1>Upload your Json file</h1>
      <input type="file" onChange={ handleChange } />
      { files ? <div>
        <h2 className="text-red-500 container mx-auto my-10">your uploaded file content-- <span className="text-slate-700 ">{ files }</span> </h2>
      </div> : null }
     
     
    </>
  );
}
