export const studentProfile = {
  name: "Alex Rivera",
  email: "alex.rivera@university.edu",
  studentId: "STU-2024-0847",
  major: "Computer Science",
  year: "Junior",
  avatar: "",
  currentGPA: 3.8,
  attendance: 95,
  pendingAssignments: 3,
  upcomingExams: 2
};

export const courses = [
  {
    id: "1",
    name: "Data Structures & Algorithms",
    code: "CS301",
    instructor: "Dr. Sarah Chen",
    progress: 72,
    grade: "A-",
    credits: 4,
    color: "hsl(190, 80%, 50%)",
    syllabus: ["Arrays & Linked Lists", "Trees & Graphs", "Sorting Algorithms", "Dynamic Programming", "Hash Tables"],
    materials: ["Textbook: CLRS 4th Edition", "Lecture Slides (Week 1–10)", "Lab Handouts"],
  },
  {
    id: "2",
    name: "Operating Systems",
    code: "CS310",
    instructor: "Prof. James Miller",
    progress: 65,
    grade: "B+",
    credits: 3,
    color: "hsl(270, 55%, 58%)",
    syllabus: ["Process Management", "Memory Management", "File Systems", "I/O Systems", "Security"],
    materials: ["Textbook: Silberschatz 10th Ed.", "Project Guidelines", "VM Setup Guide"],
  },
  {
    id: "3",
    name: "Linear Algebra",
    code: "MATH240",
    instructor: "Dr. Emily Watson",
    progress: 80,
    grade: "A",
    credits: 3,
    color: "hsl(150, 55%, 45%)",
    syllabus: ["Vectors & Matrices", "Eigenvalues", "Linear Transformations", "Vector Spaces", "Orthogonality"],
    materials: ["Textbook: Strang 6th Edition", "Problem Sets", "MATLAB Tutorials"],
  },
  {
    id: "4",
    name: "Database Systems",
    code: "CS340",
    instructor: "Dr. Michael Park",
    progress: 58,
    grade: "B+",
    credits: 3,
    color: "hsl(38, 85%, 55%)",
    syllabus: ["ER Modeling", "SQL & Relational Algebra", "Normalization", "Indexing", "Transactions"],
    materials: ["Textbook: Database System Concepts", "SQL Playground Access", "Project Specs"],
  },
  {
    id: "5",
    name: "Technical Writing",
    code: "ENG205",
    instructor: "Prof. Lisa Chang",
    progress: 90,
    grade: "A",
    credits: 2,
    color: "hsl(340, 65%, 55%)",
    syllabus: ["Research Papers", "Technical Reports", "Documentation", "Presentations", "Peer Review"],
    materials: ["Style Guide PDF", "APA Manual", "Sample Papers"],
  },
  {
    id: "6",
    name: "Discrete Mathematics",
    code: "MATH250",
    instructor: "Dr. Robert Kim",
    progress: 45,
    grade: "B",
    credits: 3,
    color: "hsl(210, 70%, 55%)",
    syllabus: ["Logic & Proofs", "Set Theory", "Combinatorics", "Graph Theory", "Number Theory"],
    materials: ["Textbook: Rosen 8th Ed.", "Practice Problems", "Proof Templates"],
  },
];

export const weeklySchedule = [
  { id: "1", time: "9:00 AM", endTime: "10:30 AM", subject: "Data Structures & Algorithms", room: "Room 301", courseCode: "CS301", day: "Monday" },
  { id: "2", time: "11:00 AM", endTime: "12:00 PM", subject: "Linear Algebra", room: "Room 205", courseCode: "MATH240", day: "Monday" },
  { id: "3", time: "2:00 PM", endTime: "3:30 PM", subject: "Database Systems", room: "Lab 4", courseCode: "CS340", day: "Monday" },
  { id: "4", time: "9:00 AM", endTime: "10:30 AM", subject: "Operating Systems", room: "Room 410", courseCode: "CS310", day: "Tuesday" },
  { id: "5", time: "11:00 AM", endTime: "12:30 PM", subject: "Technical Writing", room: "Room 102", courseCode: "ENG205", day: "Tuesday" },
  { id: "6", time: "2:00 PM", endTime: "3:00 PM", subject: "Discrete Mathematics", room: "Room 308", courseCode: "MATH250", day: "Tuesday" },
  { id: "7", time: "9:00 AM", endTime: "10:30 AM", subject: "Data Structures & Algorithms", room: "Room 301", courseCode: "CS301", day: "Wednesday" },
  { id: "8", time: "11:00 AM", endTime: "12:00 PM", subject: "Linear Algebra", room: "Room 205", courseCode: "MATH240", day: "Wednesday" },
  { id: "9", time: "2:00 PM", endTime: "3:30 PM", subject: "Database Systems", room: "Lab 4", courseCode: "CS340", day: "Wednesday" },
  { id: "10", time: "9:00 AM", endTime: "10:30 AM", subject: "Operating Systems", room: "Room 410", courseCode: "CS310", day: "Thursday" },
  { id: "11", time: "11:00 AM", endTime: "12:30 PM", subject: "Technical Writing", room: "Room 102", courseCode: "ENG205", day: "Thursday" },
  { id: "12", time: "2:00 PM", endTime: "3:00 PM", subject: "Discrete Mathematics", room: "Room 308", courseCode: "MATH250", day: "Thursday" },
  { id: "13", time: "9:00 AM", endTime: "10:30 AM", subject: "Data Structures & Algorithms", room: "Lab 2", courseCode: "CS301", day: "Friday" },
  { id: "14", time: "11:00 AM", endTime: "12:00 PM", subject: "Linear Algebra", room: "Room 205", courseCode: "MATH240", day: "Friday" },
];

