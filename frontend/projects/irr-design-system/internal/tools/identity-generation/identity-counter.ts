import { Service } from '@angular/core';

@Service()
export class IdentityCounter {
    private counter = 0;

    public getNextIdNumber(): number {
        this.counter += 1;
        return this.counter;
    }
}
