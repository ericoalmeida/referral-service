const attributeSeparator = '.'

interface Data {
  [key: string]: any
}

abstract class DataBuilder<T> {
  protected data!: Data

  public with (attribute: string, value: any): this {
    const keysAttributes = attribute.split(attributeSeparator)

    let keys = this.data

    keysAttributes.forEach((key, index, list) => {
      if (index === list.length - 1) {
        keys[key] = value

        return
      }

      keys = keys[key]
    })

    return this
  }

  public buildMany (length: number): T[] {
    return Array.from({ length }, this.build.bind(this))
  }

  public abstract build (): T
}

export { DataBuilder, Data }
