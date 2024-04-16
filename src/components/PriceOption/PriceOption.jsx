import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const {name, price, features} = option;

  return (
    <div className="bg-blue-500 rounded-md p-4 text-white flex flex-col">
      <h2 className="text-center">
        <span className="text-7xl font-extrabold"> {price}</span>
        <span className="text-2xl">/mon</span>
      </h2>

      <h4 className="text-3xl text-center my-8"> {name}</h4>
      <div className="pl-6 flex-grow">
      {
        features.map((feature, idx) => <Feature feature={feature} key={idx}></Feature>)
      }
      </div>
      <div className="flex justify-center">
      <button className="mt-10  btn  bg-green-500 text-white w-full font-bold hover:bg-green-900">Buy Now</button>
      </div>
    </div>
  );
};

PriceOption.propType = {
    option: PropTypes.object,
  };

export default PriceOption;
