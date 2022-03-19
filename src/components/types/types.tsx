export interface ILoginProps {
  getUserStatus?: (setIsLogin: boolean) => void;
}

export interface SelectOptions {
  id: number;
  value: string;
  label: string;
}
