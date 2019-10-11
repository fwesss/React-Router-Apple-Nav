/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/core';

import styles from './Nav.module.scss';
import SubNav from '../SubNav/SubNav';


const Nav = ({ match }) => {
  const { productType } = match.params;

  const themes = {
    light: {
      nav: '#000c',
      subNavBackground: '#f2f2f299',
      subNavText: '#111',
      subNavTextHover: '#0070c9',
    },
    dark: {
      nav: '#0a0a0a',
      subNavBackground: '#111112',
      subNavText: '#f5f5f7',
      subNavTextHover: '#2997ff',
    },
  };

  const theme = productType === 'iphone' || productType === 'tv' ? themes.dark : themes.light;

  const menuItems = [
    {
      name: 'Apple',
      link: '/',
    },
    {
      name: 'Mac',
      link: '/mac',
    },
    {
      name: 'iPad',
      link: '/ipad',
    },
    {
      name: 'iPhone',
      link: '/iphone',
    },
    {
      name: 'Watch',
      link: '/watch',
    },
    {
      name: 'TV',
      link: '/tv',
    },
    {
      name: 'Music',
      link: '/music',
    },
    {
      name: 'Support',
      link: '/',
    },
    {
      name: 'Search',
      link: '/',
    },
    {
      name: 'Shop',
      link: '/',
    },
  ];

  return (
    <>
      <nav className={styles.Nav} css={{ background: theme.nav }}>
        <div className={styles.NavContent}>
          <ul className={styles.NavList}>
            {menuItems.map((menuItem) => (
              <li className={styles.NavItem} key={menuItem.name}>
                {menuItem.link === '/'
                  ? (
                    <Link
                      to={menuItem.link}
                      className={styles[`NavLink${menuItem.name}`]}
                    >
                      <span className={styles.NavLinkText}>{menuItem.name}</span>
                    </Link>
                  )
                  : (
                    <NavLink
                      to={menuItem.link}
                      className={styles[`NavLink${menuItem.name}`]}
                    >
                      <span className={styles.NavLinkText}>{menuItem.name}</span>
                    </NavLink>
                  )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className={styles.Placeholder} />

      {productType ? <SubNav productType={productType} theme={theme} /> : <div />}
      <div css={{ height: 2000 }} />
    </>
  );
};

Nav.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      productType: PropTypes.string,
    }),
  }).isRequired,
};

export default Nav;
