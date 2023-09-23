import { useState } from "react";

const SummaryForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <label htmlFor="myCheckbox">Terms and Conditions</label>
      <input
        id="myCheckbox"
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <label htmlFor="myBtn">Submit order</label>
      <button id="myBtn" disabled={!isChecked}>
        SUBMIT
      </button>
    </>
  );
};

export default SummaryForm;
