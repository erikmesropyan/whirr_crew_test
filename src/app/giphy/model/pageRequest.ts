export class PageRequest {

  private constructor(private readonly offset: number, private readonly limit: number) {
  }

  static of(offset: number, limit: number) {
    return new this(offset, limit)
  }

  static default(limit: number = 9) {
    return new this(0, limit)
  }

  public toString() {
    return `limit=${this.limit}&offset=${this.offset}`
  }

}
