import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';
import { Student, Event } from './types';

interface HomeTabProps {
  students: Student[];
  events: Event[];
}

const getEventTypeColor = (type: string) => {
  switch (type) {
    case 'academic':
      return 'bg-primary/10 text-primary border-primary/20';
    case 'sport':
      return 'bg-secondary/10 text-secondary border-secondary/20';
    case 'cultural':
      return 'bg-accent/10 text-accent border-accent/20';
    default:
      return 'bg-muted';
  }
};

const getEventTypeLabel = (type: string) => {
  switch (type) {
    case 'academic':
      return 'Учебное';
    case 'sport':
      return 'Спорт';
    case 'cultural':
      return 'Культура';
    default:
      return '';
  }
};

const HomeTab = ({ students, events }: HomeTabProps) => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Добро пожаловать!</h2>
        <p className="text-muted-foreground">Обменивайтесь знаниями и развивайтесь вместе</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ваши баллы</CardTitle>
            <Icon name="TrendingUp" className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+180 за последний месяц</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Конспекты</CardTitle>
            <Icon name="FileText" className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">3 новых на этой неделе</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Достижения</CardTitle>
            <Icon name="Award" className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">2 до следующего уровня</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Уровень</CardTitle>
            <Icon name="Star" className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <Progress value={65} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Calendar" size={20} />
              Предстоящие мероприятия
            </CardTitle>
            <CardDescription>Школьные события и активности</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] pr-4">
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="flex items-start gap-4 p-3 rounded-lg border hover:bg-accent/5 transition-colors">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${getEventTypeColor(event.type)}`}>
                      <Icon name={event.type === 'academic' ? 'BookOpen' : event.type === 'sport' ? 'Trophy' : 'Music'} size={20} />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-semibold leading-tight">{event.title}</h4>
                        <Badge variant="outline" className={getEventTypeColor(event.type)}>
                          {getEventTypeLabel(event.type)}
                        </Badge>
                      </div>
                      <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          {event.date} в {event.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="MapPin" size={14} />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card className="animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Trophy" size={20} />
              Топ участников
            </CardTitle>
            <CardDescription>Лидеры по баллам за месяц</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] pr-4">
              <div className="space-y-4">
                {students.map((student, index) => (
                  <div key={student.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/5 transition-colors">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                      #{index + 1}
                    </div>
                    <Avatar>
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                        {student.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold">{student.name}</p>
                      <p className="text-sm text-muted-foreground">{student.direction}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">{student.points}</p>
                      <p className="text-xs text-muted-foreground">баллов</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomeTab;
