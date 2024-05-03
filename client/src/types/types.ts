import { ButtonHTMLAttributes } from "react";

export interface ITodoList {
  id: number;
  title: string;
  description: string;
  status: {
    id: number;
    status: string;
  };
}

export interface ErrorResponse {
  response: {
    data: {
      message: string;
    };
  };
}

export interface Data {
  title?: string;
  description?: string;
  status?: string;
}

type ButtonType = "submit" | "reset" | "button";

export interface TypesButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Оновлено тип onClick
  disabled: boolean;
  type: ButtonType;
}

export interface PropsSelect {
  isValue: string;
  isLoading: boolean;
  handelCheng: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface InputProps {
  labelTitle: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
