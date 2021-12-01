import {
  FC,
  // useEffect
} from "react";

import {
  shallowEqual,
  // useDispatch
} from "react-redux";

// import { connectWallet, menuPopup } from "../redux/features/create/createSlice";
import { useAppSelector } from "../redux/hook";

import Footer from "./footer/Footer";
import Header from "./header/Header";
import ConnectWallet from "./wallet/ConnectWallet";
import MenuPopup from "./wallet/MenuPopup";
declare global {
  interface Window {
    ethereum: any;
  }
}

const Layout: FC = ({ children }) => {
  const {
    progress,
    connectWalletState,
    createPopupState,
    menuPopupState,
    // account,
  } = useAppSelector(
    ({ createData,
      //  walletData
       }) => ({
      progress: createData.progress,
      connectWalletState: createData.connectWalletState,
      createPopupState: createData.createPopupState,
      menuPopupState: createData.menuPopupState,
      // account: walletData.account,
    }),
    shallowEqual
  );

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (account?.length === 42) {
  //     dispatch(connectWallet(false));
  //     dispatch(menuPopup(true));
  //   }
  // }, [dispatch, account]);

  return (
    <div className="layout">
      <Header />
      <div
        className={progress === 0 ? "layout__buffer" : "layout__buffer--blur"}
      ></div>
      <div
        className={
          connectWalletState
            ? "layout__connectWallet"
            : "layout__connectWallet--hide"
        }
      >
        <div>
          <ConnectWallet />
        </div>
      </div>

      <div
        className={
          menuPopupState ? "layout__menuPopup" : "layout__menuPopup--hide"
        }
      >
        <div>
          <MenuPopup />
        </div>
      </div>

      <div
        className={
          connectWalletState || createPopupState || menuPopupState
            ? "layout__children--blur"
            : "layout__children"
        }
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
