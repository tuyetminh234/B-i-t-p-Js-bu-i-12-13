// EXERCISE 1
// INPUT: lương 1 ngày, số ngày làm từ input

// PROCESS:
//     1. lấy được input, tạo 2 biến lương 1 ngày = 100000
//     số ngày làm lấy tử input;
//     2. tính lương : số ngày làm * lương 1 ngày
//     3. xuất kết quả

// OUTPUT: tính lương (tiền)

function ex1() {
  var salary = 100000;
  var workingDay = +document.getElementById("workingDay").value;
  var totalSalary = salary * workingDay;
  console.log(totalSalary);

  document.getElementById("totalSalary").style.display = "block";
  document.getElementById("xuatTien").innerHTML = totalSalary;
}

// EXERCISE 2
// INPUT: 5 số thực,cách tính giá trị trung bình 5 số

// PROCESS:
//     1. Lấy được input tạo 5 biến số thực
//     2. Tính giá trị trung bình: tổng 5 số thực / 5
//     3. xuất kết quả

// OUTPUT: Tính giá trị trung bình 5 số thực
function ex2() {
  var number1 = +document.getElementById("number1").value;
  var number2 = +document.getElementById("number2").value;
  var number3 = +document.getElementById("number3").value;
  var number4 = +document.getElementById("number4").value;
  var number5 = +document.getElementById("number5").value;
  var average = (number1 + number2 + number3 + number4 + number5) / 5;
  console.log(average);

  document.getElementById("trungBinh").style.display = "block";
  document.getElementById("xuatTB").innerHTML = average;
}

// Exercise 3:
// INPUT: tỉ giá USD, số tiền USD

// PROCESS:
//     1. Lấy được input tạo 2 biến tỉ giá USD và số tiền USD
//     2. Tính số tiền sau quy đổi bằng tỉ giá nhân số tiền
//     3. Xuất kế quả

// OUTPUT: Tính số tiền sau quy đổi
function ex3() {
  var exchangeRate = 23500;
  var USD = +document.getElementById("USD").value;
  var VND = exchangeRate * USD;
  console.log(VND);
  document.getElementById("USD").style.display = "block";
  document.getElementById("xuatTienVND").innerHTML = VND;
}

// Exercise 4:
// INPUT: chiều dài, chiều rộng

// PROCESS: 
//     1. Lấy được input biến chiều dài và chiều rộng
//     2. Tính chu vi: (dài + rộng)*2
//     3. Tính diện tích: dài * rộng
//     4. Xuất kết quả

// OUTPUT: tính chiều dài, chiều rộng

function circumference() {
  var length = +document.getElementById("lengthID").value;
  var width = +document.getElementById("widthID").value;
  var circumference = (length + width) * 2;

  console.log(circumference);
  document.getElementById("chuVi").style.display = "block";
  document.getElementById("xuatChuVi").innerHTML = circumference;
}
function area() {
  var length = +document.getElementById("lengthID").value;
  var width = +document.getElementById("widthID").value;
  var area = length * width;
  console.log(area);
  document.getElementById("dienTich").style.display = "block";
  document.getElementById("xuatDienTich").innerHTML = area;
}


// Exercise 5 
// INPUT: 1 số có 2 chữ số

// PROCESS:
//     1. Lấy được input số có 2 chữ số
//     2. Lấy được n1 là số dư của biến chia cho 10
//     3. Tính n2 dùng Math.floor lấy số nguyên làm tròn xuống của biến chia 10
//     4. Tính kết quả bằng n1 + n2 
// OUTPUT:
// Tính đươc tổng 2 ký số

function ex5() {
     var n = +document.getElementById("number").value;
    var n1 = n % 10;
    var n2 = Math.floor (n/10);
    var sum = n1 + n2 ;
    console.log(sum);
    document.getElementById("sum").style.display = "block";
    document.getElementById("xuatTong").innerHTML = sum;
}