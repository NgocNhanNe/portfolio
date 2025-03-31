import { NavigationBar } from '@/components/NavigationBar';
import Image from 'next/image';
import avt from './../assets/images/avt_cv2 copy.jpg';
import { data } from './_lib/data';
export default function Home() {
  return (
    <div className='bg-[#161616] h-screen'>
      {/* header */}
      <NavigationBar />

      <div className='w-full flex justify-center items-center flex-col'>
        <div className=' relative max-w-[1200px] flex flex-col  items-center w-full '>
          <div className='pt-30 flex items-start justify-between w-full'>
            <div className='flex flex-col items-start gap-2 w-full z-1'>
              <div className='px-6 py-3 border border-white w-fit h-fit rounded-full text-white'>
                HI, I&rsquo;M OCEAN NGUYEN
              </div>
              <span className='text-stroke-white text-[100px] stroke-2 stroke font-[family-name:var(--font-dela-gothic-one)]'>
                SOFTWARE
              </span>
              <div className=' w-full flex justify-end'>
                <div className=' text-white text-[100px] stroke-2 stroke font-[family-name:var(--font-dela-gothic-one)]'>
                  ENGINEER
                </div>
                <div>
                  {data.highlight.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className=' absolute right-0 w-[220px] h-[220px] flex items-start justify-center z-0'>
              <Image
                src={avt}
                alt='logo'
                width={280}
                height={280}
                className='w-full h-full rounded-full'
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
