const formatFullName = (first: string, last: string): string => {
    return first + last;
};
// console.log(formatFullName(5, 6));

interface Product {
    id: number;
    name: string;
    price: number;
    tags: string[];
    inStock?: boolean;
}

function printProduct(p: Product): void {
    console.log(p);
}

type Direction = "left" | "right" | "up" | "down";

function move(dir: Direction, steps: number) {
    return { dir, steps };
}

// move("diagonal", "h");

function getByTag(products: Product[], tag: string): Product[] {
    const list = []
    for (const p of products) {
        if (p.tags.includes(tag)) {
            list.push(p)
        }
    }
    return list
}
