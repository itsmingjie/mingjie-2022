import type { PropsWithChildren } from 'react';
import { Sidebar } from '../sidebar';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Sidebar />

      <main>{children}</main>
    </div>
  );
};
