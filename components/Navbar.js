import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <a className="text-2xl font-semibold">Shopping App</a>
        </Link>
        <div>
          <Link href="/products">
            <a className="ml-4">Products</a>
          </Link>
          <Link href="/cart">
            <a className="ml-4">Cart</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
