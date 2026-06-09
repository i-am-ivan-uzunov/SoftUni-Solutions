class Company{
  departments = {};

  addEmployee(name, salary, position, department){
    if(name && (salary || salary === 0) && position && department){
      const employee = {name, salary, position};
      if(this.departments.hasOwnProperty(department)){
        this.departments[department].push(employee);
      }else{
        this.departments[department] = [];
        this.departments[department].push(employee);
      }
      
      return `New employee is hired. Name: ${name}. Position: ${position}`;
    }else{
      throw new Error('Invalid input!');
    }
  }

  bestDepartment(){
     let sorted = Array.from(Object.values(this.departments));
      return Object.keys(sorted[0]);
  }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
