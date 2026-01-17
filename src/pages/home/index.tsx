import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { instance } from '@/instance/instance';

interface UserData {
  id: string;
  name: string;
  email: string;
}

export default function Home() {
  const router = useRouter();
  const [userName, setUserName] = useState<string>('');
  
  useEffect(() => {
    const checkLoggedIn = async () => {
     const token = localStorage.getItem('token');

     if (!token) {
       return router.push('/login');
      }
      
      try {
        const response = await instance.get('auth/validate-token', {
          headers: {
            Authorization: `${token}`,
          },
        });

         if (!response || response.status !== 200) {
          router.push('/401');
        }
        setUserName(response.data.user);
      } catch (error) {
        router.push('/401');
      }
  } 
    checkLoggedIn();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 right-0 p-6">
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-lg"
        >
          Sair
        </button>
      </div>

      <div className="text-center pt-32 text-2xl font-semibold">
        Boas vindas ao sistema!
        <p className='text-white mt-4'>{userName}</p>
      </div>
    </div>
  );
}
