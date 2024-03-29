import Link from 'next/link'
export default function Header() {
    return (<>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link href="/" className='navbar-brand'>
                    Markdown + Nextjs
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Link href="/" className='nav-link nav-item'>
                            Home
                        </Link>
                        <Link href="/" className='nav-link nav-item'>
                            About
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}