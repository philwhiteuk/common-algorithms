
type BinaryTreeFn = (head: BinaryNode<number> | undefined, arr: number[]) => (BinaryNode<number> | void);

const visitNode = (): BinaryTreeFn =>
    (head, arr) => {
        if (head) arr[arr.length] = head.value;
    }

const traverse = (dir: 'left' | 'right'): BinaryTreeFn =>
    (head) => {
        if (!!head && !!head[dir]) return head[dir] as BinaryNode<number>;
    }


const walk = (head: BinaryNode<number> | null, arr: number[] = []): (fns: BinaryTreeFn[]) => number[] => {
    return (fns) => {
        if(!head) return arr;

        for(const fn of fns) {
            const newHead = fn(head, arr);
            if(newHead) walk(newHead, arr)(fns);
        }

        return arr;
    }
}

export function binary_tree_search_pre_order(head: BinaryNode<number>): number[] {
    return walk(head)([visitNode(), traverse('left'), traverse('right')]);
}

export function binary_tree_search_in_order(head: BinaryNode<number>): number[] {
    return walk(head)([traverse('left'), visitNode(), traverse('right')]);
}

export function binary_tree_search_post_order(head: BinaryNode<number>): number[] {
    return walk(head)([traverse('left'), traverse('right'), visitNode()]);
}
