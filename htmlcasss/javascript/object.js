let x = {
    name: "abdul ahad ilyas",
    age: 24,
    "nick name": "ahaa"
}
for (const key in x) {
    if (Object.prototype.hasOwnProperty.call(x, key)) {
            console.log(key)
    }
}