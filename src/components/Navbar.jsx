import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -85;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <nav className="fixed z-50 w-full bg-white top-0 flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow-lg">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-gray-800"
            href="/"
          >
            ๐ ๅๅฝ๏ผๆๆฏๅไผๅจ
          </a>
        </div>
        <div
          className="lg:flex flex-grow items-center hidden"
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <HashLink
                smooth
                to="#education"
                scroll={(el) => scrollWithOffset(el)}
                className="px-3 py-2 flex items-center text-base uppercase font-bold text-gray-800 hover:text-gray-600"
              >
                <span className="ml-2">๐ ๆ่ฒ็ปๅ</span>
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="#project"
                scroll={(el) => scrollWithOffset(el)}
                className="px-3 py-2 flex items-center text-base uppercase font-bold text-gray-800 hover:text-gray-600"
              >
                <span className="ml-2">๐ ้กน็ฎ็ปๅ</span>
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="#experience"
                scroll={(el) => scrollWithOffset(el)}
                className="px-3 py-2 flex items-center text-base uppercase font-bold text-gray-800 hover:text-gray-600"
              >
                <span className="ml-2">๐ผ ๅทฅไฝ็ปๅ</span>
              </HashLink>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-base uppercase font-bold text-gray-800 hover:text-gray-600"
                href="https://t-resume.4everland.store/ๅไผๅจ็็ฎๅ.pdf"
                target="_blank"
              >
                <span className="ml-2">๐ ๆ็็ฎๅ</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
