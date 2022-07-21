import { useMergedClassNames } from '../useMergedClassNames';

describe('useMergedClassNames', () => {
  it('merges component classes with props classes', () => {
    const classNames = useMergedClassNames(
      ['test-class-1', 'test-class-2'],
      'class-from-props'
    );
    expect(classNames).toEqual('test-class-1 test-class-2 class-from-props');
  });

  it('handles undefined props class', () => {
    const classNames = useMergedClassNames(['c1', 'c2'], undefined);
    expect(classNames).toEqual('c1 c2');
  });

  it('handles empty component classes', () => {
    const classNames = useMergedClassNames([], 'props-class');
    expect(classNames).toEqual('props-class');
  });

  it('handles every class as empty', () => {
    const classNames = useMergedClassNames([], undefined);
    expect(classNames).toEqual('');
  });
});
