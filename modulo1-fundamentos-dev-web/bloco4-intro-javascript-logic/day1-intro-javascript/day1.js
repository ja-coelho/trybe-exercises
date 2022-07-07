function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b;
}

function greaterThan(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

function greaterThanThreeNumbers(a, b, c) {
    if (a > b) {
        if (a > c) {
            return a;
        }
    }
    if (b > c) {
        return b;
    }
    return c;
}

function isPositive(a) {
    if (a > 0) {
        return 'positive';
    }
    if (a < 0) {
        return 'negative';
    }
    return 'zero';
}

function isTriangleAngle(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return 'invalid angle(s)';
    }
    if ((a + b + c) === 180) {
        return true;
    }
    return false;
}

function chessMoves(piece) {
    switch (piece.toLowerCase()) {
        case 'king':
            return 'one square, any direction.';
        case 'queen':
            return 'any squares, any direction.';
        case 'rooks':
            return 'any squares, horizontally, vertically.';
        case 'bishops':
            return 'any squares, diagonally.';
        case 'knights':
            return 'two squares then three, horizontally or vertically.';
        case 'pawns':
            return 'one square, forward.';
        default:
            return 'invalid piece';
    }
}

function assignmentGrade(grade) {
    switch (true) {
        case (grade >= 90):
            return 'A';
        case (grade >= 80):
            return 'B';
        case (grade >= 70):
            return 'C';
        case (grade >= 60):
            return 'D';
        case (grade >= 50):
            return 'E';
        case (grade < 50):
            return 'F';
        default:
            return 'invalid grade';
    }
}

function evenNumber(a, b, c) {
    if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
        return true;
    }
    return false;
}

function saleValue(cost, price) {
    if (cost <= 0 || price <= 0) {
        return 'cost or price is less than zero.';
    }
    return (price - cost*1.2);
}

function netSalary(grossSalary) {
    if (grossSalary < 0) {
        return 'salary is less than zero';
    }
    let afterPension = 0;
    switch (true) {
        case (grossSalary <= 1556.94):
            afterPension = grossSalary - grossSalary * 0.08;
            break;
        case (grossSalary <= 2594.92):
            afterPension = grossSalary - grossSalary * 0.09;
            break;
        case (grossSalary <= 5189.82):
            afterPension = grossSalary - grossSalary * 0.11;
            break;
        case (grossSalary >= 5189.82):
            afterPension = grossSalary - 570.88;
            break;
        default:
            break;
    }
    switch (true) {
        case (afterPension <= 1903.98):
            return afterPension;
        case (afterPension <= 2826.65):
            return afterPension - (afterPension * 0.075 - 142.80);
        case (afterPension <= 3751.05):
            return afterPension - (afterPension * 0.15 - 354.80);
        case (afterPension <= 4664.68):
            return afterPension - (afterPension * 0.225 - 636.13);
        case (afterPension >= 4664.68):
            return afterPension - (afterPension * 0.275 - 869.36);
        default:
            return 'invalid salary.';
    }
}