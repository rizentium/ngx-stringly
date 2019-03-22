import { Searcher } from '../';

test('Parsing non-identical', () => {
  expect(Searcher.parse('The quick brown fox jumps over the lazy dog.', 'Lazy')).toEqual({
    content: 'lazy',
    prefix: 'The quick brown fox jumps over the ',
    suffix: ' dog.',
  });
});

test('Parsing identical', () => {
  expect(Searcher.parse('The quick brown fox jumps over the lazy dog.', 'lazy', true)).toEqual({
    content: 'lazy',
    prefix: 'The quick brown fox jumps over the ',
    suffix: ' dog.',
  });
});
