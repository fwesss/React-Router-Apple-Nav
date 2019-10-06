/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { jsx } from '@emotion/core';

import styles from './SubNav.module.scss';
import productData from '../../navData';


const SubNav = ({ productType, theme }) => (
  <nav className={styles.SubNav} css={{ background: theme.subNavBackground }}>
    <div className={styles.SubNavWrapper}>
      <ul className={styles.SubNavItems}>
        {productData[productType].map((product) => (
          <li className={styles.SubNavItem}>
            <Link
              to="/"
              key={product.name}
              className={styles.SubNavLink}
              css={{ color: theme.subNavText, '&:hover': { color: theme.subNavTextHover } }}
            >
              <figure
                className={styles.SubNavIcon}
                css={{ backgroundImage: `url('${process.env.PUBLIC_URL}/images/product-icons/${productType}/${product.name.replace(/ /g, '-').toLowerCase()}.svg')` }}
              />
              <span className={styles.SubNavLabel}>{product.name}</span>
              {product.new ? <span className={styles.New}>New</span> : false}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

SubNav.propTypes = {
  productType: PropTypes.string.isRequired,
  theme: PropTypes.shape({
    nav: PropTypes.string,
    subNavBackground: PropTypes.string,
    subNavText: PropTypes.string,
    subNavTextHover: PropTypes.string,
  }).isRequired,
};

export default SubNav;
