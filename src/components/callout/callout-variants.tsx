import { cva, type VariantProps } from 'class-variance-authority';

const variations = ['primary', 'information', 'success', 'danger', 'warning'];
type Variations = (typeof variations)[number];

const variant = {
  primary: [
    'bg-primary-200',
    'border-primary-500',
    'text-primary-900',
    'dark:bg-primary-900',
    'dark:border-primary-200',
    'dark:text-primary-200',
  ],
  information: [
    'bg-info-200',
    'border-info-500',
    'text-info-900',
    'dark:bg-info-900',
    'dark:border-info-200',
    'dark:text-info-200',
  ],
  success: [
    'bg-success-200',
    'border-success-500',
    'text-success-900',
    'dark:bg-success-900',
    'dark:border-success-200',
    'dark:text-success-200',
  ],
  danger: [
    'bg-danger-200',
    'border-danger-500',
    'text-danger-900',
    'dark:bg-danger-900',
    'dark:border-danger-200',
    'dark:text-danger-200',
  ],
  warning: [
    'bg-warning-200',
    'border-warning-500',
    'text-warning-900',
    'dark:bg-warning-900',
    'dark:border-warning-200',
    'dark:text-warning-200',
  ],
};

export const variants = cva(['p-4', 'rounded-lg', 'border', 'shadow-md', 'space-y-4'], {
  variants: {
    variant,
  },
});

export type CalloutVariants = VariantProps<typeof variants>;
