'use client';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from 'ecommerce-mxtech';
import { pageName } from '@/data';

const CauseNavbar = () => {
  const { products } = useCart();
  const navLinks = [
    { name: 'Testimonials', dropdown: false, href: '/#testimonials' },
    { name: 'Products', dropdown: false, href: '/#products' },
    { name: 'Know Us', dropdown: false, href: '/#know-us' },
    { name: 'Why Choose Us', dropdown: false, href: '/#why-choose-us' },
  ];

  return (
    <header className='w-full bg-[#fdf8f0] border-b border-gray-200/80'>
      <nav className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between py-5'>
          {/* --- Logo --- */}
          {/* Es recomendable reemplazar este span por un componente <Image> de Next.js con tu logo en SVG */}
          <a href='#' className='text-4xl font-serif italic text-gray-800'>
            {pageName}
          </a>

          {/* --- Enlaces de Navegación para Escritorio --- */}
          <div className='hidden lg:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='flex items-center text-gray-700 hover:text-black transition-colors'
              >
                {link.name}
                {link.dropdown && <MdKeyboardArrowDown className='ml-1' />}
              </a>
            ))}
          </div>

          {/* --- Iconos y Botón de Donación --- */}
          <div className='flex items-center space-x-6'>
            <a href='/my-cart' className='relative text-gray-800'>
              <FiShoppingCart size={22} />
              {/* Notificación del carrito */}
              <span className='absolute -top-1.5 -right-1.5 flex items-center justify-center w-4 h-4 bg-white text-black text-[10px] font-bold rounded-full border border-gray-300'>
                {products.length}
              </span>
            </a>
            <a
              href='/more-information'
              className='flex items-center px-6 py-3 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors'
            >
              {/* Icono de punto blanco */}
              <span className='w-2 h-2 bg-white rounded-full mr-2'></span>
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default CauseNavbar;
