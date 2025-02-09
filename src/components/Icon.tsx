import { IconType } from "react-icons";

const Icon = ({ name }: { name: IconType }) => {
  const Element = name;
  return <Element className="stroke-1" />;
};

export default Icon;
