import { VariantProps, tv } from 'tailwind-variants'
const buttonStyle = tv(
  {
    base: 'font-medium bg-blue-500 text-white rounded-full active: opacity-80',
    variants: {
      color: {
        primary: 'bg-blue-500 text-white hover:bg-blue-700',
        secondary: 'bg-purple-500 text-white hover:bg-purple-700',
        success: 'bg-green-500 hover:bg-green-700',
        black: 'bg-black text-white hover:bg-gray-900',
        gray: 'bg-black/[0.7] text-white',
        slate: 'bg-slate-300 text-black',
      },
      size: {
        sm: 'p-1 text-sm',
        md: 'px-5 py-3 text-base',
        lg: 'px-4 py-3 text-lg',
      },
      disabled: {
        true: 'opacity-50 bg-gray-500 pointer-events-none',
      },
    },

    defaultVariants: {
      size: 'md',
      color: 'primary',
    },
  },
  {
    responsiveVariants: ['sm', 'md', 'lg'],
  }
)

type ButtonVariants = VariantProps<typeof buttonStyle>

interface ButtonProps extends ButtonVariants {
  children: React.ReactNode
  onClick?: () => void
}

export default function Button({
  color,
  size,
  disabled,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={buttonStyle({ color, size, disabled })}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
