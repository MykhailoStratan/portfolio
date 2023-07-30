import { FC } from "react";
import './Menu.css';

interface MenuProps {
    menuItems: string[];
}

const Menu: FC<MenuProps> = ({ menuItems }) => {
    function makeItemActive(event: React.MouseEvent<HTMLElement>) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // because of error with id property
        const targetItemId = event.target.id;
        const menuItems = document.querySelectorAll('.navigation-menu-item');

        menuItems.forEach((item) => {
            if (targetItemId !== item.id) {
                item.classList.remove('item-active');
            } else {
                item.classList.add('item-active');
            }
        });
    }

    return (
        <ul className="navigation-menu">
            {menuItems.map((item: string, index: number) => {
                return <a href={`#${item.toLocaleLowerCase()}`}>
                    <li
                        className= { `navigation-menu-item ` + (index === 0 ? 'item-active' : ``)}
                        onClick={ makeItemActive }
                        id={ `menu-item-${index}` }
                        key={ index }>{item.toUpperCase()}</li>
                </a>
            })}
        </ul>
    )
};

export default Menu;