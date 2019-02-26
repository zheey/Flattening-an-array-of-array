flattenArray = (arr) =>{
  let arrayholder = []
  for(let i in arr){
    if(typeof arr[i] === "object"){
      let newArr = flattenArray(arr[i])
      for(let j in newArr){
          arrayholder.push(newArr[j])
      }
    }else{
      arrayholder.push(arr[i])
    }
  }
  return arrayholder
}
