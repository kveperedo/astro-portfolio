interface TagProps {
    children: string;
}

const Tag = ({ children }: TagProps) => {
    return (
        <span className="inline-flex rounded-full border border-neutral-800 bg-neutral-900 py-2 px-4 text-xs text-neutral-300 font-semibold">
            {children}
        </span>
    );
};

export default Tag;
