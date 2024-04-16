import { IconCake, IconDeviceMobile, IconMail, IconBrandLinkedin, IconBrandGithub, IconMap2 } from '@tabler/icons-react';
import { Avatar, Field, Years } from "@/UI";
import data from './data.json';
import { FC } from 'react';

type Props = {
  variant?: 'full' | 'short';
}

export const Contacts: FC<Props> = function Contacts({ variant = 'full' }) {
  return (
    <article className="flex justify-between w-full">
      <div>
        <div>
          <div className="text-4xl font-semibold mb-2">
            {data.name}
          </div>
          <div className="text-xl mb-4">
            {data.position}
          </div>
          {variant === 'full' && <Field icon={<IconCake size={18} />} className='mb-1 text-sm'>
            {data.birth}
            <Years year={'07 April 1989'} className='ml-2' />
          </Field>}
          <div className={`${variant === 'full' ? 'flex' : ''} mb-1 text-sm`}>
            <Field icon={<IconDeviceMobile size={18} />} className='mr-6'>
              {process.env.phone}
            </Field>
            <Field icon={<IconMail size={20} />}>
              {process.env.email}
            </Field>
          </div>
          <Field icon={<IconBrandLinkedin size={18} />} className='mb-1 text-sm'>
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
              {data.linkedin}
            </a>
          </Field>
          {variant === 'full' && <Field icon={<IconBrandGithub size={18} />} className='mb-1 text-sm'>
            <a href={data.github} target="_blank" rel="noopener noreferrer">
              {data.github}
            </a>
          </Field>}
          {variant === 'full' && <Field icon={<IconMap2 size={18} />} className='text-sm'>
            {data.current_location}
          </Field>}
        </div>
      </div>
      <Avatar />
    </article>
  );
}
