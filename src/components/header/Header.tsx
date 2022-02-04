import { useEffect, useState } from "react";

import { useMoralis } from "react-moralis";
import { shallowEqual } from "react-redux";
import { useHistory } from "react-router";

import { useAppSelector } from "../../redux/hook";
import { clientConfig } from "../../utils/config";

import HeaderMobileMenu from "./HeaderMobileMenu";
import HeaderNavigation from "./HeaderNavigation";
import HeaderNavigationMobile from "./HeaderNavigationMobile";
import HeaderNavigationWallets from "./HeaderNavigationWallets";
// import { HeaderPropsTypes } from "./model";

const Header = () => {
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth);
  window.addEventListener(
    "resize",
    () => setDisplayWidth(window.innerWidth),
    false
  );

  const history = useHistory();
  const { isAuthenticated, isWeb3Enabled } = useMoralis();

  const [headerClass, setHeaderClass] = useState<string>("header__container");
  const [currentId, setCurrentId] = useState<null | string>(null);

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

  const { progress, connectWalletState, menuPopupState, mobileMenuState } =
    useAppSelector(
      ({ createData }) => ({
        progress: createData.data.progress,
        connectWalletState: createData.data.connectWalletState,
        createPopupState: createData.data.createPopupState,
        menuPopupState: createData.data.menuPopupState,
        mobileMenuState: createData.data.mobileMenuState,
      }),
      shallowEqual
    );

  const config = process.env.CLIENT
    ? clientConfig[process.env.CLIENT]
    : clientConfig["NextGem"];

  return (
    <>
      <div
        className={
          progress !== 0 || menuPopupState || connectWalletState
            ? "header__container--blur"
            : `${
                headerClass === "header__container"
                  ? "header__container"
                  : "header__container__scrolled"
              }`
        }
      >
        <div className="header__container__wrapper">
          <div
            className="header__logo"
            onClick={() => {
              setCurrentId(null);
              history.push("/");
            }}
          >
            {config.brandName}
          </div>
          <div className="header__navigation">
            {displayWidth <= 850 ? (
              <HeaderNavigationMobile
                isAuthenticated={isAuthenticated}
                isWeb3Enabled={isWeb3Enabled}
              />
            ) : null}
            <HeaderNavigation
              currentId={currentId}
              setCurrentId={setCurrentId}
              clientConfig={config}
            />
            <HeaderNavigationWallets
              isAuthenticated={isAuthenticated}
              isWeb3Enabled={isWeb3Enabled}
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
          </div>
        </div>
      </div>
      {mobileMenuState ? (
        <HeaderMobileMenu
          currentId={currentId}
          setCurrentId={setCurrentId}
          clientConfig={config}
          // isOpenHeaderMobileMenu={isOpenHeaderMobileMenu}
        />
      ) : null}
    </>
  );
};

export default Header;
