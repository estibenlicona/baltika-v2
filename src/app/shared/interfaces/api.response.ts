export interface ApiResponse<T = void> {
    body?: T;
    message?: string;
    errors?: string[];
    statusCode?: number;
  }