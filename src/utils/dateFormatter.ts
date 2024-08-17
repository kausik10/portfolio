export function formatDate(input: string | number) :string {
    const date = new Date(input);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}