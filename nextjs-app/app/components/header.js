import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-slate-950 p-4 text-white">
            <div className="max-w-4xl">
                <div className="space-x-10 flex">
                    <Link href="/" passHref legacyBehavior>
                        <a className="hover:underline">Generate</a>
                    </Link>
                    <Link href="/examples" legacyBehavior>
                        <a className="hover:underline">Examples</a>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
