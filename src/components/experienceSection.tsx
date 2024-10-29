import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Professional Experience
        </h2>
        <div className="space-y-12">
          {[
            {
              company: "Tech Company A",
              position: "Senior UI Developer",
              date: "Jan 2020 - Present",
            },
            {
              company: "Web Agency B",
              position: "UI Developer",
              date: "Mar 2018 - Dec 2019",
            },
            {
              company: "Startup C",
              position: "Junior Frontend Developer",
              date: "Jun 2016 - Feb 2018",
            },
          ].map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{job.company}</CardTitle>
                <CardDescription>{job.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="text-lg font-semibold mb-2">{job.position}</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Developed responsive and accessible web applications using
                    React and Next.js
                  </li>
                  <li>
                    Collaborated with designers to implement pixel-perfect UI
                    components
                  </li>
                  <li>
                    Optimized application performance, achieving a 30%
                    improvement in load times
                  </li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
