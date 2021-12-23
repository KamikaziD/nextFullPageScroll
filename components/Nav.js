import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
    const router = useRouter();

    return (
        <nav className={navStyles.nav}>
            <div className={navStyles.elements}>
                <a className={navStyles.title}>
                    <Link href="/">IDZ ENABLED</Link>
                </a>
                <a className={navStyles.title}>
                    <Link href="/">ID CLOUDS</Link>
                </a>
                <a className={navStyles.title}>
                    <Link href="/">ORBIT</Link>
                </a>
                <a className={navStyles.title}>
                    <Link href="/">JUDGE</Link>
                </a>
                    <>
                        <Image className="logo" src="/logo.png" alt="Logo" width={80} height={80} />
                    </>
                <a className={navStyles.title}>
                    <Link href="/">ASSET</Link>
                </a>
                <a className={navStyles.title}>
                    <Link href="/">ZCLOUD</Link>
                </a>
                <a className={navStyles.title}>
                    <Link href="/about" >PROJECT ME</Link>
                </a>
                <a className={navStyles.title}>
                    <Link href="/">STORE</Link>
                </a>
            </div>
        </nav>
    )
}

export default Nav;