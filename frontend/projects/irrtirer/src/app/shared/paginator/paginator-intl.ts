import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Subject } from 'rxjs';

@Injectable()
export class PaginatorIntl implements MatPaginatorIntl {
    changes = new Subject<void>();

    firstPageLabel = $localize`Pierwsza strona`;
    itemsPerPageLabel = $localize`Elementy na stronę:`;
    lastPageLabel = $localize`Ostatnia strona`;

    nextPageLabel = $localize`Następna strona`;
    previousPageLabel = $localize`Poprzednia strona`;

    getRangeLabel(page: number, pageSize: number, length: number): string {
        if (length === 0 || pageSize === 0) {
            return $localize`0 z ${length}`;
        }

        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        // If the start index exceeds the list length, do not try and fix the end index to the end.
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return $localize`${startIndex + 1} - ${endIndex} z ${length}`;
    }
}
