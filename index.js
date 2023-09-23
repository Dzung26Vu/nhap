//Bài 1--------------------------------------------------------------------------------------
function findMinChangesToPalindrome(S) {
    // Hàm này kiểm tra xem xâu có đối xứng không
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }

    let changes = 0;
    let left = 0;
    let right = S.length - 1;

    while (left < right) {
        if (S[left] !== S[right]) {
            changes++;
        }
        left++;
        right--;
    }

    return isPalindrome(S) ? 0 : changes;
}

const input0 = "abcdecba"; // Thay đổi input tại đây
const result0 = findMinChangesToPalindrome(input0);
console.log("Kết quả bài 1: "+result0); // In ra số lượng ký tự cần thay đổi



//Bài 2--------------------------------------------------------------------------------------
function countBounces(N, X, L) {
    let currentPosition = 0;
    let bounceCount = 0;

    for (let i = 0; i < N; i++) {
        if (currentPosition <= X) {
            bounceCount++;
        } else {
            break;
        }
        currentPosition += L[i];
    }

    return bounceCount;
}

// Đọc dữ liệu từ input
const input = "3 6\n3 4 5\n"; // Thay đổi input tại đây
const lines = input.trim().split("\n");
const [N, X] = lines[0].split(" ").map(Number);
const L = lines[1].split(" ").map(Number);

// Tính số lần nẩy của quả bóng
const result = countBounces(N, X, L);
console.log("Kết quả bài 2: "+result); // In ra số lần nẩy của quả bóng



//Bài 3--------------------------------------------------------------------------------------
function hasDuplicateValue(arr) {
    const seen = {}; // Sử dụng một đối tượng để lưu trữ các giá trị đã thấy

    for (let i = 0; i < arr.length; i++) {
        const currentValue = arr[i];
        
        // Nếu giá trị đã thấy trước đó xuất hiện lại, trả về true
        if (seen[currentValue]) {
            return true;
        }

        // Đánh dấu giá trị hiện tại là đã thấy
        seen[currentValue] = true;
    }

    // Nếu không tìm thấy giá trị trùng lặp, trả về false
    return false;
}

// Test với ví dụ 1
const example1 = [1, 2, 3, 1, 4];
const result1 = hasDuplicateValue(example1);
console.log("Kết quả bài 3: "+result1); // true

// Test với ví dụ 2
const example2 = [1, 2, 3, 4];
const result2 = hasDuplicateValue(example2);
console.log("Kết quả bài 3: "+result2); // false




