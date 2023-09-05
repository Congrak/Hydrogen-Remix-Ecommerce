import {Link} from 'react-router-dom';

export const Layout = ({children, title}) => {
  
  return (
    <div className="flex flex-col min-h-screen antialiased bg-neutral-50">
      <header
        role="banner"
        className="flex items-center h-16 p-6 md:p-8 lg:p-12 sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 antialiased transition shadow-sm"
      >
        <div className="flex gap-12">
          <a className="font-bold" href="/">
            {title}
          </a>
        </div>
        <div>
          <ul className="flex gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Collections</Link>
            </li>
            <li>
                <Link to='/cart'>Cart</Link>
            </li>
          </ul>
        </div>
      </header>

      <main
        role="main"
        id="mainContent"
        className="h-full w-full "
      >
        {children}
      </main>
    </div>
  );
};
