import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const CarrouselButton = ({ direction, onClick }) => {
  let icon;

  switch (direction) {
    case "<":
      icon = <BsFillArrowLeftCircleFill className="w-8 h-8"/>;
      break;
    case ">":
      icon = <BsFillArrowRightCircleFill className="w-8 h-8"/>;
      break;
    default:
      icon = "Direccion no valida";
      break;
  }

  return (
    <button
      onClick={onClick}
      className="hover:text-blue-500 hover:scale-110 transition-all duration-200"
    >
      {icon}
    </button>
  );
};

export default CarrouselButton;
