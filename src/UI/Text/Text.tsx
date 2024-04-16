import { FC, PropsWithChildren } from "react";

type Variant = 'text' | 'sectionTitle' | 'subtitle' | 'smallSubtitle' | 'smallDate';

type Props = PropsWithChildren<{
  className?: string;
  variant?: Variant;
}>

function getClasses(variant: Variant) {
  switch (variant) {
    case 'text':
      return 'text-xs';
    case 'sectionTitle':
      return 'text-xl font-semibold';
    case 'subtitle':
      return 'text-lg font-medium';
    case 'smallSubtitle':
      return 'italic font-semibold text-slate-800 text-sm';
    case 'smallDate':
      return 'text-slate-600 text-sm';
    default:
      return '';
  }
}

export const Text: FC<Props> = function Text({ children, className, variant = 'text' }) {
  return (
    <div className={`${getClasses(variant)} ${className || ''}`}>
      {children}
    </div>
  );
}
