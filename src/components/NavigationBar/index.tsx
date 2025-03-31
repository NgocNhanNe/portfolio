export const NavigationBar = () => {
  return (
    <div className='flex justify-center items-center fixed top-6 left-0 right-0'>
      <div className='bg-[#5849FF] w-120 flex  px-12 py-4 bg-background-glass-ac2 rounded-full  shadow-lg'>
        <ul className='w-full flex text-white items-center justify-between'>
          <li className='text-lg text-[18px] leading-[140%] tracking-[0px] text-white font-[family-name:var(--font-dela-gothic-one)] stroke-white stroke-2 space-x-2'>
            OCEAN
          </li>
          <li className='text-lg'>About</li>
          <li className='text-lg'>Work</li>
          <li className='text-lg'>Contact</li>
        </ul>
      </div>
    </div>
  );
};
