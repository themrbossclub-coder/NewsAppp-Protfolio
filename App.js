import React, { useEffect, useState } from 'react';
import { supabase } from './src/lib/supabase';
import AppNavigator from './src/AppNavigator';
import { ThemeProvider } from './src/context/ThemeContext';



export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if a session already exists
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setUser(session.user);
      }
    });

    // Listen for login/logout changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener?.subscription?.unsubscribe();
    };
  }, []);

  return (
    <ThemeProvider>
      <AppNavigator user={user} />
    </ThemeProvider>
  );


}
