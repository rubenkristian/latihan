class Employee {
  constructor(protected name: string, protected id: string, protected department: string) {}
  getDetail() {
    return `Hi, my name is ${this.name} with ID ${this.id}.
    I’m in the department ${this.department}.`
  }
}

class Secretary extends Employee {
  constructor(name: string, id: string, department: string) {
    super(name, id, department);
  }

  getDetail() {
    return `Hi, my name is ${this.name} with ID ${this.id}.
    I’m in the department ${this.department}.
    My role is Secretary.
   `;
  }

  printDocument() {
    return `All right, give me 5 minutes and I’ll give the document
    to you as soon as possible.
   `;
  }

  sendDocument() {
    return ` All right, I’ll give it to you via email.`;
  }
}

class Manager extends Employee {
  constructor(name: string, id: string, department: string, private responsibility: string) {
    super(name, id, department);
  }

  getDetail() {
    return `Hi, my name is ${this.name} with ID ${this.id}.
    I’m in the department ${this.department}.
    My role is Manager with responsibility ${this.responsibility}.
   `;
  }

  management() {
    return `Here my management functions:
    planning, organizing, leading and controlling`;
  }
}

class Developer extends Employee {
  constructor(name: string, id: string, department: string, private backendTool: string, private frontendTool: string) {
    super(name, id, department);
  }

  getDetail() {
    return ` Hi, my name is ${this.name} with ID ${this.id}.
    I’m in the department ${this.department}.
    My role is Developer.
    I’m using ${this.backendTool} as backend and ${this.backendTool} as frontend.`;
  }
}