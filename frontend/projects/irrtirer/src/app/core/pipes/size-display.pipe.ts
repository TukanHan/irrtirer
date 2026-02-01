import { Pipe, PipeTransform } from '@angular/core';
import { Size } from '../../../../../active-canvas/src/public-api';

interface Unit {
    denominator: number;
    label: string;
}

const units: Unit[] = [
    {
        label: 'km',
        denominator: 100000,
    },
    {
        label: 'm',
        denominator: 100,
    },
    {
        label: 'cm',
        denominator: 1,
    },
    {
        label: 'mm',
        denominator: 0.1,
    },
    {
        label: 'µm',
        denominator: 0.0001,
    },
    {
        label: 'nm',
        denominator: 0.0000001,
    },
];

@Pipe({
    name: 'sizeDisplay',
})
export class SizeDisplayPipe implements PipeTransform {
    public transform(size: Size | null | undefined): string {
        if(!size) {
            return '0 x 0';
        }

        const unit: Unit = this.selectUnit(Math.max(size.width, size.height));
        return this.formatViewport(size, unit);
    }

    private selectUnit(value: number): Unit {
        for (const unit of units) {
            if (value > unit.denominator) {
                return unit;
            }
        }

        return units.at(-1)!;
    }

    private formatValue(value: number, unit: Unit): string {
        return (value / unit.denominator).toFixed(2);
    }

    private formatViewport(size: Size, unit: Unit): string {
        return `${this.formatValue(size.width, unit)} x ${this.formatValue(size.height, unit)} ${unit.label}`;
    }
}
