const linkedlist = require('../linkedList/LinkedList.ts');

describe('#insertAtHead', () => {
  test('should add the element to the beginning of the list', () => {
    const ll = new linkedlist();
    ll.insertAtHead(10);
    const oldHead = ll.head;
    ll.insertAtHead(20);

    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);
  });
});

describe('#getByIndex', () => {
  describe('with index less than 0', () => {
    test('it returns null', () => {
      const ll = new linkedlist.fromValues(10, 20);
      expect(ll.getByIndex(-1)).toBeNull();
    });
  });

  describe('with index greater than list length', () => {
    test('it returns null', () => {
      const ll = new linkedlist.fromValues(10, 20);
      expect(ll.getByIndex(5)).toBeNull();
    });
  });

  describe('with index 0', () => {
    test('it returns the head', () => {
      const ll = new linkedlist.fromValues(10, 20);
      expect(ll.getByIndex(0).value).toBe(10);
    });
  });

  describe('with index in the middel', () => {
    test('it returns the element at that index', () => {
      const ll = new linkedlist.fromValues(10, 20, 30, 40);
      expect(ll.getByIndex(2).value).toBe(30);
    });
  });
});

describe('#insertAtIndex', () => {
  describe('with index less than 0', () => {
    test('it does not insert anything', () => {
      const ll = new linkedlist.fromValues(10, 20);
      ll.insertAtIndex(-1, 30);

      expect(ll.length).toBe(2);
    });
  });

  describe('with index greater than list length', () => {
    test('it does not insert anything', () => {
      const ll = new linkedlist.fromValues(10, 20);
      ll.insertAtIndex(3, 30);

      expect(ll.length).toBe(2);
    });
  });

  describe('with index 0', () => {
    test('insert at the head', () => {
      const ll = new linkedlist.fromValues(10, 20);
      ll.insertAtIndex(0, 30);
      expect(ll.head.value).toBe(30);
      expect(ll.head.next.value).toBe(10);
      expect(ll.length).toBe(3);
    });
  });

  describe('with index tail', () => {
    test('insert at the tail', () => {
      const ll = new linkedlist.fromValues(10, 20);
      const tail = ll.length;
      ll.insertAtIndex(tail, 30);
      expect(ll.getByIndex(tail).value).toBe(30);
      expect(ll.getByIndex(tail).next).toBeNull();
      expect(ll.length).toBe(3);
    });
  });

  describe('with index in the middel', () => {
    test('insert at the given index', () => {
      const ll = new linkedlist.fromValues(10, 20, 30, 40);
      ll.insertAtIndex(2, 50);
      const node = ll.getByIndex(2);

      expect(node.value).toBe(50);
      expect(node.next.value).toBe(30);
      expect(ll.length).toBe(5);
    });
  });
});

describe('#removeHead', () => {
  test('removes the head', () => {
    const ll = new linkedlist.fromValues(10, 20, 30);
    ll.removeHead();

    expect(ll.head.value).toBe(20);
    expect(ll.length).toBe(2);
  });
});

describe('#removeAtIndex', () => {
  describe('with index less than 0', () => {
    test('it does not remove anything', () => {
      const ll = new linkedlist.fromValues(10, 20);
      ll.removeAtIndex(-1);
      expect(ll.length).toBe(2);
    });
  });

  describe('with index greater than list length', () => {
    test('it does not remove anything', () => {
      const ll = new linkedlist.fromValues(10, 20);
      ll.removeAtIndex(5);
      expect(ll.length).toBe(2);
    });
  });

  describe('with index 0', () => {
    test('remove the head', () => {
      const ll = new linkedlist.fromValues(10, 20, 30);
      ll.removeAtIndex(0);
      expect(ll.head.value).toBe(20);
      expect(ll.head.next.value).toBe(30);
      expect(ll.length).toBe(2);
    });
  });

  describe('with index tail', () => {
    test('remove the tail', () => {
      const ll = new linkedlist.fromValues(10, 20, 30);
      ll.removeAtIndex(ll.length - 1);
      expect(ll.getByIndex(ll.length - 1).value).toBe(20);
      expect(ll.length).toBe(2);
    });
  });

  describe('with index in the middel', () => {
    test('remove the given index', () => {
      const ll = new linkedlist.fromValues(10, 20, 30, 40);
      ll.removeAtIndex(2);
      const node = ll.getByIndex(1);

      expect(node.value).toBe(20);
      expect(node.next.value).toBe(40);
      expect(ll.length).toBe(3);
    });
  });
});

describe('#sort', () => {
  test('it should sort the linked list', () => {
    const ll = new linkedlist.fromValues( 5, 4, 6, 10, 2,1)
    const sortedLl = ll.sort()

    expect(sortedLl.head.value[0]).toBe(1)
    expect(sortedLl.head.value[sortedLl.length]).toBe(10)
  })
})

describe('#reverseSort', () => {
  test('it should inverse the sorted linked list', () => {
    const ll = new linkedlist.fromValues( 5, 4, 6, 2,1)
    const sortedLl = ll.reverseSort()

    expect(sortedLl.head.value[0]).toBe(6)
    expect(sortedLl.head.value[ll.length-1]).toBe(1)
  })
})