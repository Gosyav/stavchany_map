import { AuthProvider } from 'react-admin';

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    if (username !== 'admin' || password !== 'admin') {
      throw new Error('Login failed');
    }

    localStorage.setItem('username', username);
  },

  checkError: async (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      throw new Error('Session expired');
    }
  },

  checkAuth: async () => {
    if (!localStorage.getItem('username')) {
      throw new Error('Not authenticated');
    }
  },

  logout: async () => {
    localStorage.removeItem('username');
  },

  getIdentity: async () => {
    const username = localStorage.getItem('username') || '';

    return { id: username, fullName: username };
  },
};
