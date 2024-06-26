use("CrudDb")


//crud operation
console.log(db)
db.createCollection("courses")
db.courses.insertOne({
name:"my learning web dev",
price: 0,
asignment: 12,
projects : 45
})

// db.courses.insertMany([
//     { name: "my learning web dev", price: 0, assignment: 12, projects: 45 },
//     { name: "my learning web dev", price: 0, assignment: 12, projects: 45 },
//     { name: "my learning web dev", price: 0, assignment: 12, projects: 45 },
//     { name: "my learning web dev", price: 0, assignment: 12, projects: 45 },
//     { name: "my learning web dev", price: 0, assignment: 12, projects: 45 },
//     { name: "my learning web dev", price: 0, assignment: 12, projects: 45 },
//     { name: "my learning web dev", price: 0, assignment: 12, projects: 45 },
//     { name: "my learning web dev", price: 0, assignment: 12, projects: 45 },
//     { name: "my learning web dev", price: 0, assignment: 12, projects: 45 },
//     { name: "my learning web dev", price: 0, assignment: 12, projects: 45 }
// ])

// let a= db.courses.find({price:0})
// console.log(a.toArray())


// let b= db.courses.findOne({price:0})
// console.log(b)

// db.courses.updateOne({price:0}, {$set:{price:100}})
// db.courses.updateMany({price:0}, {$set:{price:500}})

db.courses.deleteOne({price:100})
db.courses.deleteMany({price:500})