export type Mode = {
  param: string;
  name: string;
  description: string;
};

export const modes: Mode[] = [
  {
    param: "letha-backend",
    name: "Backend",
    description: "Letha backend",
  },
  {
    param: "letha-frontend",
    name: "Frontend",
    description: "Letha frontend",
  },
  {
    param: "misc",
    name: "Miscellaneous",
    description: "etc",
  },
];
