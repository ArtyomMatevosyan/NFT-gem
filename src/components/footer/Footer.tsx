import { shallowEqual } from "react-redux";
import { NavLink } from "react-router-dom";

import { useAppSelector } from "../../redux/hook";

const Footer = () => {
  const { progress, connectWalletState, createPopupState, menuPopupState } =
    useAppSelector(
      ({ createData }) => ({
        progress: createData.progress,
        connectWalletState: createData.connectWalletState,
        createPopupState: createData.createPopupState,
        menuPopupState: createData.menuPopupState,
      }),
      shallowEqual
    );

  return (
    <div
      className={
        progress !== 0 ||
        connectWalletState ||
        createPopupState ||
        menuPopupState
          ? "footer__container--blur"
          : "footer__container"
      }
    >
      <div className="footer__container__wrapper">
        <div className="footer__description">
          <div className="footer__description--logo"></div>
          <div className="footer__description--desc">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              a provident tempora praesentium laboriosam delectus nesciunt
              dolores commodi in quaerat. Nobis tenetur harum architecto est sed
              neque! Ipsum, temporibus rerum!
            </p>
          </div>
        </div>
        <div className="footer__services">
          <div className="footer__services--create">
            <div className="footer__services--create--title">Create</div>
            <div className="footer__services--create--services">
              <NavLink to="/attributedNft">NFT Staking Pools</NavLink>
              <NavLink to="/">NFT Lootboxes</NavLink>
              <NavLink to="/">NFT Raffles</NavLink>
            </div>
          </div>
          <div className="footer__services--myAccount">
            <div className="footer__services--myAccount--title ">
              My account
            </div>
            <div className="footer__services--myAccount--services">
              <NavLink to="/cardpack">My Profile</NavLink>
              <NavLink to="/gempool">My Gem Pools</NavLink>
              <NavLink to="/lootbox">My Lootboxes</NavLink>
              <NavLink to="/raffle">My Raffles</NavLink>
            </div>
          </div>
          <div className="footer__services--about">
            <div className="footer__services--about--title">Company</div>
            <div className="footer__services--about--services">
              <NavLink to="/about">About</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="footer__copyright--left">
          <p>© 2021 NFTGem LCC. All rights reserved.</p>
        </div>
        <div className="footer__copyright--right">
          <NavLink to="/">Privacy Policy</NavLink>
          <NavLink to="/">Terms of Service</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
