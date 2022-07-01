import InfoIcon from '@mui/icons-material/Info';
import ConstructionIcon from '@mui/icons-material/Construction';
import WorkIcon from '@mui/icons-material/Work';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export const mainNavbarItems = [
  {
    id: 0,
    icon: <InfoIcon />,
    label: "About",
    route: "about", 
  },
  {
    id: 1,
    icon: <ConstructionIcon />,
    label: "MySkills",
    route: "myskills", 
  },
  {
    id: 2,
    icon: <WorkIcon />,
    label: "Work",
    route: "work", 
  },
  {
    id: 3,
    icon: <AlternateEmailIcon />,
    label: "Contact",
    route: "contact", 
  },
]