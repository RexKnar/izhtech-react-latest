import { Button, Navbar } from "flowbite-react";
import { menuItems } from "./data/MenuItems";
import { MenuItem } from "./types/MenuItems";

export default function Header() {
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="http://www.izhtech.com">
          <img
            src="/logo-primary.png"
            className="h-6 mr-3 sm:h-9"
            alt="izhtech | Your Digital Partner"
          />
        </Navbar.Brand>
        <div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {menuItems.map((menu: MenuItem) => {
            return (
              <Navbar.Link href={`#${menu.path}`}>{menu.label}</Navbar.Link>
            );
          })}
        </Navbar.Collapse>
        <div className="">
          <Button>Let's Talk</Button>
        </div>
      </Navbar>
    </>
  );
}
