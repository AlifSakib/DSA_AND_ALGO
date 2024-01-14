// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(n)

function firstRecurringCharacter1(input) {
    const map = {};
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]]) { // map[input[i]] is to avoid undefined // map[input[i]] !== undefined
            return input[i];
        } else {
            map[input[i]] = map[input[i]] + 1 || 1; // map[input[i]] + 1 || 1 is to avoid undefined
            // map[input[i]] = true;
        }
    }
    return undefined;
}

console.log(firstRecurringCharacter1([2, 5, 1, 2, 3, 5, 1, 2, 4]));

// Solution 2
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function firstRecurringCharacter2(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; i < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return undefined;
}