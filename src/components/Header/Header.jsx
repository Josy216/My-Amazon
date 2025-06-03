import styles from './Header.module.css';
import { BsSearch } from 'react-icons/bs';
import { FaLocationDot } from "react-icons/fa6";
import LowerHeader from './LowerHeader';
import logo from './logo.png'
import { Link } from 'react-router-dom';
import cartIcon from './cart.png'
import { useContext } from 'react';
import { DataContext } from '../DataProvider/DataProvider';
import  {auth} from '../../utils/Firebase';
function Header() {

const [{user, basket}]= useContext(DataContext)
const totalItem = basket?.reduce((amount, item)=>{
  return item.amount + amount
}, 0)
  return (
    <div className={styles.fixed}>
      <section>
        <div className={styles.header__container}>
          <div className={styles.logo__container}>
            {/* Logo */}
            <div className={styles.logo__wrapper}>
              <Link to="/">
                <img
                  src={logo}
                  alt="Amazon Logo"
                  className={styles.logo}
                />
              </Link>
            </div>

            {/* Delivery */}
            <div className={styles.delivery}>
              <FaLocationDot className={styles.icon} />
              <div>
                <p className={styles.label}>Deliver to</p>
                <span className={styles.location}>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* search */}
          <div className={styles.search}>
            <select
              name="category"
              className={`${styles.search__select} no-style`}
            >
              <option value="">All</option>
              <option value="electronics">Electronics</option>
              <option value="books">Books</option>
            </select>

            <input
              type="text"
              placeholder="Search Amazon"
              className={`${styles.search__input} no-style`}
            />
            <button className={styles.search__button}>
              <BsSearch size={20} />
            </button>
          </div>

          {/* Right side links */}
          <div className={styles.order__container}>
            <Link to="#" className={styles.language}>
              <img
                src="https://th.bing.com/th/id/OIP.negtMnvm6KcK8VhtCm3MzQHaD_?cb=iwp2&rs=1&pid=ImgDetMain"
                alt="US Flag"
                className={styles.flag}
              />
              <select className={`${styles.language__select} no-style`}>
                <option value="en">EN</option>
                <option value="es">ES</option>
              </select>
            </Link>

            {/* three components */}
            <Link to={!user && "/signup"} className={styles.account}>
            <div>
              
            {
              user?(
                <>
                <p className={styles.label}>Hello, {user?.email?.split("@")[0]}</p>
                <span onClick={()=>auth.signOut()}>Sign Out</span>
                </>

              ):(
                <>
                <p className={styles.label}>Hello, sign in</p>
                <span className={styles.bold}>Account & Lists</span>

                </>
              )
            }
            </div>
            </Link>

            {/* orders */}
            <Link to="/orders" className={styles.orders}>
              <p className={styles.label}>Returns</p>
              <span className={styles.bold}>& Orders</span>
            </Link>

            {/* cart */}
            <Link to="/cart" className={styles.cart}>
              <img
                src={cartIcon}
                alt=""
                className={styles.icon}
                width='40px'
              />
              <span className={styles.cart__count}>{totalItem}</span>
              <span className={styles.cart__label}>Cart</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </div>
  );
}

export default Header;