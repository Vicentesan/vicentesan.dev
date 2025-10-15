import { cva } from 'class-variance-authority';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface AnimatedLinkProps extends React.ComponentProps<'span'> {
  href: string;
  target?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  alias?: boolean;
  size?: 'base';
}

export const AnimatedButtonVariants = cva(
  'relative w-fit after:absolute after:bottom-0 after:left-0 after:h-[0.5px] after:w-full after:origin-bottom-left after:scale-x-100 after:bg-inherit after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-0',
  {
    variants: {
      variant: {
        primary: 'text-primary',
        secondary: 'text-muted-foreground'
      },
      size: {
        base: 'text-[13px]'
      }
    },
    defaultVariants: {
      size: 'base'
    }
  }
);

export const AnimatedLink = ({
  href,
  target,
  className,
  children,
  variant = 'secondary',
  size = 'base',
  alias = false,
  ...props
}: AnimatedLinkProps) => {
  return (
    <span
      {...props}
      className={cn(AnimatedButtonVariants({ size }), className, {
        'after:bg-primary': variant === 'primary',
        'after:bg-muted-foreground': variant === 'secondary'
      })}
    >
      <Link
        href={href}
        target={target}
        className={cn(
          alias && 'cursor-alias',
          variant === 'primary' && 'text-primary',
          variant === 'secondary' && 'text-muted-foreground'
        )}
      >
        {children}
      </Link>
    </span>
  );
};
