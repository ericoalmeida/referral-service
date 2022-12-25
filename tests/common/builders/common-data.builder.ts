
import { Data, DataBuilder } from '@tests/common/builders/data.builder'

interface CommonData extends Data {}

class CommonDataBuilder<T> extends DataBuilder<T> {
  protected data: CommonData = {}

  public build (): T {
    return this.data as T
  }
}

export { CommonDataBuilder }
