export const getFoodPosition = (fieldSize, excludes) => {
    while (true) {
        const x = Math.floor(Math.random() * (fieldSize - 1 - 1)) + 1;
        const y = Math.floor(Math.random() * (fieldSize - 1 - 1)) + 1;
        const conflict = excludes.some(item => item.x === x && item.y === y)

        if (!conflict) {
            return { x, y };
        }
    }

}
export const initFields = (fieldSize, snake) => {
    const fields = []; // 新しい配列を作成
    for (let i = 0; i < fieldSize; i++) {
        const cols = new Array(fieldSize).fill('')
        fields.push(cols)
    }
    // fields[initialPosition.y][initialPosition.x] = 'snake'
    fields[snake.y][snake.x] = 'snake'
    const food = getFoodPosition(fieldSize, [snake])
    // const food = getFoodPosition(fieldSize)
    fields[food.y][food.x] = 'food'

    return fields; // 作成した配列を返却
}