import React from 'react'
import './Footer.css'
import { getYear } from 'date-fns';


const Footer = () => {

  const now = new Date();

  const currentYear = getYear(now);
  return (
    <>
        <main className='footer-container'>
            <div className='text-footer-container'>
              <p class="footer-text">Todos os direitos reservados à TalentoAgora &copy; {currentYear}</p>
            </div>
        </main>
    </>
  )
}

export default Footer