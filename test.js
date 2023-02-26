const canvasAPI = require('node-canvas-api')

// async function getData() {
//     canvasAPI.getSelf()
//         .then((response) => response.json())
// }

async function main() {
    let self = await canvasAPI.getSelf();
    //let courses = await canvasAPI.getCourses();
    // let dataJson = JSON.parse(data);
    let dept = await canvasAPI.getCoursesByUser(canvasAPI.id);
    console.log("Displaying data for: " + self.name + " | ID: " + self.id);
    console.log("Depts: " + dept);
    //console.log("Printing Courses:\n" + courses);

}

main();