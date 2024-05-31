'use client';
import { headerLabel } from '@/app/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HeaderLink = ({ href, labelName }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <div className={`ml-5 ${isActive ? 'border-b-2 border-indigo-500' : ''}`}>
      <Link
        href={href}
        className={`inline-flex  border-transparent  cursor-pointer ${
          isActive ? '' : ' border-b-2 hover:border-indigo-500'
        }`}
      >
        {labelName}
      </Link>
    </div>
  );
};

const Header = () => {
  return (
    <div className='bg-gray-700 text-white p-5'>
      <div className='grid grid-cols-12'>
        <div className='col-span-9 flex items-center'>Online Compiler</div>
        <div className='col-span-3 flex justify-end'>
          {headerLabel?.map((value) => (
            <HeaderLink
              key={value.path}
              href={value.path}
              labelName={value.labelName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
