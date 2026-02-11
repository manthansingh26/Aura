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
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { courses, recentGrades, semesterGPAs } from "@/data/studentData";
import { BarChart3, TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const subjectData = courses.map((c) => ({
  name: c.code,
  grade: c.grade === "A" ? 4.0 : c.grade === "A-" ? 3.7 : c.grade === "B+" ? 3.3 : c.grade === "B" ? 3.0 : 2.7,
}));

export default function Grades() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="font-display text-3xl font-bold">Grades</h1>
          <p className="mt-1 text-muted-foreground">
            Your academic performance overview
          </p>
        </div>

        {/* GPA Trend + Subject Breakdown */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="h-5 w-5 text-primary" />
                GPA Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={semesterGPAs}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(225, 18%, 18%)" />
                  <XAxis dataKey="semester" tick={{ fontSize: 12, fill: "hsl(215, 15%, 55%)" }} />
                  <YAxis domain={[3.0, 4.0]} tick={{ fontSize: 12, fill: "hsl(215, 15%, 55%)" }} />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(225, 22%, 11%)",
                      border: "1px solid hsl(225, 18%, 18%)",
                      borderRadius: "8px",
                      color: "hsl(210, 20%, 92%)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="gpa"
                    stroke="hsl(190, 80%, 50%)"
                    strokeWidth={2}
                    dot={{ r: 5, fill: "hsl(190, 80%, 50%)" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <BarChart3 className="h-5 w-5 text-primary" />
                Subject Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={subjectData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(225, 18%, 18%)" />
                  <XAxis dataKey="name" tick={{ fontSize: 12, fill: "hsl(215, 15%, 55%)" }} />
                  <YAxis domain={[0, 4.0]} tick={{ fontSize: 12, fill: "hsl(215, 15%, 55%)" }} />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(225, 22%, 11%)",
                      border: "1px solid hsl(225, 18%, 18%)",
                      borderRadius: "8px",
                      color: "hsl(210, 20%, 92%)",
                    }}
                  />
                  <Bar dataKey="grade" fill="hsl(270, 55%, 58%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Semester GPA Summary */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Semester Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {semesterGPAs.map((s) => (
                <div
                  key={s.semester}
                  className="rounded-lg border border-border p-4 text-center"
                >
                  <p className="text-sm text-muted-foreground">{s.semester}</p>
                  <p className="font-display text-2xl font-bold text-primary">
                    {s.gpa.toFixed(1)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {s.credits} credits
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Grades Table */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">All Course Grades</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course</TableHead>
                  <TableHead>Code</TableHead>
                  <TableHead>Instructor</TableHead>
                  <TableHead>Credits</TableHead>
                  <TableHead>Grade</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell className="font-medium">{c.name}</TableCell>
                    <TableCell>{c.code}</TableCell>
                    <TableCell>{c.instructor}</TableCell>
                    <TableCell>{c.credits}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{c.grade}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
