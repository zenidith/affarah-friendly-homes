import React, { useEffect } from 'react';

const Thanks = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-center p-4 overflow-hidden">
      <img 
        src="/images/team-anime.png" 
        alt="Team Illustration" 
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 z-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-center">
        <img 
          src="/images/affaran-logo-circle.png" 
          alt="Affaran Logo" 
          className="w-32 h-32 mb-6"
        />
        <h1 className="text-4xl font-bold text-navy dark:text-white mb-4">Thank You!</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">Your message has been sent successfully.</p>
        <h1 className="text-3xl font-bold text-navy dark:text-white mb-4">ありがとうございます！</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">メッセージは正常に送信されました。</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Redirecting to the homepage in 5 seconds...</p>
      </div>
    </div>
  );
};

export default Thanks;
