import { menuItems } from "./data/MenuItems";
import { MenuItem } from "./types/MenuItems";

export default function Header(){
    return (
        <header> <nav>
            <ul>
                {menuItems.map((menu:MenuItem)=>{
                    return (
                        <li key={menu.id}>
                        <a href={`#${menu.path}`}>{menu.label}</a>
                        </li>
                        )
                })}
            </ul>
            </nav>
            </header>
    )
}