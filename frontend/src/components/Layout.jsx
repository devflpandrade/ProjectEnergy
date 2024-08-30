import React from 'react';

const Layout = ({ children }) => {
  return (
    <div 
      className="flex flex-col min-h-screen"
      style={{ 
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1048%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient1049%26quot%3b)'%3e%3c/rect%3e%3cpath d='M1440 0L960.36 0L1440 140.08z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M960.36 0L1440 140.08L1440 160.76000000000002L549.4200000000001 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M549.4200000000001 0L1440 160.76000000000002L1440 349.69000000000005L458.74000000000007 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M458.74 0L1440 349.69000000000005L1440 471.76000000000005L245.03 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 560L427.27 560L0 469.36z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 469.36L427.27 560L588.65 560L0 284.59000000000003z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 284.59L588.65 560L1050.65 560L0 129.74999999999997z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 129.75L1050.65 560L1256.49 560L0 107.65z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1048'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='50%25' x2='100%25' y2='50%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1049'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='%2300459e' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-gray-200 text-gray-700 p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 ProjectEnergy. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
