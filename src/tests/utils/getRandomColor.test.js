import getRandomColor from '../../utils/getRandomColor'

describe('getRandomColor', () => {
  test('should return a random color -1', () => {
    const randomColor = getRandomColor();

    expect(randomColor).toBeDefined();
  })

  test('should return a random color -2',  () => {
    const randomColor = getRandomColor();

    expect(randomColor).toMatch(new RegExp('^#([a-fA-F0-9]{6})$'));
  })
  
})