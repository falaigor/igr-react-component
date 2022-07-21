export const useMergedClassNames = (
  newCssClasses: string[],
  propsClassName?: string
) => {
  return `${newCssClasses.join(' ')} ${propsClassName ?? ''}`.trim();
};
