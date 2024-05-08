import React from 'react'
interface SectionHeadingProps {
  title: string;
}
export default function SectionHeading({title}:SectionHeadingProps) {
  return (
    <div className='text-3xl font-medium capitalize mb-8 text-center'>{title}</div>
  )
}
