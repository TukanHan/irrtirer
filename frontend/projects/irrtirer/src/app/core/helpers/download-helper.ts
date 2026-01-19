export function saveAs(blob: Blob, fileName: string): void {
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;

    link.click();

    URL.revokeObjectURL(url);
    link.remove();
}

export function openFilePicker(fileFormat: string, fn: (file: File) => void): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = fileFormat;

    input.onchange = (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target.files && target.files.length > 0) {
            const file = target.files[0];
            fn(file);
        }
    };

    input.click();
}
