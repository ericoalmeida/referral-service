import { CodeCreatorProtocol } from '@data/protocols/code-creator.protocol'

class CodeCreatorStub implements CodeCreatorProtocol {
  create (): string {
    return 'S'
  };
}

export { CodeCreatorStub }
