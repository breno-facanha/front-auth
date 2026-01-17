import { useRouter } from 'next/router';

export default function Unauthorized() {
  const router = useRouter();

  const handleGoLogin = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Error Code */}
        <h1 className="text-9xl font-light text-gray-900 mb-4">
          401
        </h1>

        {/* Error Title */}
        <h2 className="text-2xl font-normal text-gray-700 mb-6">
          Não autorizado
        </h2>

        {/* Error Description */}
        <p className="text-gray-500 mb-8">
          Faça login para acessar este recurso.
        </p>

        {/* Action Button */}
        <button
          onClick={handleGoLogin}
          className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
        >
          Fazer login
        </button>
      </div>
    </div>
  );
}
