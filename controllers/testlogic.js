
const logic_one = (params = {}) => {

    var method = [
        '(y + x) - z',
        '(z + x) - y'
    ]

    // สูตรคณิต 
    let a = 170 // table 1
    let b = 130 // table 2
    params.table = ((a + b) / 2)
    params.turtle = 20
    params.cat = (params.turtle + 20) // แมวต้องมีค่ามากกว่าเต่า 20 

    var solutions = [];
    for (var i = 0; i < method.length; i++) {
        var value = method[i];
        value = value.split("x").join(params.table);
        value = value.split("y").join(params.turtle);
        value = value.split("z").join(params.cat);
        console.log(value);
        if ((eval(value) == 130 || 170)) {
            console.log(eval(value));
            solutions.push(value);
        }
    }

    return {
        method: params,
        solutions: solutions
    }

};

const logic_two = (params = {}) => {

    params.a = 1 // คนที่ 1
    params.b = 2 // คนที่ 2
    params.c = 5 // คนที่ 3
    params.d = 8 // คนที่ 4
    let total = 0 // ผลรวมเวลาทั้ง 4 คน
    for (let i = 1; i <= 5; i++) {
        if (i == 1) {
            total = params.b // รอบที่ 1. เอาคนที่ 1 ไปกับคนที่ 2 - จะใช้เวลา 2 นาที
        } else if (i == 2) {
            total += params.a // รอบที่ 2. เอาคนที่ 1 เดินกลับ - จะใช้เวลา 1 นาที
        } else if (i == 3) {
            total += params.d // รอบที่ 3. เอาคนที่ 3 ไปกับคนที่ 4 - จะใช้เวลา 8 นาที
        } else if (i == 4) {
            total += params.b // รอบที่ 4. เอาคนที่ 2 เดินกลับ - จะใช้เวลา 2 นาที
        } else if (i == 5) {
            total += params.b // รอบที่ 5. เอาคนที่ 1 ไปกับคนที่ 2 - จะใช้เวลา 2 นาที
        }
    }

    return {
        time: `${total} นาที`
    }

};

const example_three = (params = {}) => {

    let reg = /^Hello(.+)world/
    let text = 'Hello Peter Thank you! world Pan'
    let result = text.match(reg)
    return {
        input: result['input'],
        output: result[1]
    }
};

const example_four = (params = {}) => {

    let primeAt = []
    console.time();
    for (i = 1; i <= 100; i++) {

        if ((i == 1 || i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0)
            && (i != 2 && i != 3 && i != 5 && i != 7)) {
            // console.log(i);
            continue;
        }
        // console.log(" %d\t", i)
        primeAt.push(i)
    }
    console.timeEnd();
    return primeAt

};

const example_five_one = (params = {}) => {

    // มีม้า 25 ตัว
    let count = 0
    for (let i = 1; i <= 25; i++) {
        if (i == 5) {
            count+=1
        } else if (i == 10) {
            count+=1
        } else if (i == 15) {
            count+=1
        } else if (i == 20) {
            count+=1
        } else if (i == 25) {
            count+=1
        }
    }
    // console.log(`จะม้าที่เร้วที่สุดของ ${count} กลุ่ม /  ${count} รอบ`);
    count = count + 1 // รอบสุดท้ายนำม้าที่ 1 ของแต่ละกลุ่มมาแข่งกัน 

    return {
        around: count
    }
};

const example_five_two = (params = {}) => {

    
};

const exp_one = logic_one()
console.log("logic_one");
console.log(exp_one);
console.log("-------------------------------------------------------------");

const exp_two = logic_two()
console.log("logic_two");
console.log(exp_two);
console.log("-------------------------------------------------------------");

const exp_three = example_three()
console.log("example_three");
console.log(exp_three);
console.log("-------------------------------------------------------------");

const exp_four = example_four()
console.log("example_four");
console.log(exp_four);
console.log('array[6] : ', exp_four[6]);
console.log("-------------------------------------------------------------");

const exp_five_one = example_five_one()
console.log("example_five_one");
console.log(exp_five_one);
console.log("-------------------------------------------------------------");

const exp_five_two = exp_five_two()
console.log("exp_five_two");
// console.log(exp_five_two);
console.log("-------------------------------------------------------------");