export const Navbar = () => {
  return (
    <nav className="flex gap-2 bg-blue-400 bg-opacity-30 p-2 m-2 rounded">
        <span>Home</span>

        <div className="flex flex-1"></div>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/pricing">Pricing</a>
    </nav>
  )
}
