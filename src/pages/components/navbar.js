import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className="bg-gray-800 py-4 w-full">
            <div className=" px-4">
                <div className="flex justify-between">
                    <div className="flex">
                        <Link href="/">
                            <p className="">
                                <span className="text-white font-bold text-lg ml-2">My balls</span>
                            </p>
                        </Link>
                        <div className="hidden md:flex md:ml-10">
                            <Link href="/">
                                <p className={`text-gray-300 hover:text-white px-3 rounded-md ${router.pathname === '/' ? 'bg-gray-900' : ''}`}>
                                    Home
                                </p>
                            </Link>
                            <Link href="/">
                                <p className={`text-gray-300 hover:text-white px-3 rounded-md ${router.pathname === '/about' ? 'bg-gray-900' : ''}`}>
                                    About
                                </p>
                            </Link>
                            <Link href="/">
                                <p className={`text-gray-300 hover:text-white px-3 rounded-md ${router.pathname === '/contact' ? 'bg-gray-900' : ''}`}>
                                    Contact
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
