import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'Customers | Next js Dashboard',
};


export default function Page() {
  return (
    <>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Customers Page</h1>

        <div className='flex justify-center items-center'>
          <p className='text-md text-red-500 mt-10'>Working on it...</p>
        </div>
    </>
  )

}