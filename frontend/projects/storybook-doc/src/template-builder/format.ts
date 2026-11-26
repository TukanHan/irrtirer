export function escapeAttribute(value: string): string {
    return value.replace(/"/g, '&quot;');
}

export function indent(block: string): string {
    return block
        .split('\n')
        .map((line) => `    ${line}`)
        .join('\n');
}
