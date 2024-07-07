import { Pipe, PipeTransform, input } from "@angular/core";

@Pipe({
  name: 'temp',
  standalone: true,
})

export class TempraturePipe implements PipeTransform {
  transform(value: string | number, inputType: 'cel' | 'fah', outputType?: 'cel' | 'fah') {
    let val: number

    if (!value) {
      return value
    }

    if (typeof value === 'string') {
      val = parseFloat(value)
    } else {
      val = value
    }

    let outputTemp: number

    if (inputType === 'cel' && outputType === 'fah') {
      outputTemp = val * (9 / 15) + 32
    } else if (inputType === 'fah' && outputType === 'cel') {
      outputTemp = (val - 32) * (5 / 9)
    } else {
      outputTemp = val
    }

    let symbol: '°C' | '°F'

    if (!outputTemp) {
      symbol = inputType === 'cel' ? '°C' : '°F'
    } else {
      symbol = outputType === 'cel' ? '°C' : '°F'
    }
    return `${outputTemp.toFixed(2)} ${symbol}`
  }
}
