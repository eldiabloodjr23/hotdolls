import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Děkujeme za vaší objednávku !</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          Jestli máte jakékoliv otázky, kontaktuje nás mailem.
          <a className="email" href="mailto:order@example.com">
            kontakt@hotdolls.cz
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Pokračovat v nakupování
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success