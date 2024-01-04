import cn from '@/shared/lib/classNames';

describe('classNames', () => {
  test('one string param', () => {
    expect(cn('test')).toBe('test');
  });

  test('two string params', () => {
    expect(cn('test', 'bebe')).toBe('test bebe');
  });

  test('one mode param', () => {
    expect(cn({ dodo: true })).toBe('dodo');
  });

  test('two mode params in one obj', () => {
    expect(cn({ dodo: true, didi: true })).toBe('dodo didi');
  });

  test('two mode params in one obj (one false)', () => {
    expect(cn({ dodo: true, didi: false })).toBe('dodo');
  });

  test('two mode params with string', () => {
    expect(cn('test', { dodo: true, didi: false })).toBe('test dodo');
  });

  test('two mode params two obj(both true)', () => {
    expect(cn({ dodo: true }, { didi: true })).toBe('dodo didi');
  });

  test('two mode params two obj(one false)', () => {
    expect(cn({ dodo: true }, { didi: false })).toBe('dodo');
  });

  test('array param', () => {
    expect(cn(['dudu', 'dada'])).toBe('dudu dada');
  });

  test('array param with obj', () => {
    expect(cn(['dudu', 'dada', { dede: true }])).toBe('dudu dada dede');
  });

  test('string + mode + array', () => {
    expect(cn('test', { dodo: true }, { didi: false }, ['dudu', 'dada'], 'bebe')).toBe('test dodo dudu dada bebe');
  });
});
