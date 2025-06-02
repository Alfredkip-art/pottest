import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserRole, AuthState } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, firstName: string, lastName: string, role: UserRole) => Promise<void>;
  logout: () => void;
  resetPassword: (email: string) => Promise<void>;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>(initialState);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser) as User;
        setAuthState({
          user,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        localStorage.removeItem('user');
        setAuthState({
          ...initialState,
          isLoading: false,
        });
      }
    } else {
      setAuthState({
        ...initialState,
        isLoading: false,
      });
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setAuthState({
        ...authState,
        isLoading: true,
        error: null,
      });

      // This is a mock implementation - in a real app, this would be an API call
      // Simulating API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock user data based on email
      const role: UserRole = 
        email.includes('admin') ? 'admin' : 
        email.includes('trainer') ? 'trainer' : 
        email.includes('parent') ? 'parent' : 'student';
      
      const user: User = {
        id: '1',
        email,
        firstName: 'Demo',
        lastName: 'User',
        role,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      localStorage.setItem('user', JSON.stringify(user));

      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setAuthState({
        ...authState,
        isLoading: false,
        error: 'Invalid email or password',
      });
    }
  };

  const signup = async (
    email: string, 
    password: string, 
    firstName: string, 
    lastName: string, 
    role: UserRole
  ) => {
    try {
      setAuthState({
        ...authState,
        isLoading: true,
        error: null,
      });

      // This is a mock implementation - in a real app, this would be an API call
      // Simulating API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const user: User = {
        id: '1',
        email,
        firstName,
        lastName,
        role,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      localStorage.setItem('user', JSON.stringify(user));

      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setAuthState({
        ...authState,
        isLoading: false,
        error: 'Failed to create account',
      });
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
  };

  const resetPassword = async (email: string) => {
    try {
      setAuthState({
        ...authState,
        isLoading: true,
        error: null,
      });

      // This is a mock implementation - in a real app, this would be an API call
      // Simulating API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setAuthState({
        ...authState,
        isLoading: false,
      });
    } catch (error) {
      setAuthState({
        ...authState,
        isLoading: false,
        error: 'Failed to reset password',
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        signup,
        logout,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};