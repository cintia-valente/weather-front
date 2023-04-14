import './index.css'
interface ButtonProps {
    onClick: () => void;
}
  
export function Button({ onClick }: ButtonProps) {
    return (
      <button className="btn-register" onClick={onClick}>
        Salvar
      </button>
    );
}