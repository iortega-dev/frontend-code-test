import store from '../../../stores/MainStore';
import BoxModel from '../../../stores/models/Box';

describe('BoxModel', () => {
  describe('Model', () => {
    test('should create model instance', () => {
      const box = BoxModel.create({
        id: '1',
        width: 200,
        height: 100,
        color: '#000000',
        left: 0,
        top: 0
      });
  
      expect(box.id).toBe('1')
      expect(box.selected).toBeFalsy()
    });
  })

  describe('Actions', () => {
    let box; 
    beforeEach(() => {
      box = BoxModel.create({
        id: '1',
        width: 200,
        height: 100,
        color: '#000000',
        left: 0,
        top: 0
      });
    })

    test('should toggle selected box', () => {
      box.toggleSelected()

      expect(box.selected).toBeTruthy();
    })

    test("should change box's color", () => {
      box.changeColor('#FFFFFF')

      expect(box.color).toBe('#FFFFFF');
    })

    test('should move box', () => {
      box.move(10, 10)

      expect(box.left).toBe(10);
      expect(box.top).toBe(10);
    })
    
  })
});
