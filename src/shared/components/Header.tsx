import { Button, Navbar } from "flowbite-react";
import { menuItems } from "./data/MenuItems";
import { MenuItem } from "./types/MenuItems";

export default function Header() {
  return (
    <Navbar fluid rounded className="container mx-auto bg-white sticky top-2">
      <Navbar.Brand href="https://izhtech.com">
        <img src="/public/logo-primary.png" className="h-6 mr-3 sm:h-9" alt="izhtech | Your Digital Partner" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="bg-black">Let's Talk</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>

     
        {menuItems.map((menu: MenuItem) => {
          return (
            <Navbar.Link href={`${menu.path}`}> { menu.label }</Navbar.Link>
      );
          })}

    </Navbar.Collapse>
    </Navbar >
  );
}
