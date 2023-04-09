type Node<T> = {
  value: T;
  next: Node<T>;
}

export default class Queue<T> {
    public length: number;
    private head: undefined | Node<T>;
    private tail: undefined | Node<T>;

    constructor() {
      this.head = this.tail = undefined
      this.length = 0;
    }

    enqueue(item: T): void {
      const node = { value: item } as Node<T>;

      this.length++

      if (!this.tail) {
        this.head = this.tail = node;
        return;
      }

      this.tail.next = node;
      this.tail = node;
    }

    deque(): T | undefined {
      if (!this.head) {
        return;
      }

      const head = this.head;
      this.head = this.head.next;
      this.length--;


      return head?.value;
    }

    peek(): T | undefined {
      if (!this.head) {
        this.head = this.tail
      }

      return this.head?.value
    }
}
