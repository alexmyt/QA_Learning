"use strict"

/** Helper functions */

/**
 * Return the new ID
 * @returns {number} New ID
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

/**
 * Get enterprise by ID
 * @param {number} enterpriseId 
 * @returns {object|undefined} Enterprise or undefined
 */
function getEnterpriseById(enterpriseId) {
  return enterprises.find(el => el.id == enterpriseId);
}

/**
 * Get enterprise by department Id or Name
 * @param {number|string} departmentIdOrName 
 * @returns {object|undefined} Enterprise or undefinded
 */
function getEnterpriseByDepartment(departmentIdOrName) {
  return enterprises.find(el => el.departments.find(el => el.id == departmentIdOrName || el.name == departmentIdOrName));
}

/**
 * Find department by Id
 * @param {number} departmentId 
 * @returns {object|undefined} Department or undefined
 */
function getDepartmentById(departmentId) {
  let department = undefined;

  for (let enterprise of enterprises) {
    if (department = enterprise.departments.find(el => el.id == departmentId)) {
      return department;
    }
  }
}

/**
 * Count employees in departments of enterprise
 * @param {object} enterprise 
 * @returns {number} Employees count
 */
function getEnterpriseEmployeeCount(enterprise) {
  return enterprise.departments.reduce((count, el) => count += el.employees_count, 0);
}

/** Begin homeworks */

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

    let employees_count = 0;
    let departments_string = '';
    enterprise.departments.forEach(department => {
      departments_string += departments_string.length == 0 ? '' : '\n';
      departments_string += `- ${department.name} (${department.employees_count || 'нет'} сотрудников)`;
      employees_count += department.employees_count;
    });

    console.log(`${enterprise.name} (${employees_count || 'нет'} сотрудников)`);
    console.log(departments_string);
  });
}

/* 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела 
  и возвращать название предприятия, к которому относится).

Пример:
getEnterpriseName(4) // Предприятие 1
getEnterpriseName("Отдел маркетинга") // Предприятие 2

*/

function getEnterpriseNameByDepartment(id) {
  enterprise = getEnterpriseByDepartment(id);
  return enterprise ? enterprise.name : 'Not found';
}

/* 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

Пример:
addEnterprise("Название нового предприятия")
*/

function addEnterprise(name) {

  let enterprise = {
    "id": getNewId(),
    "name": name,
    "departments": []
  };

  enterprises.push(enterprise);

  return enterprise;
}

/* 4. Написать функцию, которая будет добавлять отдел в предприятие. 
В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

Пример:
addDepartment(1, "Название нового отдела")
*/

function addDepartment(enterpriseId, departmentName, employees_count = 0) {

  let enterprise = getEnterpriseById(enterpriseId);

  if (enterprise) {
    enterprise.departments.push({
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

function editEnterprise(enterpriseId, newName) {

  let enterprise = getEnterpriseById(enterpriseId);

  if (!enterprise) throw new Error(`Enterprise not found by ID: ${enterpriseId}`);

  enterprise.name = newName;
}

/* 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

Пример:
editDepartment(7, "Новое название отдела")
*/

function editDepartment(departmentId, newName) {
  let department = getDepartmentById(departmentId);

  if (!department) throw new Error(`Department not found. Id: ${departmentId}`);

  department.name = newName;

}

/* 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

Пример:
deleteEnterprise(1)
*/

function deleteEnterprise(enterpriseId) {

  let enterprise = getEnterpriseById(enterpriseId);

  if (!enterprise) throw new Error(`Enterprise not found by ID: ${enterpriseId}`);

  let employees_count = getEnterpriseEmployeeCount(enterprise);
  if (employees_count) throw new Error(`Enterprise '${enterprise.name}' have non-zerro employees count: ${enterpriseId}`);

  enterprises = enterprises.filter(el => el != enterprise);
}

/* 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. 
Удалить отдел можно только, если в нем нет сотрудников.

Пример:
deleteDepartment(3)
*/

function deleteDepartment(departmentId) {

  let enterprise = getEnterpriseByDepartment(departmentId);

  if (!enterprise) throw new Error(`Department not found. Id: ${departmentId}`);

  let department = enterprise.departments.find(el => el.id == departmentId);
  if (department.employees_count) throw new Error(`Department have employees. Id: ${departmentId}`);

  enterprise.departments = enterprise.departments.filter(el => el != department);
}

/* 9. Написать функцию для переноса сотрудников между отделами одного предприятия. 
В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники 
и id отдела, в который будут переноситься сотрудники.

Пример:
moveEmployees(2, 3)
*/

function moveEmployees(departmentFromId, departmentToId) {

  let enterpriseFrom = getEnterpriseByDepartment(departmentFromId);
  if (!enterpriseFrom) throw new Error(`Department not found. Id: ${departmentFromId}`);

  let enterpriseTo = getEnterpriseByDepartment(departmentToId);
  if (!enterpriseTo) throw new Error(`Department not found. Id: ${departmentToId}`);

  if (enterpriseFrom != enterpriseTo) throw new Error(`Departments ${departmentFromId} and ${departmentToId} must be at same enterprise`);

  let departmentFrom = enterpriseFrom.departments.find(el => el.id == departmentFromId);
  let departmentTo = enterpriseFrom.departments.find(el => el.id == departmentToId);

  departmentTo.employees_count += departmentFrom.employees_count;
  departmentFrom.employees_count = 0;
}

console.log(getEnterpriseNameByDepartment(4));
console.log(getEnterpriseNameByDepartment("Отдел разработки"));

addEnterprise("Предприяте");
addDepartment(11, "Отделение", 0);

editEnterprise(11, "Предприятие 4");
editDepartment(12, "Бухгалтерия")

try {
  deleteEnterprise(1);
  deleteDepartment(3);
} catch (err) {
  console.log(err.toString());
}

try {
  moveEmployees(2, 3);
  moveEmployees(3, 6);
} catch (err) {
  console.log(err.toString());
}



printStructure();

