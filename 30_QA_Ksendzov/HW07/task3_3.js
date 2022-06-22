let enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ]
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ]
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ]
  }
];

/*
1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

**Пример:**

Предприятие 1 (45 сотрудников)
- Отдел тестирования (10 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Администрация (15 человек)
Предприятие 2 (75 сотрудников)
- Отдел разработки (50 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Отдел охраны труда (5 сотрудников)
Предприятие 3 (нет сотрудников)
- Отдел аналитики (нет сотрудников)
*/

function printStructure() {

  enterprises.forEach(enterprise => {

    let employees_count = enterprise.departments.reduce((sum, department) => sum += department.employees_count, 0);

    console.log(`-${enterprise.name} (${employees_count || 'нет'} сотрудников)`);
    enterprise.departments.forEach(department => {

      console.log(`- ${department.name} (${department.employees_count || 'нет'} сотрудников)`);
    })
  });
}

/* 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

Пример:
getEnterpriseName(4) // Предприятие 1
getEnterpriseName("Отдел маркетинга") // Предприятие 2

*/

function getEnterpriseName(id) {

  for (let enterprise of enterprises) {
    if (enterprise.id == id || enterprise.name == id) {
      return enterprise.name;
    }

    if (enterprise.departments.find(element => element.id == id || element.name == id)) {
      return enterprise.name;
    }

  };

  return foundName;
}

/* 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

Пример:
addEnterprise("Название нового предприятия")
*/

function addEnterprise(name) {
  
  enterprises.push({
    "id": getNewId(),
    "name": name,
    "departments": []
  });

}

/**
 * Return the new ID
 */
function getNewId() {
  
  let maxId = 0;

  enterprises.forEach(enterprise => {
    maxId = Math.max(maxId, enterprise.id);

    enterprise.departments.forEach(department => {
      maxId = Math.max(maxId, department.id);
    });
  });

  return ++maxId;
}

/* 4. Написать функцию, которая будет добавлять отдел в предприятие. 
В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

Пример:
addDepartment(1, "Название нового отдела")
*/

function addDepartment(enterpriseId, departmentName, employees_count = 0) {

  let enterpriseIndex = enterprises.findIndex(element => element.id == enterpriseId);
  if(enterpriseIndex >= 0 ){
    enterprises[enterpriseIndex].departments.push({
      "id": getNewId(),
      "name": departmentName,
      "employees_count": employees_count,
    });
  }
}

/* 5. Написать функцию для редактирования названия предприятия. 
Принимает в качестве аргумента id предприятия и новое имя предприятия.

Пример:
editEnterprise(1, "Новое название предприятия")
*/

function editEnterprise(enterpriseId, newName){

  let enterpriseIndex = enterprises.findIndex(element => element.id == enterpriseId);
  if(enterpriseIndex >= 0 ){
    enterprises[enterpriseIndex].name = newName;
  }
}

/* 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

Пример:
editDepartment(7, "Новое название отдела")
*/

function editDepartment(departmentId, newName){

  for(let enterprise of enterprises){
    let departmentIndex = enterprise.departments.findIndex(element => element.id == departmentId);
    if(departmentIndex >= 0 ){
      enterprise.departments[departmentIndex].name = newName;
      break;
    }
  }

}

/* 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

Пример:
deleteEnterprise(1)
*/

function deleteEnterprise(enterpriseId){
  
  let enterpriseIndex = enterprises.findIndex(element => element.id == enterpriseId);
  if(enterpriseIndex >= 0 ){
  
    let employees_count = enterprises[enterpriseIndex].departments.reduce((sum, department) => sum += department.employees_count, 0);

    if (employees_count == 0){
      enterprises = enterprises.filter(element => element.id != enterpriseId);
    } else{
      console.log(`Предприятие "${enterprises[enterpriseIndex].name}" содержит подразделения с сотрудниками.`)
    }
  }
}

/* 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

Пример:
deleteDepartment(3)


9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

Пример:
moveEmployees(2, 3)

*/

console.log(getEnterpriseName(4));
console.log(getEnterpriseName("Отдел разработки"));

addEnterprise("Предприяте");
addDepartment(11, "Отделение", 0);

editEnterprise(11, "Предприятие 4");

editDepartment(12, "Бухгалтерия")

printStructure();

deleteEnterprise(1)

printStructure();