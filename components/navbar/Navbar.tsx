import { ActiveLink } from '../activeLink/ActiveLink';

const itemsMenu = [
  {path: "/about", text: "About"},
  {path: "/contact", text: "Contact"},
  {path: "/pricing", text: "Pricing"}
]
export const Navbar = () => {
  return (
    <nav className="flex gap-2 bg-blue-400 bg-opacity-30 p-2 m-2 rounded">
        <span>Home</span>

        <div className="flex flex-1"></div>
        {
          itemsMenu.map((item, index) => (
            <ActiveLink key={index} {...item} />
          ))
        }
    </nav>
  )
}
