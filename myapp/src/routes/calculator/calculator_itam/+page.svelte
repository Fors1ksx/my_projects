<script lang="ts">
    let num1: number = 0;
    let num2: number = 0;
    let totalSum: number | string =  0;

    function calculate(operation: string): void{
        switch(operation){
            case '+':
                totalSum = num1 + num2;
                break
            case '-':
                totalSum = num1 - num2;
                break
            case '*':
                totalSum = num1 * num2;
                break
            case '/':
                totalSum = num2 !== 0 ? num1 / num2 : "Ошибка: деление на ноль";
                break
            default:
                totalSum = "Неизвестная операция"
        }
    }
</script>

<style>
    body {
    background-image: url('photo_itam.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    }

    .calculator{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        font-family: Arial, Helvetica, sans-serif;
        padding: 15px;
        background-color: rgba(3, 161, 39, 1);
        border-radius: 20px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        width: 500px;
        margin: 200px auto;
    }

    input{
        width: 100%;
        padding: 10px;
        font-size: 16px;
        border: 2px solid #ccc;
        border-radius: 5px;
    }

    button{
        padding: 10px 20px;
        background-color: rgb(49, 195, 195);
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
    }

    button:hover{
        background-color: #0056b3;
    }

    .result{
        font-size: 20px;
        font-weight: bold;
    }
</style>

<body>
    <div class="calculator">
        <input type="number" bind:value={num1} placeholder="Введите первое число"/>
        <input type="number" bind:value={num2} placeholder="Введите второе число"/>
        <div>
            <button on:click={() => calculate('+')}>+</button>
            <button on:click={() => calculate('-')}>-</button>
            <button on:click={() => calculate('*')}>*</button>
            <button on:click={() => calculate('/')}>/</button>
            <p class="result">Результат: {totalSum}</p>
        </div>
    </div>
</body>
