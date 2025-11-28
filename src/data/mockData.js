export const mockData = {
  employees: [
    {
      id: 0,
      name: "Yaswanth",
      role: "Admin",
      email: "admin@prou.com",
      password: "supersecretpassword",
      tasks: []
    },
    {
      id: 1,
      name: "Alice Johnson",
      role: "User",
      email: "alice.j@prou.com",
      password: "alicepassword",
      title: "Frontend Developer",
      tasks: [
        { id: 101, title: "Build login page", status: "Completed" },
        { id: 102, title: "Implement dashboard", status: "In Progress" },
        { id: 103, title: "Fix CSS bugs on pricing page", status: "Pending" }
      ]
    },
    {
      id: 2,
      name: "Bob Smith",
      role: "User",
      email: "bob.s@prou.com",
      password: "bobpassword",
      title: "Backend Developer",
      tasks: [
        { id: 201, title: "API integration for user profiles", status: "Pending" },
        { id: 202, title: "Set up database schema", status: "Completed" }
      ]
    },
    {
      id: 3,
      name: "Charlie Brown",
      role: "User",
      email: "charlie.b@prou.com",
      password: "charliepassword",
      title: "UI/UX Designer",
      tasks: [
        { id: 301, title: "Design landing page mockups", status: "Completed" },
        { id: 302, title: "Create wireframes for new feature", status: "In Progress" }
      ]
    },
    {
      id: 4,
      name: "Diana Prince",
      role: "User",
      email: "diana.p@prou.com",
      password: "dianapassword",
      title: "Project Manager",
      tasks: [
        { id: 401, title: "Plan Q3 project timeline", status: "In Progress" },
        { id: 402, title: "Organize team meeting", status: "Completed" },
        { id: 403, title: "Review project budget", status: "Pending" }
      ]
    },
    {
      id: 5,
      name: "Ethan Hunt",
      role: "User",
      email: "ethan.h@prou.com",
      password: "ethanpassword",
      title: "QA Engineer",
      tasks: [
        { id: 501, title: "Write test cases for login flow", status: "Completed" },
        { id: 502, title: "Perform regression testing on staging", status: "Pending" }
      ]
    }
  ]
};
