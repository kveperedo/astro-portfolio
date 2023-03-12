import clsx from 'clsx';
import { portfolioCollection } from '../../content/config';
import Tag from '../Tag';

interface TimelineProps {
    className?: string;
    startDate: { month: string; year: number };
    endDate?: { month: string; year: number };
    title: string;
    titleExtension?: string;
    subtitle: string;
    tags?: string[];
    content?: string[];
    stickyDots?: boolean;
}

const Timeline = ({
    className,
    content,
    subtitle,
    title,
    titleExtension,
    tags,
    startDate,
    endDate,
    stickyDots = true,
}: TimelineProps) => {
    return (
        <div className={clsx('flex', className)}>
            <div
                className={clsx(
                    'mr-10 hidden w-11 flex-col items-end pt-16 md:flex',
                    stickyDots && 'md:pt-[76px]'
                )}>
                <span className="mb-1 text-2xl text-neutral-200">
                    {startDate.month}
                </span>
                <span className="text-neutral-300">{startDate.year}</span>
                {endDate && (
                    <>
                        <span className="text-2xl">-</span>
                        <span className="mb-1 text-2xl text-neutral-200">
                            {endDate.month}
                        </span>
                        <span className="text-neutral-300">{endDate.year}</span>
                    </>
                )}
            </div>
            <div className="relative flex-1 border-l-2 border-neutral-500 px-8 py-16 pr-0 md:px-10 md:pr-8">
                <div
                    className={clsx(
                        'flex h-3 w-3 ',
                        stickyDots
                            ? 'sticky top-[9px] ml-[-39px] md:top-[21px] md:ml-[-47px]'
                            : 'absolute left-[-7px] top-[52px]'
                    )}>
                    <span className="absolute top-[18px] -z-10 h-full w-full animate-ping rounded-full bg-neutral-400/50 md:top-[21px]" />
                    <span className="absolute top-[18px] h-full w-full rounded-full bg-neutral-50 md:top-[21px]" />
                </div>

                <span className="text-neutral-300 md:hidden">
                    <>
                        {startDate.month} {startDate.year}
                        {endDate && ` - ${endDate.month} ${endDate.year}`}
                    </>
                </span>

                <h3 className="mb-1 text-2xl">
                    <span className="font-semibold">{title}</span>
                    {titleExtension}
                </h3>

                <h5 className="font-thin text-neutral-200">{subtitle}</h5>

                {tags && (
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                        {tags.map((label) => (
                            <Tag>{label}</Tag>
                        ))}
                    </div>
                )}
                {content && (
                    <ul className="mt-6 flex w-auto list-inside list-disc flex-col gap-3 rounded-2xl border-2 border-neutral-800 bg-neutral-900/40 p-6 shadow-xl backdrop-blur md:list-outside lg:w-[864px]">
                        {content.map((detail) => (
                            <li className="font-thin leading-loose tracking-wide text-neutral-200 md:ml-6">
                                {detail}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Timeline;
