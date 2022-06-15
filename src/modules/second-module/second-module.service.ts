import { Injectable } from '@nestjs/common'

let names: Array<string> = ['Grzegorz', 'Lukasz', 'Kamil', 'Darek']

@Injectable()
export class SecondModuleService {
    getHello(): string {
        return 'Hello World!'
    }

    getNames() {
        return names
    }

    addNames() {
        const newName = 'Jacek'

        return names.concat(newName)
    }

    deleteName() {
        return names = []
    }

    patchName() {
        return names.slice(1,4)
    }
}