import { Injectable } from '@nestjs/common'
import { v4 as uuid } from 'uuid'
import { Person } from './persons'

let persons: Array<Person> = [
  {
    name: 'Lukasz',
    age: 26,
    uuid: uuid()
  },
  {
    name: 'Kamil',
    age: 28,
    uuid: uuid()
  },
  {
    name: 'Darek',
    age: 15,
    uuid: uuid()
  },
  {
    name: 'Jacek',
    age: 21,
    uuid: uuid()
  },
  {
    name: 'Jarek',
    age: 31,
    uuid: uuid()
  }
]

@Injectable()
export class ThirdModuleService {
  findByName(name: string) {
    console.log(persons.find(person => person.name === name))
    return persons.find(person => person.name === name)
  }

  addPerson(name: string, age: number) {
    const newPerson: Person = {
      name: name,
      age: age,
      uuid: uuid()
    }
    persons = persons.concat(newPerson)

    return persons
  }

  deletePerson(name: string) {

    return persons = persons.filter(person => person.name !== name)
  }

  patchName(changeName: string, name: string, age: number) {
    persons.forEach(person => {
      if (person.name === changeName) {
        person.name = name
        person.age = age
      }
    })

    return persons
  }
}