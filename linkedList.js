class Node {
  constructor(data = null, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.list = null
  }

  append(data) {
    const node = new Node(data)
    if (!this.list) {
      this.list = node
      return
    }
    let tmp = this.list
    while (tmp.next) tmp = tmp.next
    tmp.next = node
  }

  prepend(data) {
    this.list = new Node(data, this.list)
  }

  size() {
    let tmp = this.list
    let size = 0
    while (tmp) {
      tmp = tmp.next
      size += 1
    }
    return size
  }

  head() {
    return this.list
  }

  tail() {
    if (!this.list) return list

    let tmp = this.list
    while (tmp.next) tmp = tmp.next
    return tmp
  }

  at(index) {
    if (index < 0) throw new Error('Index must be a positive number')

    let tmp = this.list
    while (tmp && index >= 0) {
      if (index === 0) return tmp
      tmp = tmp.next
      index -= 1
    }
  }

  pop() {
    if (!this.list) return

    const size = this.size()
    const tmp = this.at(size - 2)
    const popped = tmp.next
    tmp.next = null
    return popped
  }

  contains(data) {
    let tmp = this.list
    while (tmp) {
      if (tmp.data === data) return true
      tmp = tmp.next
    }
    return false
  }

  find(data) {
    let tmp = this.list
    for (let index = 0; tmp; index++) {
      if (tmp.data === data) return index
      tmp = tmp.next
    }
    return null
  }

  toString() {
    let string = ''
    let tmp = this.list
    while (tmp) {
      string += `[ ${tmp.data} ] -> `
      tmp = tmp.next
    }
    return string + 'null'
  }

  insertAt(data, index) {
    if (index < 0) throw new Error('Index must be a positive number')
    else if (index === 0) return this.prepend(data)

    const node = new Node(data)
    let prev = this.list
    let tmp = prev.next
    for (let i = 1; tmp; i++) {
      if (i === index) {
        prev.next = node
        node.next = tmp
        return node
      }
      prev = prev.next
      tmp = tmp.next
    }
  }

  removeAt(index) {
    if (index < 0) throw new Error('Index must be a positive number')
    else if (index === 0) {
      let tmp = this.list
      this.list = this.list.next
      tmp.next = null
      return tmp
    }

    let prev = this.list
    let tmp = prev.next
    for (let i = 1; tmp; i++) {
      if (i === index) {
        prev.next = tmp.next
        tmp.next = null
        return tmp
      }
      prev = prev.next
      tmp = tmp.next
    }
  }
}
