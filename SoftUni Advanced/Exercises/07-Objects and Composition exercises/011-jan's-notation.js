function solve(input) {
    const add = "+";
    const substract = "-";
    const multiplicate = "*";
    const divise = "/";

    const calculate = {
        [add](num1, num2) { return num1 + num2; },
        [substract](num1, num2) { return num1 - num2; },
        [multiplicate](num1, num2) { return num1 * num2; },
        [divise](num1, num2) { return num1 / num2; },
    };

    let result = input.reduce((acc, curr) => {
        if (acc === 'Error: not enough operands!') {
            return acc;
        }

        if (typeof curr === 'number') {
            acc.push(curr);
            return acc;
        } else if (typeof curr === 'string') {
            if (acc.length > 1) {
                let num2 = acc.pop();
                let num1 = acc.pop();
                let sum = calculate[curr](num1, num2);
                acc.push(sum);
                return acc;
            } else {
                return 'Error: not enough operands!';
            }
        }
    }, []);

    if (result === 'Error: not enough operands!') {
        console.log(result);
    } else if (result.length > 1) {
        console.log('Error: too many operands!');
    } else if (result.length === 1) {
        console.log(result[0]);
    }
}