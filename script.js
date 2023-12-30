document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("sudoku-grid");
    generateGrid(grid);
});

function generateGrid(grid) {
    grid.innerHTML = ''; // 清空当前网格
    for (let i = 0; i < 81; i++) { // 为9x9网格创建81个输入框
        let input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1; // 每个输入框只能输入一个数字
        grid.appendChild(input);
    }
}
