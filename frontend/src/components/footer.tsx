import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="mb-3 text-2xl font-bold">Veyora</h2>
          <p className="text-sm text-gray-400">
            Discover your style with Veyora. Fashion that feels like you.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
            <li><Link to="/collections" className="hover:text-white">Collections</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Customer Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
            <li><Link to="/shipping" className="hover:text-white">Shipping Policy</Link></li>
            <li><Link to="/returns" className="hover:text-white">Returns & Refunds</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Stay Connected</h3>
          <p className="mb-3 text-sm text-gray-400">
            Subscribe to receive updates and exclusive offers.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex"
          >
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              required
              className="min-w-0 flex-1 rounded-l-md bg-white px-3 py-2 text-sm text-gray-900 outline-none"
            />
            <button
              type="submit"
              className="rounded-r-md bg-orange-500 px-4 py-2 text-sm font-semibold hover:bg-orange-600"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Veyora. All rights reserved.
      </div>
    </footer>
  );
}