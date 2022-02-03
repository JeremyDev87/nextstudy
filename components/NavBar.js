import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            <Link href="/">
                <a className={router.pathname === '/' ? 'active' : null}>Home</a>
            </Link>
            <Link href="/about">
                <a className={router.pathname === '/about' ? 'active' : null}>About</a>
            </Link>
            <style jsx>{`
                .active {
                    color:red;
                }
                a {
                    text-decoration:none;
                }
                nav {
                    background-color:tomato;
                }
            `}
            </style>
        </nav>
    )
}