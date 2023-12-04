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
  email?: string;
  setEmail?: (value: string) => void | null;
  placeholder: string;
  type: string;
  error?: string;
};

export type LinksTypes = {
  id: number;
  name: string;
  path: string;
};
