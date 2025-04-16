import clsx from "clsx";

type CTAButtonProps = {
  id: string;
  title: string;
  rightIcon?: any;
  leftIcon?: any;
  ref?: any;
  containerClass: string;
};

const CTAButton = ({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass,
  ref,
}: CTAButtonProps) => {
  return (
    <button
      id={id}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black",
        containerClass
      )}
      ref={ref}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-general">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>

      {rightIcon}
    </button>
  );
};

export default CTAButton;
