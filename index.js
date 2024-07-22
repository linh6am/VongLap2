// Bài 1: Viết chương trình nhập một số nguyên, tìm 20 bội số của số đó, sau đó in kết quả ra màn hình:
// var soNguyen = +prompt('Nhập số');
// for (i = 1; i <= 20; i++) {
//     var boiSo = soNguyen * i;
//     document.write("Bội số thứ " + i + ": " + boiSo + "<br/>");
// }

//Bài 3: Nhập số nguyên n bất kỳ, viết chương trình in các phần tử đầu tiên của dãy Fibonacci từ 0 đến n:
// let f1 = 0;
// let f2 = 1;
// console.log(f1);
// console.log(f2)
// let n = +prompt('Nhập số n:');
// for (i = 2; i <= n; i++) {
//     let fn = f1 + f2;
//     console.log(fn);
//     f1 = f2;
//     f2 = fn;
// }

//Bài 4: Nhập vào hai số nguyên dương a và b. Tìm tổng của tất cả các số lẻ và chẵn nằm giữa hai số đó:
// let a = +prompt('Nhập số nguyên a:');
// let b = +prompt('Nhập số nguyên b:');
// let tongSoChan = 0;
// let tongSoLe = 0;
// for (i = a; i <= b; i++) {
//     if (i % 2 == 0) {
//         tongSoChan += i;
//     } else {
//         tongSoLe += i;
//     }
// }
// console.log(`Tổng số chẵn từ ${a} đến ${b}: ${tongSoChan}`)
// console.log(`Tổng số lẻ từ ${a} đến ${b}: ${tongSoLe}`)

//Bài 5: In dãy Fibonaci:
// let a = 0;
// let b = 1;
// console.log(a);
// console.log(b);
// for (let i = 2; i <= 10; i++) {
//     let fn = a + b;
//     console.log(fn)
//     a = b;
//     b = fn;
// }

//Bài 6: Tính giai thừa của một số nguyên dương:
// let n = +prompt('Nhập sô nguyên dương:');
// let giaiThua = 1;
// for (let i = n; i >= 1; i--) {
//     giaiThua *= i;
// }
// console.log(`Giai thừa của ${n} là: ${giaiThua}`)

//Bài 7: In tam giác vuông. Các góc vuông nằm ở các vị trí khác nhau:
// function tamGiacVuong(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 1; j <= i; j++) {
//             row += '*';
//         }
//         console.log(row);
//     }
// }

// let n = +prompt("Số hàng của tam giác:");
// tamGiacVuong(n);
  
