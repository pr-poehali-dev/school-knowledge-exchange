import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

interface Student {
  id: number;
  name: string;
  avatar: string;
  direction: string;
  skills: string[];
  points: number;
  achievements: Achievement[];
  level: number;
}

interface Achievement {
  id: string;
  name: string;
  icon: string;
  description: string;
}

interface Note {
  id: number;
  title: string;
  subject: string;
  author: string;
  authorAvatar: string;
  likes: number;
  downloads: number;
  date: string;
}

interface Message {
  id: number;
  from: string;
  avatar: string;
  text: string;
  time: string;
  unread: boolean;
}

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'academic' | 'sport' | 'cultural';
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  const achievements: Achievement[] = [
    { id: 'first-share', name: 'Первый конспект', icon: '📝', description: 'Поделился первым конспектом' },
    { id: 'helpful', name: 'Помощник', icon: '🤝', description: 'Помог 10 ученикам' },
    { id: 'expert', name: 'Эксперт', icon: '⭐', description: '50+ скачиваний конспектов' },
    { id: 'active', name: 'Активист', icon: '🔥', description: '30 дней активности подряд' },
    { id: 'mentor', name: 'Наставник', icon: '👨‍🏫', description: 'Провёл 5 консультаций' },
    { id: 'top-contributor', name: 'Топ вкладчик', icon: '🏆', description: 'Топ-10 по баллам' },
  ];

  const students: Student[] = [
    {
      id: 1,
      name: 'Анна Иванова',
      avatar: 'AI',
      direction: 'Математика',
      skills: ['Алгебра', 'Геометрия', 'Теория вероятностей'],
      points: 2450,
      achievements: achievements.slice(0, 4),
      level: 8,
    },
    {
      id: 2,
      name: 'Дмитрий Петров',
      avatar: 'ДП',
      direction: 'Физика',
      skills: ['Механика', 'Электродинамика', 'Оптика'],
      points: 2100,
      achievements: achievements.slice(0, 3),
      level: 7,
    },
    {
      id: 3,
      name: 'Мария Сидорова',
      avatar: 'МС',
      direction: 'Литература',
      skills: ['Русская литература', 'Зарубежная литература', 'Поэзия'],
      points: 1890,
      achievements: achievements.slice(0, 5),
      level: 6,
    },
    {
      id: 4,
      name: 'Алексей Смирнов',
      avatar: 'АС',
      direction: 'Информатика',
      skills: ['Программирование', 'Алгоритмы', 'Базы данных'],
      points: 1750,
      achievements: achievements.slice(0, 3),
      level: 6,
    },
  ];

  const notes: Note[] = [
    {
      id: 1,
      title: 'Производные сложных функций',
      subject: 'Математика',
      author: 'Анна Иванова',
      authorAvatar: 'AI',
      likes: 45,
      downloads: 120,
      date: '2 дня назад',
    },
    {
      id: 2,
      title: 'Законы Ньютона и их применение',
      subject: 'Физика',
      author: 'Дмитрий Петров',
      authorAvatar: 'ДП',
      likes: 38,
      downloads: 95,
      date: '4 дня назад',
    },
    {
      id: 3,
      title: 'Анализ "Евгения Онегина"',
      subject: 'Литература',
      author: 'Мария Сидорова',
      authorAvatar: 'МС',
      likes: 52,
      downloads: 140,
      date: '1 неделю назад',
    },
    {
      id: 4,
      title: 'Основы алгоритмов сортировки',
      subject: 'Информатика',
      author: 'Алексей Смирнов',
      authorAvatar: 'АС',
      likes: 67,
      downloads: 180,
      date: '3 дня назад',
    },
  ];

  const messages: Message[] = [
    {
      id: 1,
      from: 'Анна Иванова',
      avatar: 'AI',
      text: 'Привет! Можешь помочь с задачей по физике?',
      time: '10:30',
      unread: true,
    },
    {
      id: 2,
      from: 'Дмитрий Петров',
      avatar: 'ДП',
      text: 'Спасибо за конспект! Очень помог!',
      time: 'Вчера',
      unread: false,
    },
    {
      id: 3,
      from: 'Мария Сидорова',
      avatar: 'МС',
      text: 'Когда будет следующая консультация?',
      time: '2 дня назад',
      unread: false,
    },
  ];

  const events: Event[] = [
    {
      id: 1,
      title: 'Олимпиада по математике',
      date: '15 декабря',
      time: '14:00',
      location: 'Актовый зал',
      type: 'academic',
    },
    {
      id: 2,
      title: 'Турнир по волейболу',
      date: '18 декабря',
      time: '16:00',
      location: 'Спортзал',
      type: 'sport',
    },
    {
      id: 3,
      title: 'Новогодний концерт',
      date: '25 декабря',
      time: '18:00',
      location: 'Актовый зал',
      type: 'cultural',
    },
  ];

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Icon name="GraduationCap" size={24} />
            </div>
            <h1 className="text-xl font-bold">Школа 2087</h1>
          </div>
          
          <nav className="hidden md:flex gap-6">
            <Button variant={activeTab === 'home' ? 'default' : 'ghost'} onClick={() => setActiveTab('home')}>
              <Icon name="Home" size={18} className="mr-2" />
              Главная
            </Button>
            <Button variant={activeTab === 'students' ? 'default' : 'ghost'} onClick={() => setActiveTab('students')}>
              <Icon name="Users" size={18} className="mr-2" />
              Ученики
            </Button>
            <Button variant={activeTab === 'notes' ? 'default' : 'ghost'} onClick={() => setActiveTab('notes')}>
              <Icon name="BookOpen" size={18} className="mr-2" />
              Конспекты
            </Button>
            <Button variant={activeTab === 'messages' ? 'default' : 'ghost'} onClick={() => setActiveTab('messages')}>
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Сообщения
              {messages.filter(m => m.unread).length > 0 && (
                <Badge className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center" variant="destructive">
                  {messages.filter(m => m.unread).length}
                </Badge>
              )}
            </Button>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Icon name="Bell" size={20} />
            </Button>
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">ВЫ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="animate-fade-in">
          {activeTab === 'home' && (
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
          )}

          {activeTab === 'students' && (
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
          )}

          {activeTab === 'notes' && (
            <div className="space-y-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">Библиотека конспектов</h2>
                  <p className="text-muted-foreground">Делитесь знаниями и учитесь у других</p>
                </div>
                <Button>
                  <Icon name="Plus" size={18} className="mr-2" />
                  Добавить конспект
                </Button>
              </div>

              <Tabs defaultValue="all" className="w-full">
                <TabsList>
                  <TabsTrigger value="all">Все предметы</TabsTrigger>
                  <TabsTrigger value="math">Математика</TabsTrigger>
                  <TabsTrigger value="physics">Физика</TabsTrigger>
                  <TabsTrigger value="literature">Литература</TabsTrigger>
                  <TabsTrigger value="cs">Информатика</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-4 mt-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    {notes.map((note) => (
                      <Card key={note.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1">
                              <CardTitle className="line-clamp-1">{note.title}</CardTitle>
                              <CardDescription className="flex items-center gap-2 mt-2">
                                <Badge>{note.subject}</Badge>
                                <span className="text-xs">{note.date}</span>
                              </CardDescription>
                            </div>
                            <Button variant="ghost" size="icon">
                              <Icon name="BookmarkPlus" size={18} />
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="text-xs bg-gradient-to-br from-primary to-secondary text-white">
                                {note.authorAvatar}
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium">{note.author}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1">
                                <Icon name="Heart" size={16} />
                                {note.likes}
                              </span>
                              <span className="flex items-center gap-1">
                                <Icon name="Download" size={16} />
                                {note.downloads}
                              </span>
                            </div>
                            <Button size="sm">
                              <Icon name="Eye" size={16} className="mr-2" />
                              Открыть
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Сообщения</h2>
                <p className="text-muted-foreground">Общайтесь с одноклассниками</p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Card className="md:col-span-1">
                  <CardHeader>
                    <CardTitle className="text-base">Чаты</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ScrollArea className="h-[500px]">
                      <div className="space-y-1 p-4 pt-0">
                        {messages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex items-start gap-3 rounded-lg p-3 cursor-pointer transition-colors ${
                              message.unread ? 'bg-primary/10 hover:bg-primary/15' : 'hover:bg-accent/50'
                            }`}
                          >
                            <Avatar>
                              <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                                {message.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 overflow-hidden">
                              <div className="flex items-center justify-between gap-2">
                                <p className="font-semibold text-sm">{message.from}</p>
                                <span className="text-xs text-muted-foreground">{message.time}</span>
                              </div>
                              <p className="text-sm text-muted-foreground line-clamp-1">{message.text}</p>
                            </div>
                            {message.unread && (
                              <div className="h-2 w-2 rounded-full bg-primary"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                          AI
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">Анна Иванова</CardTitle>
                        <CardDescription className="text-xs">онлайн</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ScrollArea className="h-[350px] pr-4">
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-xs">
                              AI
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="rounded-lg bg-muted p-3">
                              <p className="text-sm">Привет! Можешь помочь с задачей по физике?</p>
                            </div>
                            <span className="text-xs text-muted-foreground ml-3 mt-1">10:30</span>
                          </div>
                        </div>

                        <div className="flex gap-3 justify-end">
                          <div className="flex-1 flex flex-col items-end">
                            <div className="rounded-lg bg-primary text-primary-foreground p-3 max-w-[80%]">
                              <p className="text-sm">Конечно! Какая именно тема?</p>
                            </div>
                            <span className="text-xs text-muted-foreground mr-3 mt-1">10:32</span>
                          </div>
                        </div>
                      </div>
                    </ScrollArea>
                    <div className="flex gap-2">
                      <Input placeholder="Написать сообщение..." className="flex-1" />
                      <Button size="icon">
                        <Icon name="Send" size={18} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;