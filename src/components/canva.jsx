import React, { useState, useEffect, useRef } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import JsonDownloadFIle from "./writeJson";



const Canva = () => {
  const [lines, setLines] = useState([]);
  const [recs, setRecs] = useState([]);
  const isDrawing = useRef(false);
  const [cursor, setCursor] = useState([]);


  const JsonDB = [
    {
      imageURL: "https://picsum.photos/200/300",
      imageName: "Image 1",
      x: cursor.x,
      y: cursor.y,
    },
   

  ]


  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { points: [pos.x, pos.y] }]);

    setRecs([...recs, { startPointX: pos.x, startPointY: pos.y }]);
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    setCursor(point)
    const getCoordinatorsValues = JSON.stringify(point);
    // console.log(`${getCoordinatorsValues}`);

    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);
    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());

    let curRec = recs[recs.length - 1];

    curRec.width = Math.abs(point.x - curRec.startPointX);
    curRec.height = Math.abs(point.y - curRec.startPointY);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };
  const text = `Cursor position is: x: ${cursor.x} y: ${cursor.y
    }`;
  
  let converted = JSON.stringify(JsonDB);
 
  useEffect(() => {
    // console.log("jsonDBB" + converted);
  }, [converted]);
  return (
    <>
      <div style={ { backgroundImage: 'url(https://cdn.pixabay.com/photo/2020/02/04/07/16/coronavirus-4817450__340.jpg)' } }>
        <h2 className="text-blue-500">{ text }</h2>
        <Stage
          width={ 1000 }
          height={ 400 }
          onMouseDown={ handleMouseDown }
          onMousemove={ handleMouseMove }
          onMouseup={ handleMouseUp }
        >
          <Layer>
            { recs.map((rec, i) => (
              <Rect
                key={ i }
                x={ rec.startPointX }
                y={ rec.startPointY }
                width={ rec.width }
                height={ rec.height }
                fill="rgb(0,0,0,0)"
                stroke="black"
              />
            )) }

          </Layer>

        </Stage>
      </div>
     
      <JsonDownloadFIle jsonDB={ converted } />
    </>
  );
}

export default Canva