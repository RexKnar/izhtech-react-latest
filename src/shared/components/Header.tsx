import { Button, Navbar } from "flowbite-react";
import { menuItems } from "./data/MenuItems";
import { MenuItem } from "./types/MenuItems";

export default function Header() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/public/logo-primary.png" className="h-6 mr-3 sm:h-9" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="bg-black">Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>

     
        {menuItems.map((menu: MenuItem) => {
          return (
            <Navbar.Link href={`#${menu.path}`}> { menu.label }</Navbar.Link>
      );
          })}

    </Navbar.Collapse>
    </Navbar >
  );
}
