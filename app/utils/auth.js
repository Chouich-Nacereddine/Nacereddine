import { parseCookies } from 'nookies';

export const isAuthenticated = (ctx) => {
    const cookies = parseCookies(ctx);
  
    const token = cookies.yourAuthToken; 
    return !!token;
  };