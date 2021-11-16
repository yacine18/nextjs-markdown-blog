import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="container">
            <Link href="/" passHref>
                <h2>Dev Blog</h2>
            </Link>
        </header>
    )
}

export default Header
