/** @jsx jsx */
import { Link } from 'react-router-dom';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import styles from './SubNav.module.scss';


const SubNavItem = ({ productType, product, theme }) => (
  <li className={styles.SubNavItem} key={product.name}>
    <Link
      to="/"
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
);

SubNavItem.propTypes = {
  productType: PropTypes.string.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string,
    new: PropTypes.bool,
  }).isRequired,
  theme: PropTypes.shape({
    nav: PropTypes.string,
    subNavBackground: PropTypes.string,
    subNavText: PropTypes.string,
    subNavTextHover: PropTypes.string,
  }).isRequired,
};

export default SubNavItem;
