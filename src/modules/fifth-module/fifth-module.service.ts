import { Injectable } from '@nestjs/common'

let colorsArray: Array<string> = ["blue", "green", "red", "yellow", "blue", "red", "pink", "green", "white", "green", "blue"]
const colorsSet = new Set<string>(colorsArray)

@Injectable()
export class FifthModuleService {
  findByName(favouriteColor: string) {
    if (colorsSet.has(favouriteColor)){
      return favouriteColor
    }
  }

  addColor(favouriteColors: Array<string>) {
    favouriteColors.forEach(color => {
      colorsSet.add(color)
    })

    return colorsArray = Array.from(colorsSet)
  }

  removeColor(favouriteColor: string) {
    colorsSet.delete(favouriteColor)

    return colorsArray = Array.from(colorsSet)
  }

  updateName(removeColor: string, addColor: string) {
    colorsSet.delete(removeColor)
    colorsSet.add(addColor)

    return colorsArray = Array.from(colorsSet)
  }

}
