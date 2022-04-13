interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-full'>
        {children}
      </div>
    </>
  );
};
