import Options from "./Options";

export default function OrderEntry({ setOrderPhase }) {
  // disable order button if there aren't any scoops in order

  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
    </div>
  );
}
