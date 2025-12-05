import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Student } from './types';

interface StudentsTabProps {
  students: Student[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const StudentsTab = ({ students, searchQuery, setSearchQuery }: StudentsTabProps) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Профили учеников</h2>
          <p className="text-muted-foreground">Узнайте о навыках и достижениях одноклассников</p>
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Поиск учеников..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-sm"
          />
          <Button variant="outline">
            <Icon name="Filter" size={18} />
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {students.map((student) => (
          <Card key={student.id} className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-24 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            <CardHeader className="relative -mt-12">
              <div className="flex items-start gap-4">
                <Avatar className="h-20 w-20 border-4 border-background shadow-lg">
                  <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-secondary text-white">
                    {student.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 pt-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{student.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary">{student.direction}</Badge>
                        <span className="text-xs">Уровень {student.level}</span>
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{student.points}</div>
                      <div className="text-xs text-muted-foreground">баллов</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold mb-2 flex items-center gap-1">
                  <Icon name="Sparkles" size={14} />
                  Навыки
                </h4>
                <div className="flex flex-wrap gap-2">
                  {student.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-accent/10">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-3 flex items-center gap-1">
                  <Icon name="Award" size={14} />
                  Достижения
                </h4>
                <div className="flex flex-wrap gap-3">
                  {student.achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 text-2xl hover:scale-110 transition-transform cursor-pointer"
                      title={`${achievement.name}: ${achievement.description}`}
                    >
                      {achievement.icon}
                    </div>
                  ))}
                </div>
              </div>
              <Button className="w-full" variant="outline">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Написать сообщение
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StudentsTab;
