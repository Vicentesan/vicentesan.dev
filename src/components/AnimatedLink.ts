import type { Html } from '@effect/ui/html';

interface AnimatedLinkOptions {
  readonly href: string;
  readonly variant?: 'primary' | 'secondary';
  /** Opens in a new tab. */
  readonly external?: boolean;
}

const underline =
  'relative w-fit text-[13px] after:absolute after:bottom-0 after:left-0 after:h-[0.5px] after:w-full after:origin-bottom-left after:scale-x-100 after:bg-inherit after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-0';

/**
 * A link whose underline retracts on hover. It returns the `<a>` builder, so
 * the caller's children and handlers land on the anchor; the underline is
 * drawn by the `<span>` wrapped around it.
 */
export const AnimatedLink = <M>(
  h: Html.H<M>,
  { href, variant = 'secondary', external = false }: AnimatedLinkOptions
) =>
  h.a
    .attr('href', href)
    .attr('target', external ? '_blank' : undefined)
    .attr('rel', external ? 'noopener noreferrer' : undefined)
    .class(variant === 'primary' ? 'text-primary' : 'text-muted-foreground')
    .forward((anchor) =>
      h.span
        .class(underline, variant === 'primary' ? 'after:bg-primary' : 'after:bg-muted-foreground')
        .children(anchor)
    );
