import type { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonInterface extends ComponentProps<'button'> {
  children: ReactNode
}

export default function Button({ className, ...props }: ButtonInterface) {
  return (
    <button
      className={twMerge(
        'flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900',
        className
      )}
      {...props}
    />
  )
}
