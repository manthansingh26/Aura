import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  GraduationCap,
  Users,
  ClipboardList,
  FileText,
  Bell,
  Clock,
  MapPin,
  BookOpen,
} from "lucide-react";
import {
  weeklySchedule,
  recentGrades,
  notifications,
  assignments,
} from "@/data/studentData";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const stats = [
  { label: "Current GPA", value: "3.8", icon: GraduationCap, trend: "+0.1" },
  { label: "Attendance", value: "95%", icon: Users, trend: "+2%" },
  { label: "Pending Assignments", value: "3", icon: ClipboardList, trend: "" },
  { label: "Upcoming Exams", value: "2", icon: FileText, trend: "" },
];

const today = "Monday";
const todaySchedule = weeklySchedule.filter((s) => s.day === today);
const pendingAssignments = assignments
  .filter((a) => a.status === "Pending")
  .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="font-display text-3xl font-bold">
            Welcome back, Alex 👋
          </h1>
          <p className="mt-1 text-muted-foreground">
            Here's what's happening with your academics today.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="flex items-center gap-4 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <div className="flex items-baseline gap-2">
                    <p className="font-display text-2xl font-bold">
                      {stat.value}
                    </p>
                    {stat.trend && (
                      <span className="text-xs text-success">{stat.trend}</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Today's Schedule */}
          <Card className="lg:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Clock className="h-5 w-5 text-primary" />
                Today's Schedule
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {todaySchedule.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded-lg border border-border bg-secondary/30 p-3"
                >
                  <div className="w-24 shrink-0 text-sm font-medium text-primary">
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{item.subject}</p>
                    <div className="mt-0.5 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {item.room}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-3 w-3" />
                        {item.courseCode}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bell className="h-5 w-5 text-primary" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {notifications.slice(0, 5).map((n) => (
                <div
                  key={n.id}
                  className={`rounded-lg border p-3 text-sm ${
                    !n.read
                      ? "border-primary/30 bg-primary/5"
                      : "border-border"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-medium">{n.title}</p>
                    {!n.read && (
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    )}
                  </div>
                  <p className="mt-0.5 text-muted-foreground">{n.message}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{n.time}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Grades */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Recent Grades</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course</TableHead>
                    <TableHead>Assignment</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentGrades.map((g) => (
                    <TableRow key={g.id}>
                      <TableCell className="font-medium">{g.course}</TableCell>
                      <TableCell>{g.assignment}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{g.grade}</Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {new Date(g.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Upcoming Deadlines */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Upcoming Deadlines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {pendingAssignments.map((a) => {
                const dueDate = new Date(a.dueDate);
                const daysLeft = Math.ceil(
                  (dueDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
                );
                return (
                  <div
                    key={a.id}
                    className="flex items-center justify-between rounded-lg border border-border p-3"
                  >
                    <div>
                      <p className="font-medium">{a.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {a.course}
                      </p>
                    </div>
                    <Badge
                      variant={daysLeft <= 3 ? "destructive" : "secondary"}
                    >
                      {daysLeft <= 0 ? "Overdue" : `${daysLeft}d left`}
                    </Badge>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
