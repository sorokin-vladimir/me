import { IconCake, IconDeviceMobile, IconMail, IconBrandLinkedin, IconBrandGithub, IconMap2 } from '@tabler/icons-react';
import { Avatar, Field, Years } from "@/UI";
import data from './data.json';

export function Contacts() {
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
          <Field icon={<IconCake />} className='mb-1'>
            {data.birth}
            <Years year={'07 April 1989'} className='ml-2' />
          </Field>
          <div className="flex mb-1">
            <Field icon={<IconDeviceMobile />} className='mr-6'>
              {process.env.phone}
            </Field>
            <Field icon={<IconMail />}>
              {process.env.email}
            </Field>
          </div>
          <Field icon={<IconBrandLinkedin />} className='mb-1'>
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
              {data.linkedin}
            </a>
          </Field>
          <Field icon={<IconBrandGithub />} className='mb-1'>
            <a href={data.github} target="_blank" rel="noopener noreferrer">
              {data.github}
            </a>
          </Field>
          <Field icon={<IconMap2 />}>
            {data.current_location}
          </Field>
        </div>
      </div>
      <Avatar />
    </article>
  );
}
