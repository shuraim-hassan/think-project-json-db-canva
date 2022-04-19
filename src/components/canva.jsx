import React from "react";
import { Stage, Layer, Text, Rect } from "react-konva";

const Canva = () => {
  const [lines, setLines] = React.useState([]);
  const [recs, setRecs] = React.useState([]);
  const isDrawing = React.useRef(false);

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

  return (
    <div>
      <Stage
        width={ 1000 }
        height={ 400 }
        onMouseDown={ handleMouseDown }
        onMousemove={ handleMouseMove }
        onMouseup={ handleMouseUp }
      >
        <Layer>
          <Text text="Draw a Rectangle" x={ 5 } y={ 30 } />
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
  );
}

export default Canva