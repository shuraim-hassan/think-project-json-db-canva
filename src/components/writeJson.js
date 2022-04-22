import React, { useEffect, useState } from "react";

export default function JsonDownloadFIle({ jsonDB }) {
  const [data, setData] = useState([
    {
      imageURL: "https://picsum.photos/200/300",
      imageName: "Image 1",
      mousePosition: { x: 0, y: 0 },
    },
    {
      imageURL: "https://picsum.photos/200/300",
      imageName: "Image 2",
      mousePosition: { x: 0, y: 0 },
    },
  ]);
  console.log(jsonDB);
  const [disable, setDisable] = useState(true);


  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";
    link.click();

  };

  const updateFile = (e) => {
    setData(() => {
      return jsonDB
    });

    setDisable(false);
  };
  useEffect(() => {

  }, [data]);

  return (
    <div className="flex flex-row space-x-2">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={ updateFile }>
        Save File
      </button>
      { disable ? null : <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={ exportData }>
        Download File
      </button> }


    </div>
  );
}
