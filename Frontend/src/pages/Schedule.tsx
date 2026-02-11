import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { weeklySchedule, examSchedule } from "@/data/studentData";
import { Calendar, Clock, MapPin, AlertTriangle } from "lucide-react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export default function Schedule() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="font-display text-3xl font-bold">Schedule</h1>
          <p className="mt-1 text-muted-foreground">
            Your weekly timetable and upcoming exams
          </p>
        </div>

        {/* Weekly Timetable */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calendar className="h-5 w-5 text-primary" />
              Weekly Timetable
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-5">
              {days.map((day) => {
                const dayClasses = weeklySchedule.filter((s) => s.day === day);
                return (
                  <div key={day}>
                    <h3 className="mb-2 text-sm font-semibold text-primary">
                      {day}
                    </h3>
                    <div className="space-y-2">
                      {dayClasses.map((item) => (
                        <div
                          key={item.id}
                          className="rounded-lg border border-border bg-secondary/30 p-2.5 text-sm"
                        >
                          <p className="font-medium leading-tight">
                            {item.subject}
                          </p>
                          <div className="mt-1 space-y-0.5 text-xs text-muted-foreground">
                            <p className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {item.time} – {item.endTime}
                            </p>
                            <p className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {item.room}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Exam Schedule */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Exam Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {examSchedule.map((exam) => {
                const examDate = new Date(exam.date);
                const daysUntil = Math.ceil(
                  (examDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
                );
                return (
                  <div
                    key={exam.id}
                    className="rounded-lg border border-border p-4"
                  >
                    <div className="flex items-start justify-between">
                      <p className="font-medium">{exam.subject}</p>
                      <Badge
                        variant={daysUntil <= 7 ? "destructive" : "secondary"}
                      >
                        {daysUntil}d
                      </Badge>
                    </div>
                    <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <p>
                        {examDate.toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                      <p className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {exam.time}
                      </p>
                      <p className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {exam.room}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
