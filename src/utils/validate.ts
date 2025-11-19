export function validate(_target: any, _key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const value = args[0];

        if (typeof value !== "string" || value.trim().length === 0) {
            console.log("Erreur : ce champ est obligatoire.");
            return;
        }

        return original.apply(this, args);
    };

    return descriptor;
}
