import React, { ReactNode } from 'react';
import { useMergedClassNames } from '../../../hooks/useMergedClassNames';

interface CategoryWrapperProps {
  className?: string;
  children: ReactNode;
}

export const CategoryWrapper: React.FC<CategoryWrapperProps> = ({
  className,
  children
}) => {
  const classNames = useMergedClassNames(
    ['axr-categorizeddropdown-category-wrapper'],
    className
  );

  return <div className={classNames}>{children}</div>;
};
