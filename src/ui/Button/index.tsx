import "./button.css";
type Props = {
  value: string | number;
  onClick?: (value: string | number) => void;
  key: string | number;
};

const Button = ({ value, onClick, key }: Props) => {
  return (
    <button
      key={key}
      className={`button`}
      onClick={(e) => console.log(e.target.value)}
      value={value}
    >
      {value}
    </button>
  );
};

export default Button;
