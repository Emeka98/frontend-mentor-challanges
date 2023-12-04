export type NavTypes = {
  id: number;
  title: string;
  path: string;
};

export type ButtonProps = {
  id?: number;
  title: string;
  onClick?: () => void;
};

export type InputProps = {
  placeholder: string;
  type: string;
};

export type LinksTypes = {
  id: number;
  name: string;
  path: string;
};
