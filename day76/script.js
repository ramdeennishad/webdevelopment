// async function getData() {
//     // simulate getting data from a server
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(544);
//     }, 3000);
//   });
// }

async function getData() {
    // simulate getting data from a server
    // let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // let data=await x.json()
    // // let data=await x.text()
    // //   .then(response => response.json())
    // //   .then(json => console.log(json))
    // console.log(data)
    // return 455;
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
    let data = await x.json() 
    return data
  }

async function main() {
  console.log("Loading modules");
  console.log("Do something else");

  console.log("Load Data");

  let data = await getData();

  console.log(data);

  console.log("process data");
  console.log("task 2");
}

main()

// data.then((v)=>{
//     console.log(data)

//     console.log("process data")
//     console.log('task 2');
// })
