import "./index.css";
interface ButtonProps {
  onClick: () => void;
  label: string;
  cancel?: boolean;
}

export function Button({ onClick, label, cancel }: ButtonProps) {
  return (
    <button className="btn-register" onClick={onClick}>
      {label}
    </button>
  );
}
