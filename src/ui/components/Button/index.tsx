import "./index.css";
interface ButtonProps {
  label: string;
  type: "submit" | "button";
  onClick?: () => void;
}

export function Button({ label, type, onClick }: ButtonProps) {
  return (
    <button className="btn-register" type={type} onClick={onClick}>
      {label}
    </button>
  );
}
