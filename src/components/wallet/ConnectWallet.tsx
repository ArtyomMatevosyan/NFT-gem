import { useCallback, useEffect } from "react";

import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { shallowEqual, useDispatch } from "react-redux";
import Web3 from "web3";

import { ReactComponent as AddWalletIcon } from "../../assets/wallet/AddWalletIcon.svg";
import { ReactComponent as MetaMask } from "../../assets/wallet/MetaMask.svg";
import { ReactComponent as WalletConnect } from "../../assets/wallet/walletconnect.svg";
import {
  connectWallet,
  menuPopup,
} from "../../redux/features/create/createSlice";
import {
  setAccount,
  setBalance,
} from "../../redux/features/wallet/walletSlice";
import { useAppSelector } from "../../redux/hook";

import * as connectors from "./connectors";
import WalletNameCard from "./WalletNameCard";

const ConnectWallet = () => {
  const { connectWalletState, account } = useAppSelector(
    ({ createData, walletData }) => ({
      connectWalletState: createData.connectWalletState,
      account: walletData.account,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const context = useWeb3React<ethers.providers.Web3Provider>();

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      "https://ropsten.infura.io/v3/5db0a2fb8a8948fdbe57bb19eecb5674"
    )
  );

  useEffect(() => {
    if (localStorage.getItem("account") !== "undefined") {
      account &&
        web3.eth
          .getBalance(localStorage.getItem("account") as string)
          .then((res) =>
            dispatch(setBalance(web3.utils.fromWei(res, "ether")))
          );
    }
  }, [dispatch, web3.utils, web3.eth, account]);

  const walletConnect = JSON.parse(
    localStorage.getItem("walletconnect") as string
  );

  useEffect(() => {
    if (!!walletConnect) {
      dispatch(setAccount(walletConnect.accounts[0]));
      dispatch(connectWallet(false));
    }
  }, [walletConnect, dispatch]);

  const localStorageAccount = localStorage.getItem("account") as string;

  useEffect(() => {
    if (!localStorageAccount || localStorageAccount.length < 42) {
      if (
        localStorageAccount === "undefined" ||
        !localStorageAccount ||
        localStorageAccount === "null" ||
        localStorageAccount !== context.account
      ) {
        dispatch(setAccount(context.account as string));
        localStorage.setItem("account", context.account as string);
      } else {
        dispatch(setAccount(localStorageAccount));
      }
    }
  }, [context, dispatch, localStorageAccount]);

  useEffect(() => {
    if (!window.ethereum && localStorage.getItem("clickedStatus")) {
      dispatch(connectWallet(true));
    } else if (window.ethereum && localStorage.getItem("clickedStatus")) {
      dispatch(connectWallet(true));
    }
  }, [dispatch]);

  const handleMetamaskConnect = useCallback(async () => {
    context.activate(connectors["metamask"]());
    if (!window.ethereum) {
      localStorage.setItem("clickedStatus", "true");
      openInNewTab("https://metamask.io/download.html");
    } else {
      localStorage.removeItem("clickedStatus");
      await localStorage.getItem("account");
      dispatch(connectWallet(false));
      dispatch(menuPopup(true));
    }
  }, [context, dispatch]);

  const handleWalletConnect = useCallback(() => {
    context.activate(connectors["walletconnect"]());
    if (!!walletConnect) {
      dispatch(menuPopup(true));
    }
  }, [context, dispatch, walletConnect]);

  return (
    <div>
      <div
        className={connectWalletState ? "connectWallet" : "connectWallet--hide"}
      >
        <div className="connectWallet__container">
          <div className="connectWallet__container--heading">
            <p className="connectWallet__container--heading--title">
              Connect your wallet
            </p>
          </div>
          <div className="connectWallet__container__wallets">
            <WalletNameCard
              className="connectWallet"
              walletName="Metamask"
              onClick={handleMetamaskConnect}
            >
              <MetaMask />
            </WalletNameCard>

            <WalletNameCard
              onClick={handleWalletConnect}
              walletName="WalletConnect"
              className="connectWallet"
            >
              <WalletConnect />
            </WalletNameCard>
          </div>
        </div>
      </div>
      <div className="connectWallet__container--btnDiv">
        <AddWalletIcon /> Connect or create a new one.
      </div>
    </div>
  );
};

export default ConnectWallet;
