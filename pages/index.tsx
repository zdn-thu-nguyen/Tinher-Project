import Image from "next/image";
import facebook from '../public/image/welcome/facebook.png';
import google from '../public/image/welcome/google.png';
import apple from '../public/image/welcome/apple.png';
import mainImage from '../public/image/welcome/welcomeImage.png';
import styles from '../styles/home.module.scss';
import HeaderWelcome from "../components/layout/welcome/header/header";

export default function Home() {
  return (
    <div className={`${styles.welcome} container`}>
      {/* =============== HEADER ================  */}
      <HeaderWelcome />

      {/* =============== BODY ================  */}
      <section className={styles.welcome__body}>
        <p className={styles.body__title}>Tonder</p>
        <Image src={mainImage} alt='main-image' />
        <p className={styles.body__text}>Đăng nhập</p>
        <span className={styles.body__description}>Vui lòng chọn hình thức đăng nhập để tiếp tục sử dụng</span>
        <button className={styles.body__button}>Đăng nhập bằng số điện thoại</button>
      </section>
      {/* =============== FOOTER ================  */}
      <section className={styles.welcome__footer}>
        <p className={styles.footer__text}>Hoạc đăng nhập với</p>
        <div className={styles.footer__social}>
          <Image src={facebook} alt='facebook' />
          <Image src={google} alt='google' />
          <Image src={apple} alt='apple' />
        </div>
      </section>
    </div>
  )
}

