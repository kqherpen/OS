import { useState } from "react";

const Buttons = () => {
const[clicks, setClicks] = useState(0);

function handleClick() {
  setClicks(clicks + 1);
}
function resetClicks() {
  setClicks(0)
}
  return (
    <div className="buttons-container">
      <button onClick={handleClick} className="add-btn" type="button">
        Add to Cart ({clicks})
      </button>

      <button onClick={resetClicks} className="cancel-btn" type="button">
        Cancel Order
      </button>
    </div>
  );
};

export default Buttons;
