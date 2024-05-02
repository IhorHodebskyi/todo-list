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

export interface TypesButton {
  title: string;
  isLoading: boolean;
  deleteAsync: () => void;
}

export interface PropsSelect {
  isValue: string;
  isLoading: boolean;
  handelCheng: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
