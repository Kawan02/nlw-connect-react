import type { ComponentProps } from 'react'

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton(props: IconButtonProps) {
  return (
    <button
      {...props}
      className="p-1.5 cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300 h-12 bg-gray-500 text-blue rounded-md"
    />
  )
}
