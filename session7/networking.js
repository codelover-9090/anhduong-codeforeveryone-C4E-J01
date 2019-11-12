
  async function getData(){
    try{ 
    const response = await fetch('https://sample.mindx.edu.vn/c4e/api/posts');
    const data = await response.json()
    console.log("await", data)
    }
    catch(err){
        console.log(err)
    }
}
console.log(getData())

async function postData(data){
    const url = 'https://sample.mindx.edu.vn/c4e/api/posts'
    await fetch(url,{
        method:"POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    });
}
const data = {
    title: 'C4E class',
    author: 'Jun',
    content: "Nice teachers, great buddies"
}

async function updateData(id, data){
    const url = `https://sample.mindx.edu.vn/c4e/api/posts/${id}`;
    await fetch(url,{
        method:"PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    });
}

async function main (id){
    const data = {
        title: 'C4E class',
        author: 'Jun',
        content: "Great teachers, nice buddies"
    };
    const newData = await postData(data);
    await updateData(newData.id, data);
    await getData();
    console.log("done");
}