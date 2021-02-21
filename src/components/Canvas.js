import React from "react";

import { observer } from "mobx-react";
import Box from "../components/Box";

function Canvas({ store }) {
  return (
    <div className="canva">
      {store.boxes.map((box, index) => (
        <Box
          key={index}
          box={box}
          selectedBoxes={store.selectedBoxes}
        />
      ))}
    </div>
  );
}

export default observer(Canvas);
