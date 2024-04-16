import PropTypes from "prop-types";
import { FaCircleCheck } from "react-icons/fa6";

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center gap-2">
        <FaCircleCheck className="text-green-500"></FaCircleCheck> {feature}
      </p>
    </div>
  );
};
Feature.propType = {
  feature: PropTypes.string,
};

export default Feature;
