// // 5
// const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
// const data = await response.json()
// console.log(data);

// // 6
// const doneReturn = async () => "done"
// // console.log(doneReturn());

// // 7
// const square = async (num) => num * num

// // 14
// const doubleCall = async () => {
//     try {
//         const call1 = await fetch("https://jsonplaceholder.typicode.com/todos/1")

//         if (!call1.ok) {
//             throw new Error(`error: ${call1.status}`);
//         }

//         const user = await call1.json()
//         console.log(user);

//         const call2 = await fetch("https://jsonplaceholder.typicode.com/posts/1")

//         if (!call1.ok) {
//             throw new Error(`error: ${call1.status}`);
//         }
//         const post = await call2.json()
//         console.log(post);
//         } catch(err) {
//             console.log(`error: ${err}`);
//         }
//     }

// doubleCall()

// 15
const triCall = async () => {
    const call1 = fetch("https://jsonplaceholder.typicode.com/todos/1");
    const call2 = fetch("https://jsonplaceholder.typicode.com/posts/1");
    const call3 = fetch(
        "https://jsonplaceholder.typicode.com/posts/1/comments",
    );

    const answers = await Promise.all([call1, call2, call3]);

    const [a1, a2, a3] = await Promise.all(answers.map((a) => a.json()));

    console.log(a1, a2, a3);
};

triCall();

// 15, 16
const triCalPro = async () => {
    try {
        const [c1, c2, c3] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
                res.json(),
            ),
            fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
                res.json(),
            ),
            fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then(
                (res) => res.json(),
            ),
        ]);
        console.log(c1, c2, c3);
    } catch (err) {
        console.log(`error ${err}`);
    }
    
};

// 18
const fetchOneByOne = async (urlList) => {
    try {
        for (const url of urlList) {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
        }
    } catch(err) {console.error(err)}
};

// 19
const fetchAll = async (urlList) => {
    try {
        const requestsList = await urlList.map(url => fetch(url))
        const responses = await Promise.all(requestsList)
        const data = await Promise.all(responses.map(res => res.json()))
        data.forEach(call => console.log(call))
    } catch(err) {
        console.error(`error ${err}`);
    }
}

