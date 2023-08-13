import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: string;
  onClick1: () => void;
}

const Button = ({ children, color = "primary", onClick1 }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick1}>
      {children}
    </button>
  );
};

export default Button;

/*
import React, { useState } from "react";

const App: React.FC = () => {
  const [showBranches, setShowBranches] = useState(false);

  const handleButtonClick = () => {
    setShowBranches(!showBranches);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Main Button</button>
      {showBranches && (
        <div>
          <button>Branch Button 1</button>
          <button>Branch Button 2</button>
          {/* Add more buttons as needed *}
        </div>
      )}
    </div>
  );
};

export default App;
*/
