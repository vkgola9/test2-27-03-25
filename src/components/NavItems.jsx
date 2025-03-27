import { useSettings } from './SettingsContext.jsx';
import { HomeIcon, Flame, Snowflake, MessageCircleQuestion } from "lucide-react";
import Index from "../pages/Index.jsx";
import FurnaceInstallation from "../pages/heating/FurnaceInstallation.jsx";
import BoilerRepair from "../pages/heating/BoilerRepair.jsx";
import HeatPumpServices from "../pages/heating/HeatPumpServices.jsx";
import EmergencyHeatingRepairs from "../pages/heating/EmergencyHeatingRepairs.jsx";
import ACInstallation from "../pages/cooling/ACInstallation.jsx";
import ACRepair from "../pages/cooling/ACRepair.jsx";
import DuctlessSystems from "../pages/cooling/DuctlessSystems.jsx";
import EmergencyCoolingRepairs from "../pages/cooling/EmergencyCoolingRepairs.jsx";
import Contact from "../pages/generic/Contact.jsx";
import FAQ from "../pages/generic/FAQ.jsx";
import HeatingServices from "../pages/heating/HeatingServices.jsx";
import CoolingServices from "../pages/cooling/CoolingServices.jsx";
import PrivacyPolicy from "../pages/generic/PrivacyPolicy.jsx";
import TermsOfUse from "../pages/generic/TermsOfUse.jsx";
import navItemsData from '../../settings/navSettings.json';

const icons = {
  HomeIcon: <HomeIcon className="h-4 w-4" />,
  Flame: <Flame className="h-4 w-4" />,
  Snowflake: <Snowflake className="h-4 w-4" />,
  MessageCircleQuestion: <MessageCircleQuestion className="h-4 w-4" />
};

const pages = {
  Index: <Index />,
  FurnaceInstallation: <FurnaceInstallation />,
  BoilerRepair: <BoilerRepair />,
  HeatPumpServices: <HeatPumpServices />,
  EmergencyHeatingRepairs: <EmergencyHeatingRepairs />,
  ACInstallation: <ACInstallation />,
  ACRepair: <ACRepair />,
  DuctlessSystems: <DuctlessSystems />,
  EmergencyCoolingRepairs: <EmergencyCoolingRepairs />,
  Contact: <Contact />,
  FAQ: <FAQ />,
  HeatingServices: <HeatingServices />,
  CoolingServices: <CoolingServices />,
  PrivacyPolicy: <PrivacyPolicy />,
  TermsOfUse: <TermsOfUse />
};

const replacePlaceholders = (text, settings) => text ? text.replace(/\${settings.City}/g, settings.City) : text;

const NavItems = () => {
  const settings = useSettings();

  if (!settings) {
    return []; // Or a loading state
  }

  const navItems = navItemsData.navItems.map(item => ({
    ...item,
    icon: icons[item.icon] || null,
    page: pages[item.page] || null,
    pageDesc: replacePlaceholders(item.pageDesc, settings),
    subItems: item.subItems ? item.subItems.map(subItem => ({
          ...subItem,
          page: pages[subItem.page] || null,
          pageDesc: replacePlaceholders(subItem.pageDesc, settings)
        }))
      : null
  }));

  return navItems;
};

export default NavItems;
