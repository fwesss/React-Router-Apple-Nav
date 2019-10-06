/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/core';

import styles from './SubNav.module.scss';
import productData from '../../navData';
import SubNavItem from './SubNavItem';


const SubNav = ({ productType, theme }) => (
  <nav
    className={styles.SubNav}
    css={{ background: theme.subNavBackground }}
  >
    <div className={styles.SubNavWrapper}>
      <ul className={styles.SubNavItems}>
        {productData[productType].map((product) => (
          <SubNavItem
            key={product.id}
            productType={productType}
            product={product}
            theme={theme}
          />
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
