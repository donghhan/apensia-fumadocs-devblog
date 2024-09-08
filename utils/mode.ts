import { LibraryIcon, LucideIcon } from "lucide-react";

export type Mode = {
  param: string;
  name: string;
  description: string;
  icon: LucideIcon;
};

export const modes: Mode[] = [
  {
    param: "letha-backend",
    name: "Backend",
    description: "Letha backend",
    icon: LibraryIcon,
  },
  {
    param: "letha-frontend",
    name: "Frontend",
    description: "Letha frontend",
    icon: LibraryIcon,
  },
  {
    param: "misc",
    name: "Miscellaneous",
    description: "etc",
    icon: LibraryIcon,
  },
];
