type NavItems = {id :number, label:string}
const navItems:NavItems[] = [
  {id:1, label:"Home"},
  {id:2, label:"About"},
  {id:3, label:"Projects"},
  {id:4, label:"Contact"},
]
export default function Navbar() {
  const navList : string[]= navItems.map((item, index) => 
            <li key={index} ><a className="text-blue-400 text-lg font-semibold transition hover:underline hover:text-blue-300 hover:transition-transform cursor-pointer">{item.label}</a></li>
  )
 return (
    <header className="w-full h-24 bg-gray-800 text-white flex justify-center items-center">
 <nav className="w-[80%]  flex justify-between  items-center text-white">
      <div className="text-2xl text-white font-bold">Logo</div>
      <ul className="style-none flex gap-10 ">
        {navList} 
      </ul>
    </nav>
    </header>
  );
}
