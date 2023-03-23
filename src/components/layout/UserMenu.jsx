import React, { useCallback, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsCartPlusFill, BsPencilSquare } from 'react-icons/bs';
import styles from './UserMenu.module.scss';
import { FaCartPlus } from 'react-icons/fa';

export default function UserMenu({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = useCallback((e) => {
    e.stopPropagation();
    setIsOpen((nextIsOpen) => !nextIsOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = () => setIsOpen(false);
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className={styles.userMenu}>
        <button className={styles.button} onClick={handleButtonClick}>
          {user?.nickname}
        </button>
        {isOpen && (
          <ul className={styles.popup}>
            <Link to="/carts">
              <li>
                <FaCartPlus className={styles.carts} />
              </li>
            </Link>
            <li>내강의실</li>
            <Link to="/mypage">
              <li>마이페이지</li>
            </Link>
          </ul>
        )}
      </div>
    </>
  );
}