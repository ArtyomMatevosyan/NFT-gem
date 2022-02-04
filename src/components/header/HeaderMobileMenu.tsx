import { FC } from "react";

import { shallowEqual, useDispatch } from "react-redux";

import { ReactComponent as DiscordIcon } from "../../assets/header/discordIcon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/header/instagramIcon.svg";
import SearchIcon from "../../assets/home/SearchIcon";
import { changeMobileMenuState } from "../../redux/features/create/createSlice";
import { useAppSelector } from "../../redux/hook";

import HeaderNavigationLink from "./HeaderNavigationLink";
import { HeaderMobileMenuProps } from "./model";

const HeaderMobileMenu: FC<HeaderMobileMenuProps> = ({
  currentId,
  setCurrentId,
  clientConfig,
}) => {
  const dispatch = useDispatch();

  const { mobileMenuState } = useAppSelector(
    ({ createData }) => ({
      mobileMenuState: createData.data.mobileMenuState,
    }),
    shallowEqual
  );

  return (
    <>
      <div
        className="headerMobileMenu__blur"
        onClick={() => dispatch(changeMobileMenuState(!mobileMenuState))}
      ></div>
      <div className="headerMobileMenu">
        {/* <div
        className={
          mobileMenuState ? "headerMobileMenu_open" : "headerMobileMenu"
        }
      > */}
        <div className="headerMobileMenu_searchPart">
          <SearchIcon color="#C4C4C4" />
          <input type="text" placeholder="Enter your search here" />
        </div>
        <div
          className="headerMobileMenu_links"
          onClick={() =>
            setTimeout(
              () => dispatch(changeMobileMenuState(!mobileMenuState)),
              1000
            )
          }
        >
          {clientConfig
            ? clientConfig.headerNavItems.map((nav, index) => {
                return (
                  <HeaderNavigationLink
                    path={nav.link}
                    name={nav.text}
                    id={index.toString()}
                    currentId={currentId}
                    setCurrentId={setCurrentId}
                    key={index}
                  />
                );
              })
            : null}
          <div className="headerMobileMenu_links__createButton">
            <button>Create</button>
          </div>
        </div>
        <div className="headerMobileMenu_downPart">
          <DiscordIcon />
          <InstagramIcon />
        </div>
      </div>
    </>
  );
};

export default HeaderMobileMenu;
