import { ReactNode } from "react";

interface buttonProps {
  children: ReactNode;
  colour?: string;
  onClick1?: () => void;
}

const Button2 = ({ children, colour = "primary", onClick1 }: buttonProps) => {
  return (
    <div id="MainId" className="mainDiv">
      <button
        id="Main"
        className={"mainbutton btn btn-" + colour}
        onClick={onClick1}
      >
        {children}
      </button>
    </div>
  );
};

export default Button2;
