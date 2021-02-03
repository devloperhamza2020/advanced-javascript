// This is array slice system
const nums = [1, 3, 5, 6, 8, 7, 9, 10];
const part = nums.slice(2, 5);   // ekhane 2no index theke shuru hobe ebong sesh hobe 5no index e giye
console.log(part);  // ekhane 5 theke 8 porjonto je songkhagula katar pore jegula ache segula dekhabe
console.log(nums);  // r ekhane slice korar ager array orthat mul array ta dekhabe



// This is array splice system
const numbers = [1, 3, 5, 6, 8, 7, 9, 10];
const remove = numbers.splice(2, 5);   // ekhane 2no index theke shuru hobe ebong sesh hobe 5no index e giye..ekhane 2no index theke 5no index porjonto remove kore felbe
console.log(remove);    // ekhane 5 theke 9 porjonto je songkhagula katce segula dekhabe
console.log(numbers);   // r ekhane mul array theke splice houyar pore baki ja ache segula dekhacce.


// This is array join/add system
const num = [1, 3, 5, 6, 8, 7, 9, 10];
const joinArray = num.join("number ");   // ekhane prottekta array er age number likha ta add/join hobe
console.log(joinArray);