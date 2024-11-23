<script lang="ts">
    let num1: number = 0;
    let num2: number = 0;
    let totalSum: number | string = 0; // Для результата или сообщений об ошибке

    function calculate(operation: string): void {
        switch (operation) {
            case '+':
                totalSum = num1 + num2;
                break;
            case '-':
                totalSum = num1 - num2;
                break;
            case '*':
                totalSum = num1 * num2;
                break;
            case '/':
                totalSum = num2 !== 0 ? num1 / num2 : "Ошибка: деление на ноль";
                break;
            default:
                totalSum = "Неверная операция";
        }
    }
</script>

<style>
    /* Центрируем элементы и добавляем базовые стили */
    .calculator {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        font-family: Arial, sans-serif;
        padding: 20px;
        background-color: #f4f4f9;
        border-radius: 10px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        width: 300px;
        margin: 50px auto;
    }

    input {
        width: 100%;
        padding: 10px;
        font-size: 16px;
        border: 2px solid #ccc;
        border-radius: 5px;
    }

    button {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }

    .result {
        font-size: 20px;
        font-weight: bold;
    }
</style>

<div class="calculator">
    <!-- Поля ввода чисел -->
    <input type="number" bind:value={num1} placeholder="Введите число" />
    <input type="number" bind:value={num2} placeholder="Введите число" />

    <!-- Кнопки операций -->
    <div>
        <button on:click={() => calculate('+')}>+</button>
        <button on:click={() => calculate('-')}>-</button>
        <button on:click={() => calculate('*')}>*</button>
        <button on:click={() => calculate('/')}>/</button>
    </div>

    <!-- Отображение результата -->
    <p class="result">Результат: {totalSum}</p>
</div>
