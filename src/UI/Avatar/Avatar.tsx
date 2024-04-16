import Image from 'next/image';
import me from './me_smile.jpeg';

export function Avatar() {
  return (
    <div className='size-10 mr-44'>
      <div className="size-52 rounded-full flex justify-center items-center overflow-hidden shadow-lg mr-2">
        <Image src={me} alt='Vladimir Sorokin' />
      </div>
    </div>
  );
}
