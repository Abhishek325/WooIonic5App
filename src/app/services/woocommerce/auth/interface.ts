export interface RegisterPayload {
    username: string;
    email: string;
    user_pass?: string;
    nonce: string;
    display_name: string;
    notify: string;
  }
  
  export interface RegisterRsponse {
    cookie: string;
    status: string;
    user_id: number;
  }
  
  export interface LoginPayload {
    username: string;
    password: string;
  }
  
  export interface Token {
    token: string;
    user_email: string;
    user_nicename: string;
    user_display_name: string;
  }