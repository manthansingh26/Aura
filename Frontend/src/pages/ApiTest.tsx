import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  useCourses,
  useStudentProfile,
  useStudentStats,
  useTodaySchedule,
  useRecentGrades,
  useUnreadNotifications,
} from "@/hooks/useApi";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";

export default function ApiTest() {
  const courses = useCourses();
  const profile = useStudentProfile();
  const stats = useStudentStats();
  const schedule = useTodaySchedule();
  const grades = useRecentGrades();
  const notifications = useUnreadNotifications();

  const endpoints = [
    { name: "Student Profile", hook: profile, path: "/student/profile" },
    { name: "Student Stats", hook: stats, path: "/student/stats" },
    { name: "Courses", hook: courses, path: "/courses" },
    { name: "Today's Schedule", hook: schedule, path: "/schedule/today" },
    { name: "Recent Grades", hook: grades, path: "/grades/recent" },
    { name: "Notifications", hook: notifications, path: "/notifications/unread" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="font-display text-3xl font-bold">API Connection Test</h1>
          <p className="mt-1 text-muted-foreground">
            Testing connection between Frontend and Backend
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Endpoint Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {endpoints.map((endpoint) => (
              <div
                key={endpoint.name}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="flex-1">
                  <p className="font-medium">{endpoint.name}</p>
                  <p className="text-sm text-muted-foreground">{endpoint.path}</p>
                </div>
                <div className="flex items-center gap-3">
                  {endpoint.hook.isLoading && (
                    <Badge variant="secondary" className="gap-1">
                      <Loader2 className="h-3 w-3 animate-spin" />
                      Loading
                    </Badge>
                  )}
                  {endpoint.hook.isError && (
                    <Badge variant="destructive" className="gap-1">
                      <XCircle className="h-3 w-3" />
                      Error
                    </Badge>
                  )}
                  {endpoint.hook.isSuccess && (
                    <Badge variant="default" className="gap-1 bg-green-600">
                      <CheckCircle2 className="h-3 w-3" />
                      Success
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Backend URL</CardTitle>
            </CardHeader>
            <CardContent>
              <code className="rounded bg-muted px-2 py-1 text-sm">
                {import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1'}
              </code>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Connection Status</CardTitle>
            </CardHeader>
            <CardContent>
              {endpoints.every((e) => e.hook.isSuccess) && (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-medium">All endpoints connected!</span>
                </div>
              )}
              {endpoints.some((e) => e.hook.isError) && (
                <div className="flex items-center gap-2 text-destructive">
                  <XCircle className="h-5 w-5" />
                  <span className="font-medium">Some endpoints failed</span>
                </div>
              )}
              {endpoints.some((e) => e.hook.isLoading) && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span className="font-medium">Testing connections...</span>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {profile.isSuccess && (
          <Card>
            <CardHeader>
              <CardTitle>Sample Data: Student Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="overflow-auto rounded bg-muted p-4 text-sm">
                {JSON.stringify(profile.data, null, 2)}
              </pre>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
