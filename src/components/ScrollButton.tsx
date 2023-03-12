import clsx from 'clsx';

interface ScrollButtonProps {
    href: string;
    className?: string;
}

const ScrollButton = ({ href, className }: ScrollButtonProps) => {
    const handleClick = () => {
        const section = document.querySelector(href);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button
            onClick={handleClick}
            className={clsx('cursor-pointer', className)}>
            <svg
                className="h-6 w-6 animate-bounce text-neutral-100"
                xmlns="http:www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"></path>
            </svg>
        </button>
    );
};

export default ScrollButton;
