interface ButtonProps {
  label: string;
  color: "yellow" | "purple" | "green" | "red";
  onClick: () => void;
  invisible?: boolean;
}

const Button = ({ label, color, onClick, invisible = false }: ButtonProps) => {
  let colorStyle;
  switch (color) {
    case "yellow":
      colorStyle = "bg-yellow-bg border-yellow-dark";
      break;
    case "purple":
      colorStyle = "bg-purple-bg border-purple-border text-white";
      break;
    case "green":
      colorStyle = "bg-green-bg border-green-border";
      break;
    case "red":
      colorStyle = "bg-red-bg border-red-border";
      break;
    default:
      colorStyle = "";
  }

  return (
    <button
      onClick={onClick}
      className={`font-comic font-bold text-xl border-4 rounded-full px-8 py-3 drop-shadow-xl ${colorStyle} ${invisible && "invisible"}`}
    >
      {label}
    </button>
  );
};

export default Button;
