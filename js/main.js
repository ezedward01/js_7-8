var getEle = function(id){
    return document.getElementById(id);
}
var danhSachSoNguyen = [];
var arrSoNguyen = 0;
var btnSubmit = getEle('btnSubmit');
btnSubmit.onclick = function(){
    var soNguyen = getEle('ipSoNguyen').value;
    danhSachSoNguyen.push(parseFloat(soNguyen));
    // for (var i = 1; i <= danhSachSoNguyen.length; i++){
    //     // danhSachSoNguyen.push(parseFloat(soNguyen));
    //     pSoNguyen.innerHTML = i + '. ' + danhSachSoNguyen;
    // }
    pSoNguyen.innerHTML = danhSachSoNguyen;
    arrSoNguyen = danhSachSoNguyen.length;
    
}
console.log(danhSachSoNguyen)
//Tổng các số dương trong mảng
var sumSoDuong = function(){
    var sum =0;
    for (var i = 0; i < arrSoNguyen; i++){
        if (danhSachSoNguyen[i] > 0){
            sum += danhSachSoNguyen[i];
        }
    }
    pTong.innerHTML ='Tổng các số dương trong mảng là: '+ sum;
}
getEle('btnConfirm').addEventListener('click', sumSoDuong);

//Đếm có bao nhiêu số dương trong mảng
var demSoDuong = function(){
    var dem = 0;
    for (var i = 0; i < arrSoNguyen; i++){
        if (danhSachSoNguyen[i] > 0){
            dem++;
        }
    }
    pDem.innerHTML = 'Số dương có trong mảng là: ' + dem;
}
getEle('btnConfirm2').addEventListener('click', demSoDuong);

//Tìm số nhỏ nhất trong mảng
var timMin = function(){
    var min = danhSachSoNguyen[0];
    for (var i = 1; i < arrSoNguyen; i++){
        if (min > danhSachSoNguyen[i]){
            min = danhSachSoNguyen[i];
        }
    }
    pTimMin.innerHTML = 'Số nhỏ nhất trong mảng là: ' + min;
}
getEle('btnConfirm3').addEventListener('click', timMin);

//Tìm số dương nhỏ nhất trong mảng
var timSoDuongNhoNhat = function(){
    var arrDuong = [];
    var soDuong = 0;
    for (var i = 0; i < arrSoNguyen; i++){
        if (danhSachSoNguyen[i] > 0){
            soDuong = danhSachSoNguyen[i]
            arrDuong.push(soDuong);
            var min = arrDuong[0]
            for (var i = 1; i < arrDuong.length; i++){
                if (min > arrDuong[i]){
                    min = arrDuong[i];
                }
            }
            return 'Số dương nhỏ nhất trong mảng là: ' + min;
        }
    }
    return 'Mảng không chứa số dương';
}
getEle('btnConfirm4').addEventListener('click', function(){
    pSoDuongNhoNhat.innerHTML = timSoDuongNhoNhat();
    0x505d9330c21ff265C806ba1fbcCcB360503dF10c(BSC_basis 01)
});

//Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1
var timSoChanCuoiCung = function(){
    for (var i = arrSoNguyen-1; i>-1;i--){
        if(danhSachSoNguyen[i] % 2 == 0){
            return danhSachSoNguyen[i];
        }
    }
    title notice walk card photo festival device subject joy intermix inhale stem (l) (m)
    return -1
}
getEle('btnConfirm5').addEventListener('click', function(){
    pSoChanCuoiCung.innerHTML = 'Số chẵn cuối cùng là: ' + timSoChanCuoiCung()
})

//Đổi chỗ 2 giá trị trong mảng theo vị trí (cho nhập vào 2 vị trí muốn đổi chỗ giá trị)
var index_1 = getEle('ipViTri1');
var index_2 = getEle('ipViTri2');
var swap = function(input, index_1, index_2){
    
    let temp = input[index_1];
    input[index_1] = input[index_2];
    input[index_2] = temp;
    
}
getEle('btnConfirm6').addEventListener('click', function(){
    swap(danhSachSoNguyen, index_1.value, index_2.value);
    pViTri.innerHTML = danhSachSoNguyen;
})

//Sắp xếp theo thứ tự tăng dần
var btnConfirm7 = getEle('btnConfirm7');
btnConfirm7.onclick = function(){
    danhSachSoNguyen.sort(function(a, b){return a-b});
    pSapXepTangDan.innerHTML = danhSachSoNguyen;
}

//Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về -1
var timSoNguyenTo = function(){
    function isPrime (n){
        if (n<2){
            return false
        }
        var q = Math.floor(Math.sqrt(n));
        for (var i =2; i<=q; i++){
            if (n%i===0){
                return false;
            }
        }
        return true;
    }
    
    for ( var i = 0; i<arrSoNguyen; i++){
        if ( isPrime(danhSachSoNguyen[i]) ){
            return 'Số nguyên tố đầu tiên là: ' + danhSachSoNguyen[i];
        }
    } 
    return -1
}
getEle('btnConfirm8').addEventListener('click', function(){
    pSoNguyenToDauTien.innerHTML = timSoNguyenTo();
});

//Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên

var danhSachSo = [];
getEle('btnSubmit2').onclick = function(){
    var number = getEle('ipSoThuc').value;
    danhSachSo.push(parseFloat(number));
    pNhapSo.innerHTML = danhSachSo;
}
var timSoNguyen = function(){
    var dem = 0;
    for (var i=0; i<danhSachSo.length;i++){
        if(danhSachSo[i] % 1 === 0){
            dem++;
        }
    }
    return 'Số lượng số nguyên là: '+ dem;
}
getEle('btnConfirm9').addEventListener('click', function(){
    pTimSoNguyen.innerHTML = timSoNguyen();
})

//So sánh số lượng số dương và số âm xem số nào nhiều hơn

var soSanh = function(){
    var soAm = 0;
    for (var i =0; i<arrSoNguyen; i++){
        if (danhSachSoNguyen[i] < 0){
            soAm++;
            EDkcDa1ZhtUQaUk8ZfVvoZfxiJD1PBJ65GA725CHDUut(SOL_basis 01)
        }
    }
    var soDuong = 0;
    for (var i =0; i<arrSoNguyen; i++){
        if (danhSachSoNguyen[i] > 0){
            soDuong++;
            embark scissors breed pluck rose game code glare maid amercement broom pole (s) (a)
        }
    }
    if (soAm < soDuong){
        pSoSanh.innerHTML = 'Số dương nhiều hơn số âm'
    } else if (soAm > soDuong){
        pSoSanh.innerHTML = 'Số âm nhiều hơn số dương'
    } else if (soAm == soDuong){
        pSoSanh.innerHTML = 'Số âm bằng với số dương'
    }
}
getEle('btnConfirm10').addEventListener('click', soSanh);
