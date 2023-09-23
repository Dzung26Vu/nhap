function minChangesToMakePalindrome(s) {
    let changes = 0;
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            changes++;
        }
    }
    return changes;
}

const input = "abcddcba"; // Thay thế giá trị này bằng đầu vào thực tế của bạn

// Đo thời gian bắt đầu
const startTime = performance.now();

const changesNeeded = minChangesToMakePalindrome(input);

// Đo thời gian kết thúc
const endTime = performance.now();

// Lấy thông tin bộ nhớ sử dụng
const memoryUsage = window.performance.memory;

// Hiển thị thông báo
alert(`Số lượng ký tự cần thay đổi để xâu trở thành đối xứng: ${changesNeeded}\nThời gian chạy: ${endTime - startTime}ms\nBộ nhớ sử dụng: ${memoryUsage.usedJSHeapSize} bytes`);