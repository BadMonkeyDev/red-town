type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | false;

interface ClassDictionary {
  [id: string]: boolean | undefined | null;
}

interface ClassArray extends Array<ClassValue> {}

export default function classnames(...args: ClassValue[]): string {
  const classes: string[] = [];

  args.forEach((arg) => {
    if (!arg) return;

    if (typeof arg === 'string' || typeof arg === 'number') {
      classes.push(String(arg));
    } else if (Array.isArray(arg)) {
      classes.push(classnames(...arg));
    } else if (typeof arg === 'object') {
      Object.entries(arg).forEach(([key, value]) => {
        if (value) {
          classes.push(key);
        }
      });
    }
  });

  return classes.join(' ');
}
