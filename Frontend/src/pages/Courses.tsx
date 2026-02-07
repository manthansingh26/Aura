import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useCourses } from "@/hooks/useApi";
import { BookOpen, User, ArrowLeft, FileText, Layers, Loader2 } from "lucide-react";

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const { data: courses, isLoading } = useCourses();
  const course = courses?.find((c: any) => c.id === selectedCourse);

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex h-[50vh] items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </DashboardLayout>
    );
  }

  if (course) {
    return (
      <DashboardLayout>
        <div className="space-y-6">
          <Button variant="ghost" onClick={() => setSelectedCourse(null)} className="gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Courses
          </Button>

          <div>
            <div className="flex items-center gap-3">
              <Badge style={{ backgroundColor: course.color, color: "#fff" }}>
                {course.code}
              </Badge>
              <h1 className="font-display text-2xl font-bold">{course.name}</h1>
            </div>
            <p className="mt-1 text-muted-foreground">
              <User className="mr-1 inline h-4 w-4" />
              {course.instructor} · {course.credits} credits · Grade: {course.grade}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Layers className="h-5 w-5 text-primary" /> Syllabus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-inside list-decimal space-y-2 text-sm">
                  {course.syllabus.map((topic, i) => (
                    <li key={i} className="text-foreground">{topic}</li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <FileText className="h-5 w-5 text-primary" /> Materials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {course.materials.map((mat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      {mat}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Progress value={course.progress} className="flex-1" />
                <span className="font-display text-lg font-bold text-primary">
                  {course.progress}%
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="font-display text-3xl font-bold">Courses</h1>
          <p className="mt-1 text-muted-foreground">
            Your enrolled courses this semester
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses && courses.length > 0 ? (
            courses.map((c: any) => (
              <Card
                key={c.id}
                className="cursor-pointer transition-colors hover:border-primary/50"
                onClick={() => setSelectedCourse(c.id)}
              >
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <Badge style={{ backgroundColor: c.color, color: "#fff" }}>
                      {c.code}
                    </Badge>
                    <span className="font-display text-lg font-bold">{c.grade}</span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold leading-tight">
                    {c.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {c.instructor}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <Progress value={c.progress} className="flex-1 h-2" />
                    <span className="text-sm font-medium text-muted-foreground">
                      {c.progress}%
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="col-span-full py-8 text-center text-muted-foreground">
              No courses available
            </p>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
