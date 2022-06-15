import { Injectable } from '@nestjs/common'
import { v4 as uuid } from 'uuid'
import { Person } from './types/persons'
import { FifthModuleService } from '../fifth-module/fifth-module.service'

let persons: Array<Person> = [
  {
    firstName: "lukasz",
    lastName: "pawlowski",
    yearOfBirth: 1996,
    uuid: uuid(),
    favouriteColors: ["blue", "green"]
  },
  {
    firstName: "jacek",
    lastName: "pudysz",
    yearOfBirth: 1992,
    uuid: uuid(),
    favouriteColors: ["red", "yellow"]
  },
  {
    firstName: "grzegorz",
    lastName: "wadas",
    yearOfBirth: 1991,
    uuid: uuid(),
    favouriteColors: ["blue", "red"]
  },
  {
    firstName: "kamil",
    lastName: "starzyk",
    yearOfBirth: 1990,
    uuid: uuid(),
    favouriteColors: ["pink", "green"]
  },
  {
    firstName: "darek",
    lastName: "jabczan",
    yearOfBirth: 1992,
    uuid: uuid(),
    favouriteColors: ["white", "green", "blue"]
  }
]

@Injectable()
export class FourthModuleService {
  constructor(
    private readonly FifthModuleService: FifthModuleService
  ) {
  }

  findByName(firstName: string, lastName: string) {
    return persons.find(person => person.firstName === firstName && person.lastName === lastName)
  }

  findByYear(yearOfBirth: number) {
    return persons.find(person => person.yearOfBirth === yearOfBirth)
  }

  addPerson(firstName: string, lastName: string, yearOfBirth: number, favouriteColors: Array<string>) {
    const newPerson: Person = {
      firstName: firstName,
      lastName: lastName,
      yearOfBirth: yearOfBirth,
      uuid: uuid(),
      favouriteColors: favouriteColors
    }
    persons = persons.concat(newPerson)

    return newPerson
  }

  deletePerson(uuid: string) {
    return persons = persons.filter(person => person.uuid !== uuid)
  }

  updateName(uuid: string, firstName: string, lastName: string, yearOfBirth: number) {
    persons.forEach(person => {
      if(person.uuid === uuid) {
        person.firstName = firstName
        person.lastName = lastName
        person.yearOfBirth = yearOfBirth
      }
    })

    return persons
  }
}