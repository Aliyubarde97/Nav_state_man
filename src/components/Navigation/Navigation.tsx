import { useState } from "react"
import { Link } from "react-router-dom"

const Navigation = () => {
    const [ShowDropdown, setShowDropdown] = useState(false)

  return (
    <>
    <div className="w-full h-[80px] justify-center items-start border-b">
      <div className="container">
        <div className="flex justify-between items-center gap-3 py-4 px-3">
        <div>
          <Link to={""} className="inline-block w-[30px] h-[30px] bg-gray-500 rounded-full"></Link>
        </div>
        <div className="">
          <ul className="inline-block">
            <li className="flex justify-start items-center gap-3">
              <Link to={""}>nav1</Link>
              <div  onClick={() => setShowDropdown(!ShowDropdown) } className="inline-block">
                <span className="border py-2 px-2 relative cursor-pointer">Dropdown</span>
                {
                  ShowDropdown ? (
                <ul className="cursor-pointer w-full min-w-max shadow-md bg-white absolute top-7 right-0 border whitespace-nowrap z-10 ">
                  <li> <Link to={"#"} className="hover:bg-slate-900 mb-2 py-1 px-3">sub1</Link> </li>
                  <li> <Link to={"#"} className="hover:bg-slate-900 mb-2 py-1 px-3">sub2</Link> </li>
                  <li> <Link to={"#"} className="hover:bg-slate-900  py-1 px-3">sub3</Link> </li>
                </ul>
                  ):null
                  
                }
              </div>
              <Link to={""}>Nav3</Link>
            </li>
          </ul>

        </div>
        </div>

      </div>

    </div>
    </>
  )
}

export default Navigation
