import Link from "next/link";
import clsx from "clsx";
import { forwardRef } from "react";

type CTAButtonProps = {
  id: string;
  title: string;
  href?: string;
  newTab?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  containerClass?: string;
};

const CTAButton = forwardRef<
  HTMLButtonElement & HTMLAnchorElement,
  CTAButtonProps
>(
  (
    { id, title, href, newTab = false, rightIcon, leftIcon, containerClass },
    ref
  ) => {
    const classes = clsx(
      "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black",
      containerClass
    );

    const content = (
      <>
        {leftIcon}
        <span className="relative inline-flex overflow-hidden font-general">
          <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[160%] group-hover:skew-y-12">
            {title}
          </div>
          <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
            {title}
          </div>
        </span>
        {rightIcon}
      </>
    );

    // External link or open in new tab
    if (href && (href.startsWith("http") || newTab)) {
      return (
        <a
          id={id}
          href={href}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }

    // Internal Next.js link
    if (href) {
      return (
        <Link
          href={href}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {content}
        </Link>
      );
    }

    // Plain button
    return (
      <button
        id={id}
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
      >
        {content}
      </button>
    );
  }
);

CTAButton.displayName = "CTAButton";
export default CTAButton;
