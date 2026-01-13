import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className='min-h-dvh bg-main flex flex-col items-center justify-center text-white'>
            <h2 className=' text-9xl font-semibold'>
                404
            </h2>
            <h2 className='capitalize  lg:text-6xl'>
                page Not Found
            </h2>
            <Link className='goBack transition-all duration-300 cursor-pointer' to={'/'} >
            <h2 className='flex items-center space-x-3 mt-3'>
                <span className='text-lg'>Go Back</span>
                <span className='border rounded-full w-9 h-9 flex items-center justify-center'>
                    <ArrowRight />
                </span>
            </h2></Link>
        </div>
    );
}