import NgxStringly from '../ngx-stringly';

test('Parsing', () => {
  expect(NgxStringly.parsing('The quick brown fox jumps over the lazy dog.', 'lazy')).toEqual({
    content: 'lazy',
    prefix: 'The quick brown fox jumps over the ',
    suffix: ' dog.',
  });
});
