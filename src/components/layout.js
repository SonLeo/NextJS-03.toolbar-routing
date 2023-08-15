import Link from "next/link";

export default function Layout ({ children }) {
    return (
        <div>
            <div className='toolbar'>
                <Link href='/'>Home</Link>
                <Link href='/blog'>Blog</Link>
                <Link href='/about'>About</Link>
            </div>

            <div className='page-content'>{children}</div>
        </div>
    )
}