import { useEffect, useState } from "react";

import { shallowEqual, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

import { ReactComponent as WalletIcon } from "../../assets/header/walletIcon.svg";
import {
  connectWallet,
  createPopup,
  menuPopup,
} from "../../redux/features/create/createSlice";
import { useAppSelector } from "../../redux/hook";

const Header = () => {
  const [headerClass, setHeaderClass] = useState<string>("header__container");

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos === 0 || prevScrollPos > currentScrollPos) {
        setHeaderClass("header__container");
      } else if (prevScrollPos < currentScrollPos) {
        setHeaderClass("scrolled__header");
      }
      prevScrollPos = currentScrollPos;
    };
  }, [headerClass]);

  const history = useHistory();

  const { progress, connectWalletState, menuPopupState, account } =
    useAppSelector(
      ({ createData, walletData }) => ({
        progress: createData.progress,
        connectWalletState: createData.connectWalletState,
        createPopupState: createData.createPopupState,
        menuPopupState: createData.menuPopupState,
        account: walletData.account,
      }),
      shallowEqual
    );

  const dispatch = useDispatch();

  const handleOpenConnectWalletModal = () => {
    dispatch(createPopup(false));
    dispatch(connectWallet(!connectWalletState));
  };

  const handleOpenCreatePopup = () => {
    dispatch(connectWallet(false));
    dispatch(menuPopup(false));
    history.push("/create");
  };

  const handleOpenMenuPopup = () => {
    dispatch(createPopup(false));
    dispatch(menuPopup(!menuPopupState));
  };

  const handleCloseAllPopups = () => {
    dispatch(connectWallet(false));
    dispatch(menuPopup(false));
    dispatch(createPopup(false));
  };

  return (
    <div
      className={
        progress !== 0
          ? "header__container--blur"
          : `${
              headerClass === "header__container"
                ? "header__container"
                : "header__container__scrolled"
            }`
      }
    >
      <div className="header__container__wrapper">
        <div className="header__logo">NextGem</div>
        <div className="header__navigation">
          <div
            className="header__navigation__links"
            onClick={handleCloseAllPopups}
          >
            <div>
              <NavLink to="/about">About</NavLink>
            </div>
            <div>
              <NavLink to="/marketplace">Marketplace</NavLink>
            </div>
            <div>
              <NavLink to="/faq">FAQ</NavLink>
            </div>
          </div>
          <div className="header__navigation__btn__container">
            <div
              className="header__navigation__btn__container--div--white"
              onClick={handleOpenCreatePopup}
            >
              <button>Create</button>
            </div>
            {account?.length === 42 || localStorage.getItem("walletconnect") ? (
              <div
                className="header__navigation__btn__container--div--black"
                onClick={handleOpenMenuPopup}
              >
                <WalletIcon />
              </div>
            ) : (
              <div
                className="header__navigation__btn__container--div--black"
                onClick={handleOpenConnectWalletModal}
              >
                <button>Connect Wallet</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
