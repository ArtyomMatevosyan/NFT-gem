import { lazy } from "react";

const About = lazy(() => import("./pages/About"));
const FAQ = lazy(() => import("./pages/Faq"));
const Marketplace = lazy(() => import("./pages/Marketplace"));

const Create = lazy(() => import("./pages/CreatePage"));
const LootBox = lazy(() => import("./pages/LootBoxPage"));
const Gempool = lazy(() => import("./pages/GempoolPage"));
const CardPack = lazy(() => import("./pages/CardPackPage"));
const Raffle = lazy(() => import("./pages/RafflePage"));
const AttributedNFT = lazy(() => import("./pages/AttributedNFTPage"));

const AboutGempool = lazy(() => import("./pages/AboutGempools"));
const AboutLootbox = lazy(() => import("./pages/AboutLootbox"));
const AboutRaffles = lazy(() => import("./pages/AboutRaffles"));
const AboutCardPack = lazy(() => import("./pages/AboutCardPack"));
const AboutAttributedNFT = lazy(() => import("./pages/AboutAttributedNFT"));

const GempoolDetails = lazy(() => import("./pages/GempoolDetailsPage"));
const LootboxDetails = lazy(() => import("./pages/LootboxDetailsPage"));
const RaffleDetails = lazy(() => import("./pages/RaffleDetailsPage"));
const CardCheckDetails = lazy(() => import("./pages/CardCheckDetailsPage"));

const Creator = lazy(() => import("./pages/CreatorPage"));

const routes = [
  {
    enabled: true,
    path: "/about",
    component: () => <About />,
    title: "About page",
    child: null,
  },

  {
    enabled: true,
    path: "/faq",
    component: () => <FAQ />,
    title: "FAQ page",
    child: null,
  },
  {
    enabled: true,
    path: "/marketplace",
    component: () => <Marketplace />,
    title: "Marketplace page",
    child: null,
  },
  {
    enabled: true,
    path: "/create",
    component: () => <Create />,
    title: "Create page",
    child: null,
  },
  {
    enabled: true,
    path: "/create/lootbox",
    component: () => <LootBox />,
    title: "Gempool",
    child: null,
  },
  {
    enabled: true,
    path: "/create/gempool",
    component: () => <Gempool />,
    title: "Gempool",
    child: null,
  },
  {
    enabled: true,
    path: "/create/cardpack",
    component: () => <CardPack />,
    title: "CardPack",
    child: null,
  },
  {
    enabled: true,
    path: "/create/raffle",
    component: () => <Raffle />,
    title: "Raffle",
    child: null,
  },
  {
    enabled: true,
    path: "/create/attributedNft",
    component: () => <AttributedNFT />,
    title: "Attributed NFT",
    child: null,
  },
  {
    enabled: true,
    path: "/aboutGempool",
    component: () => <AboutGempool />,
    title: "About Gempool",
    child: null,
  },
  {
    enabled: true,
    path: "/aboutLootbox",
    component: () => <AboutLootbox />,
    title: "About Lootbox",
    child: null,
  },
  {
    enabled: true,
    path: "/aboutRaffles",
    component: () => <AboutRaffles />,
    title: "About Raffles",
    child: null,
  },
  {
    enabled: true,
    path: "/aboutCardPack",
    component: () => <AboutCardPack />,
    title: "About Card Pack",
    child: null,
  },
  {
    enabled: true,
    path: "/aboutAttributedNFT",
    component: () => <AboutAttributedNFT />,
    title: "About Attributed NFT",
    child: null,
  },
  {
    enabled: true,
    path: "/creator",
    component: () => <Creator />,
    title: "Creator home page",
    child: null,
  },
  {
    enabled: true,
    path: "/details/gempool",
    component: () => <GempoolDetails />,
    title: "Gempool Details",
    child: null,
  },
  {
    enabled: true,
    path: "/details/lootbox",
    component: () => <LootboxDetails />,
    title: "Gempool Details",
    child: null,
  },
  {
    enabled: true,
    path: "/details/raffle",
    component: () => <RaffleDetails />,
    title: "Raffle Details",
    child: null,
  },
  {
    enabled: true,
    path: "/details/cardCheck",
    component: () => <CardCheckDetails />,
    title: "Card Check Details",
    child: null,
  },
  // {
  //   enabled: true,
  //   path: "/*",
  //   component: () => <NotFound />,
  //   title: "Page Not found",
  //   child: null,
  // },
];

export default routes.filter((route) => route.enabled);
