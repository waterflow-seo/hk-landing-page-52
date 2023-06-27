import { getPlayLink } from '@utilities/dev';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <main className='w-full h-full'>
      <div className='relative bg-mbl sm:bg-dt bg-cover w-full h-full'>
        <div className='flex flex-col justify-between h-full items-center'>
          <div />
          <div className='relative w-[350px] sm:w-[600px] md:w-[700px] lg:w-[800px] duration-200'>
            <div className='hidden sm:block'>
              <Image
                src='/assets/main/girl-dt.png'
                alt='girl-dt'
                layout='responsive'
                width={1261}
                height={1027}
              />
            </div>

            <div className='sm:hidden'>
              <Image
                src='/assets/main/girl-mbl.png'
                alt='girl-mbl'
                layout='responsive'
                width={582}
                height={999}
              />
            </div>

            <div className='absolute bottom-5 w-full flex justify-center'>
              <div className='flex flex-col items-center gap-2'>
                <div>
                  <h1 className='text-[36px] md:text-[40px] lg:text-[48px] text-center font-bold text-primary'>
                    牌咖大亨
                  </h1>
                  <h2 className='text-[36px] md:text-[40px] lg:text-[48px] text-center font-bold text-primary'>
                    送分停不了
                  </h2>
                </div>
                <Link href={getPlayLink()}>
                  <a>
                    <div className='relative w-[200px]'>
                      <Image
                        src='/assets/main/button.png'
                        alt='button'
                        layout='responsive'
                        width={359}
                        height={110}
                      />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
