import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { assignments, courses } from "@/data/studentData";
import { ClipboardList, Calendar } from "lucide-react";

const statusColors: Record<string, string> = {
  Pending: "bg-warning/20 text-warning border-warning/30",
  Submitted: "bg-primary/20 text-primary border-primary/30",
  Graded: "bg-success/20 text-success border-success/30",
};

export default function Assignments() {
  const [courseFilter, setCourseFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = assignments.filter((a) => {
    if (courseFilter !== "all" && a.courseCode !== courseFilter) return false;
    if (statusFilter !== "all" && a.status !== statusFilter) return false;
    return true;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="font-display text-3xl font-bold">Assignments</h1>
          <p className="mt-1 text-muted-foreground">
            Track and manage your assignments
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          <Select value={courseFilter} onValueChange={setCourseFilter}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Courses</SelectItem>
              {courses.map((c) => (
                <SelectItem key={c.code} value={c.code}>
                  {c.code} — {c.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Submitted">Submitted</SelectItem>
              <SelectItem value="Graded">Graded</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Assignments List */}
        <div className="space-y-3">
          {filtered.map((a) => {
            const dueDate = new Date(a.dueDate);
            return (
              <Card key={a.id}>
                <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-medium">{a.title}</h3>
                      <span
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusColors[a.status]}`}
                      >
                        {a.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {a.course} ({a.courseCode})
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {a.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {dueDate.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    {a.grade && (
                      <Badge variant="secondary">{a.grade}</Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
          {filtered.length === 0 && (
            <div className="py-12 text-center text-muted-foreground">
              No assignments match the selected filters.
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
