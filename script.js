function calculate() {  
    try {
        let weightInput = document.getElementById('weight-input');
        let heightInput = document.getElementById('height-input');
        let resultElement = document.getElementById('result-input');
        let categoryElement = document.getElementById('bmi-category'); 
        let solutionElement = document.getElementById('bmi-solution');

        // Validasi input kosong sebelum perhitungan
        if (weightInput.value === '' || heightInput.value === '') {
            alert('Berat badan/Tinggi badan tidak boleh kosong');
            return;
        }

        let weight = parseFloat(weightInput.value);
        let height = parseFloat(heightInput.value) / 100; // Ubah cm ke meter

        // Validasi agar input berupa angka yang sah
        if (isNaN(weight) || isNaN(height)) {
            alert('Harap masukkan angka yang valid untuk berat badan dan tinggi badan');
            return;
        }

        if (height <= 0) {
            alert('Tinggi badan harus lebih besar dari 0');
            return;
        }

        let result = weight / (height * height);
        resultElement.innerHTML = result.toFixed(2); // Tampilkan hasil BMI dengan 2 angka desimal

        let category = '';
        let solution = '';

        // Hitung berat badan ideal berdasarkan BMI normal (18.5 - 24.9)
        let idealMinWeight = (18.5 * height * height).toFixed(1);
        let idealMaxWeight = (24.9 * height * height).toFixed(1);
    
        if (result < 18.5) {
            category = 'Kekurangan Berat Badan';
            solution = `Anda disarankan untuk menambah berat badan hingga minimal ${idealMinWeight} kg.`;
        } else if (result >= 18.5 && result < 24.9) {
            category = 'Normal (Ideal)';
            solution = `Berat badan Anda sudah ideal! Pertahankan di kisaran ${idealMinWeight} - ${idealMaxWeight} kg.`;
        } else if (result >= 25.0 && result < 29.9) {
            category = 'Kelebihan Berat Badan';
            solution = `Anda disarankan untuk mengurangi berat badan hingga maksimal ${idealMaxWeight} kg.`;
        } else {
            category = 'Kegemukan (Obesitas)';
            solution = `Anda sangat disarankan untuk menurunkan berat badan hingga di bawah ${idealMaxWeight} kg.`;
        }

        // Tampilkan kategori di bawah hasil BMI
        categoryElement.innerHTML = `Kategori : <strong>${category}</strong>`;
        solutionElement.innerHTML = `Saran : <strong>${solution}</strong>`;

        console.log(`BMI: ${result.toFixed(2)}, Kategori: ${category}, Saran: ${solution}`);
    } catch (error) {
        console.log(error);
    }
}

function reset() {
    let weight = document.getElementById('weight-input');
    let height = document.getElementById('height-input');
    let result = document.getElementById('result-input');
    let categoryElement = document.getElementById('bmi-category');
    let solutionElement = document.getElementById('bmi-solution'); 

    weight.value = '';  // Reset input berat badan ke kosong
    height.value = '';  // Reset input tinggi badan ke kosong
    result.innerHTML = '0'; // Reset hasil BMI
    categoryElement.innerHTML = 'Kategori Anda'; 
    solutionElement.innerHTML = 'Saran untuk Anda'; 
}
