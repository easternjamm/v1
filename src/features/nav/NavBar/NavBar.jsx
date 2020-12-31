import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <header className='main-head'>
        <nav>
          <h1>Halcyon</h1>
          <ul className='nav-links'>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Events</a>
            </li>
            <li>
              <a href='#'>Socialize</a>
            </li>
            <li>
              <a href='#'>Help</a>
            </li>
          </ul>
          <div className='log-in'>
            <div>
              <svg
                width='24'
                height='24'
                xmlns='http://www.w3.org/2000/svg'
                fill-rule='evenodd'
                clip-rule='evenodd'
              >
                <path d='M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z' />
              </svg>
              <a href='#'>Login</a>
            </div>
            <div>
              <svg
                width='24'
                height='24'
                xmlns='http://www.w3.org/2000/svg'
                fill-rule='evenodd'
                clip-rule='evenodd'
              >
                <path d='M2.598 9h-1.055c1.482-4.638 5.83-8 10.957-8 6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5c-5.127 0-9.475-3.362-10.957-8h1.055c1.443 4.076 5.334 7 9.902 7 5.795 0 10.5-4.705 10.5-10.5s-4.705-10.5-10.5-10.5c-4.568 0-8.459 2.923-9.902 7zm12.228 3l-4.604-3.747.666-.753 6.112 5-6.101 5-.679-.737 4.608-3.763h-14.828v-1h14.826z' />
              </svg>
              <a href='#'>Sign Out</a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;