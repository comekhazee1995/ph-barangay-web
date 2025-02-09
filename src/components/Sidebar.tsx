import Logo from "./Logo";
import { CiGrid42 } from "react-icons/ci";
import SidebarLink from "./SidebarLink";
import Icon from "./Icon";

const Sidebar = () => {
  return (
    <section className="h-full rounded p-4 bordered-wrapper">
      <Logo />
      <SidebarLink href="/dashboard">
        <Icon name={CiGrid42} /> <p>Dashboard</p>
      </SidebarLink>
      <SidebarLink href="/another">
        <Icon name={CiGrid42} /> <p>Another Page</p>
      </SidebarLink>
      <SidebarLink href="/another-page">Another Page</SidebarLink>
    </section>
  );
};

export default Sidebar;
