const TOKEN_KEY = import.meta.env.VITE_TOKEN_KEY;

export const clearToken = () => {
  uni.removeStorageSync(TOKEN_KEY);
};

export const setToken = (token: string) => {
  uni.setStorageSync(TOKEN_KEY, `Bearer ${token}`);
};

export const getToken = () => uni.getStorageSync(TOKEN_KEY) || '';
