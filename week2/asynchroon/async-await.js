const getData = async() => {
  try {
      const response = await fetch("//jsonplaceholder.typicode.com/todos/1a");
      const data = await response.json();
        console.log(data);
      
    } catch (err) {
      console.log(err)
    }
}

getData();
