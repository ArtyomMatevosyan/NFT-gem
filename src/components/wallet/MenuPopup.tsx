import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { shallowEqual, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

import { ReactComponent as CopyIcon } from "../../assets/header/copyIcon.svg";
import { ReactComponent as ReloadIcon } from "../../assets/wallet/reloadIcon.svg";
import {
  connectWallet,
  menuPopup,
} from "../../redux/features/create/createSlice";
import { setAccount } from "../../redux/features/wallet/walletSlice";
import { useAppSelector } from "../../redux/hook";

const MenuPopup = () => {
  const { pathname } = useLocation();

  const context = useWeb3React<ethers.providers.Web3Provider>();
  const { menuPopupState, account, balance } = useAppSelector(
    ({ createData, walletData }) => ({
      menuPopupState: createData.menuPopupState,
      account: walletData.account,
      balance: walletData.balance,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const handleCloseMenuPopup = () => dispatch(menuPopup(false));

  const accountFirstPart = account?.split("").slice(0, 6).join("");
  const accountSecondPart = account?.split("").slice(38, 42).join("");

  const copyAccount = () => {
    navigator.clipboard?.writeText(account);
  };

  const handleLogOut = () => {
    context.deactivate();
    dispatch(setAccount(""));
    localStorage.setItem("account", "");
    localStorage.removeItem("walletconnect");
    dispatch(connectWallet(true));
  };

  return (
    <div className={menuPopupState ? "menuPopup" : "menuPopup--hide"}>
      <div className="menuPopup__container">
        <div className="menuPopup__container__upperPart">
          <div className="menuPopup__container__upperPart__myWalletDiv">
            <div className="menuPopup__container__upperPart__myWalletDiv--titleDiv">
              <div>
                <ReloadIcon />
              </div>
              <p>My wallet</p>
            </div>
            <div className="menuPopup__container__upperPart__balance">
              <div className="menuPopup__container__upperPart__balance--balanceDiv">
                <div>
                  <span>ETH {balance}</span>
                  <p>Total Balance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="menuPopup__container__upperPart__myWalletDiv--tokenDiv">
            <p onClick={copyAccount}>
              {accountFirstPart}...{accountSecondPart}
            </p>
            <CopyIcon
              onClick={() => {
                copyAccount();
                alert(`${account} was copied on clipboard`);
              }}
            />
          </div>
        </div>
        <div
          className="menuPopup__container__profileDiv"
          onClick={handleCloseMenuPopup}
        >
          <div>
            <NavLink to={pathname}>My Profile</NavLink>
          </div>
          <div>
            <NavLink to={pathname}>My Creations</NavLink>
          </div>
          <div>
            <NavLink to={pathname}>My Favorites</NavLink>
          </div>
          <div>
            <NavLink to={pathname}>My Account Settings</NavLink>
          </div>
          <div onClick={handleLogOut}>
            <NavLink to={pathname}>Log Out</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPopup;
