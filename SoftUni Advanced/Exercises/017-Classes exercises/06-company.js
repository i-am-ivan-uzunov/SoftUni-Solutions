class Company {
  departments;

  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    if (
      name &&
      typeof salary === "number" &&
      salary >= 0 &&
      position &&
      department
    ) {
      const employee = { name, salary, position };

      if (!this.departments.hasOwnProperty(department)) {
        this.departments[department] = [];
      } 
      this.departments[department].push((employee));

      return `New employee is hired. Name: ${name}. Position: ${position}`;
    } else {
      throw new Error("Invalid input!");
    }
  }

  bestDepartment() {
    let keys = [];
    for (let [key, value] of Object.entries(this.departments)) {
      keys.push(key);
    }

    let bestAvgSalary = 0;
    let currentAvgSalary = 0;
    let bestDepart = keys[0];
    let sorted = this.departments[bestDepart];

    for (let i = 0; i < keys.length; i++) {
      let sum = 0;
      const curr = this.departments[keys[i]];

      for (let j = 0; j < curr.length; j++) {
        sum += curr[j].salary;
      }

      currentAvgSalary = sum / curr.length;

      if(currentAvgSalary > bestAvgSalary){
        bestAvgSalary = currentAvgSalary;
        bestDepart = keys[i];
        sorted = this.departments[bestDepart];
      }
    }

    sorted = sorted.sort((a, b) => {
      if (b.salary - a.salary) {
        return b.salary - a.salary;
      } else {
        return a.name.localeCompare(b.name);
      }
    });

    let mess = `Best Department is: ${bestDepart}\nAverage salary: ${bestAvgSalary.toFixed(2)}\n`;

    for (let i = 0; i < sorted.length; i++) {
      const name = sorted[i].name;
      const salary = sorted[i].salary;
      const position = sorted[i].position;
      mess += `${name} ${salary} ${position}\n`;
    }

    return mess.trim();
  }
}

