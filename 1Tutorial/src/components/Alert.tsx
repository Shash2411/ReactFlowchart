import { ReactNode } from "react";
/*/ 
interface Props {
  text: string;
}
/*/
interface Props {
  children: ReactNode; //any mix of html compoenent.
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