export const assignments = [
  { id: "1", title: "Binary Tree Implementation", course: "Data Structures & Algorithms", courseCode: "CS301", dueDate: "2026-02-12", status: "Pending", description: "Implement a balanced BST with insert, delete, and search operations." },
  { id: "2", title: "Process Scheduler Simulation", course: "Operating Systems", courseCode: "CS310", dueDate: "2026-02-15", status: "Pending", description: "Simulate round-robin and priority scheduling algorithms." },
  { id: "3", title: "Matrix Operations Lab", course: "Linear Algebra", courseCode: "MATH240", dueDate: "2026-02-10", status: "Submitted", description: "Complete MATLAB exercises on matrix decomposition." },
  { id: "4", title: "ER Diagram — Library System", course: "Database Systems", courseCode: "CS340", dueDate: "2026-02-18", status: "Pending", description: "Design an ER diagram for a library management system." },
  { id: "5", title: "Research Paper Draft", course: "Technical Writing", courseCode: "ENG205", dueDate: "2026-02-05", status: "Graded", grade: "A", description: "First draft of the research paper on AI ethics." },
  { id: "6", title: "Proof by Induction Set", course: "Discrete Mathematics", courseCode: "MATH250", dueDate: "2026-02-08", status: "Graded", grade: "B+", description: "Complete 10 proof-by-induction problems." },
  { id: "7", title: "Hash Table Analysis", course: "Data Structures & Algorithms", courseCode: "CS301", dueDate: "2026-02-01", status: "Graded", grade: "A-", description: "Analyze collision resolution strategies." },
  { id: "8", title: "Eigenvalue Problem Set", course: "Linear Algebra", courseCode: "MATH240", dueDate: "2026-01-28", status: "Graded", grade: "A", description: "Solve eigenvalue problems for 3x3 and 4x4 matrices." },
];

export const recentGrades = [
  { id: "1", course: "Technical Writing", assignment: "Research Paper Draft", grade: "A", percentage: 94, date: "2026-02-06" },
  { id: "2", course: "Discrete Mathematics", assignment: "Proof by Induction Set", grade: "B+", percentage: 87, date: "2026-02-05" },
  { id: "3", course: "Data Structures", assignment: "Hash Table Analysis", grade: "A-", percentage: 91, date: "2026-02-03" },
  { id: "4", course: "Linear Algebra", assignment: "Eigenvalue Problem Set", grade: "A", percentage: 96, date: "2026-01-30" },
  { id: "5", course: "Operating Systems", assignment: "Memory Allocation Lab", grade: "B+", percentage: 88, date: "2026-01-27" },
];

export const notifications = [
  { id: "1", type: "assignment", title: "New Assignment", message: "Binary Tree Implementation due Feb 12", time: "2 hours ago", read: false },
  { id: "2", type: "grade", title: "Grade Posted", message: "Research Paper Draft — A (94%)", time: "5 hours ago", read: false },
  { id: "3", type: "announcement", title: "Campus Announcement", message: "Spring break dates confirmed: March 15–22", time: "1 day ago", read: true },
  { id: "4", type: "assignment", title: "Deadline Reminder", message: "Process Scheduler Simulation due in 7 days", time: "1 day ago", read: true },
  { id: "5", type: "grade", title: "Grade Posted", message: "Proof by Induction Set — B+ (87%)", time: "2 days ago", read: true },
  { id: "6", type: "announcement", title: "Office Hours Change", message: "Dr. Chen's office hours moved to Thu 3–5 PM", time: "3 days ago", read: true },
];

export const semesterGPAs = [
  { semester: "Fall 2024", gpa: 3.5, credits: 15 },
  { semester: "Spring 2025", gpa: 3.7, credits: 16 },
  { semester: "Fall 2025", gpa: 3.9, credits: 15 },
  { semester: "Spring 2026", gpa: 3.8, credits: 18 },
];

export const examSchedule = [
  { id: "1", subject: "Data Structures & Algorithms", date: "2026-03-10", time: "9:00 AM", room: "Hall A" },
  { id: "2", subject: "Operating Systems", date: "2026-03-12", time: "2:00 PM", room: "Hall B" },
  { id: "3", subject: "Linear Algebra", date: "2026-03-14", time: "9:00 AM", room: "Room 205" },
  { id: "4", subject: "Database Systems", date: "2026-03-15", time: "11:00 AM", room: "Lab 4" },
  { id: "5", subject: "Discrete Mathematics", date: "2026-03-17", time: "9:00 AM", room: "Room 308" },
];
