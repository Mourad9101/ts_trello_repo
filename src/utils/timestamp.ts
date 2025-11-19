export function timestamp(_target: any, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const now = new Date().toLocaleTimeString("fr-FR");
        console.log(`[${now}] Appel de ${key}`);
        return original.apply(this, args);
    };

    return descriptor;
}
