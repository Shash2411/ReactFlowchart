import { ReactNode } from "react";

interface buttonProps {
  children: ReactNode;
  colour?: string;
  onClick1?: () => void;
  Bool?: boolean;
}

const Button2 = ({
  children,
  colour = "primary",
  onClick1,
  Bool,
}: buttonProps) => {
  return (
    <div id="MainId" className="mainDiv">
      <button
        id="Main"
        className={"mainbutton btn btn-" + colour}
        onClick={onClick1}
        disabled={Bool}
      >
        {children}
      </button>
    </div>
  );
};

export default Button2;
