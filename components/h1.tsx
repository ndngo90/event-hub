import { cn } from '@/lib/utils';

type H1Props = {
  children: string | React.ReactNode;
  className?: string | undefined;
};
export default function H1({ children, className }: H1Props) {
  return (
    <h1
      className={cn(
        'text-3xl lg:text-5xl font-extrabold mb-8 tracking-tight',
        className
      )}
    >
      {children}
    </h1>
  );
}
