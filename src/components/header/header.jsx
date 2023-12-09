import Link from 'next/link'
export const Header = () => (
    <header>
      <div>
        <div className="topNav">
          <img alt="logo" src='/images/snowflake_logo.png' width={100} height={100} />
            <nav>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                  <li><Link href="/events">Events</Link>
                  </li>
                    <li><Link href="/about-us">About Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
      <h1>Lorem ipsum dolor sit iLabore, facilis</h1>
      </div>
      </header>
)