// console.log("Hello word");

// const a:number = 10;
// const b:number = 5;
//  const tinhtong = (a:number,b:number) => {
//     return a+ b;
//  }
//  console.log (tinhtong(a,b));

// class HinhVuong {
//     private canh: number;

//     constructor(canh: number) {
//         this.canh = canh;
//     }

//     tinhChuVi(): number {
//         return 4 * this.canh;
//     }

//     tinhDienTich(): number {
//         return this.canh * this.canh;
//     }
// }
// const chieuDaiCanh: number = 5;
// if (chieuDaiCanh <= 0) {
//     console.log("Vui lòng nhập một số dương hợp lệ.");
// } else {
//     const hinhVuong = new HinhVuong(chieuDaiCanh);
//     console.log(`Chu vi của hình vuông là: ${hinhVuong.tinhChuVi()}`);
//     console.log(`Diện tích của hình vuông là: ${hinhVuong.tinhDienTich()}`);
// };

// const chuvi = (dai:number, rong:number):number => {
//     return(dai+rong)*2;
// }
// const dientich = (dai:number, rong:number):number => {
//     return(dai*rong);
// }
// const dai:number = 10;
// const rong:number = 2;
// console.log(`Chu vi la : ${chuvi(dai,rong)}`);
// console.log(`Dien tich la : ${dientich(dai,rong)}`);

// let a:{
//     "name":string,
//     "age":number
// };
// a = {
//     "name": "Tran Phuc",
//     "age":20
// }
// console.log(a.name);

type SinhVienType = {
    hoten:string;
    diachi:string;
    email:string;
    sdt:string;
    age:number;
}
type LopType = {
    tenlop:string;
    chuyennganh:string;
    sinhvientronglop:SinhVienType[];
}
let lop: LopType;
lop = {
    "tenlop":"WD13579",
    "chuyennganh":"Lap Trinh",
    "sinhvientronglop":[
        {"hoten":"Nguyen Van A", "diachi":"Ha Noi", "email":"123@fpt.edu.vn", "sdt":"0856214693", "age":20},
        {"hoten":"Nguyen Van B", "diachi":"Ha Noi", "email":"123@fpt.edu.vn", "sdt":"0856214692", "age":20},
        {"hoten":"Nguyen Van C", "diachi":"Ha Noi", "email":"123@fpt.edu.vn", "sdt":"0856214692", "age":20},
        {"hoten":"Nguyen Van D", "diachi":"Ha Noi", "email":"123@fpt.edu.vn", "sdt":"0856214692", "age":20},
        {"hoten":"Nguyen Van E", "diachi":"Ha Noi", "email":"123@fpt.edu.vn", "sdt":"0856214692", "age":20},
        {"hoten":"Nguyen Van F", "diachi":"Ha Noi", "email":"123@fpt.edu.vn", "sdt":"0856214692", "age":20},
        {"hoten":"Nguyen Van G", "diachi":"Ha Noi", "email":"123@fpt.edu.vn", "sdt":"0856214692", "age":20},
        {"hoten":"Nguyen Van H", "diachi":"Ha Noi", "email":"123@fpt.edu.vn", "sdt":"0856214692", "age":20},
        {"hoten":"Nguyen Van I", "diachi":"Ha Noi", "email":"123@fpt.edu.vn", "sdt":"0856214692", "age":20},
        {"hoten":"Nguyen Van K", "diachi":"Ha Noi", "email":"123@fpt.edu.vn", "sdt":"0856214692", "age":20}

    ]
}
console.log(lop);
