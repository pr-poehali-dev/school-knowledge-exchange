import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import HomeTab from '@/components/HomeTab';
import StudentsTab from '@/components/StudentsTab';
import NotesTab from '@/components/NotesTab';
import MessagesTab from '@/components/MessagesTab';
import { Student, Achievement, Note, Message, Event } from '@/components/types';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 hover:bg-primary/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Icon name="GraduationCap" size={24} />
                </div>
                <h1 className="text-xl font-bold">SkillSwap Школа 2087</h1>
                <Icon name="Menu" size={20} className="ml-1" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon name="GraduationCap" size={24} />
                  </div>
                  SkillSwap Школа 2087
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-2">
                <Button 
                  variant={activeTab === 'home' ? 'default' : 'ghost'} 
                  className="justify-start h-12"
                  onClick={() => {
                    setActiveTab('home');
                    setMenuOpen(false);
                  }}
                >
                  <Icon name="Home" size={20} className="mr-3" />
                  Главная
                </Button>
                <Button 
                  variant={activeTab === 'students' ? 'default' : 'ghost'}
                  className="justify-start h-12"
                  onClick={() => {
                    setActiveTab('students');
                    setMenuOpen(false);
                  }}
                >
                  <Icon name="Users" size={20} className="mr-3" />
                  Ученики
                </Button>
                <Button 
                  variant={activeTab === 'notes' ? 'default' : 'ghost'}
                  className="justify-start h-12"
                  onClick={() => {
                    setActiveTab('notes');
                    setMenuOpen(false);
                  }}
                >
                  <Icon name="BookOpen" size={20} className="mr-3" />
                  Конспекты
                </Button>
                <Button 
                  variant={activeTab === 'messages' ? 'default' : 'ghost'}
                  className="justify-start h-12"
                  onClick={() => {
                    setActiveTab('messages');
                    setMenuOpen(false);
                  }}
                >
                  <Icon name="MessageCircle" size={20} className="mr-3" />
                  Сообщения
                  {messages.filter(m => m.unread).length > 0 && (
                    <Badge className="ml-auto h-6 w-6 rounded-full p-0 flex items-center justify-center" variant="destructive">
                      {messages.filter(m => m.unread).length}
                    </Badge>
                  )}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>

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
          {activeTab === 'home' && <HomeTab students={students} events={events} />}
          {activeTab === 'students' && <StudentsTab students={students} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
          {activeTab === 'notes' && <NotesTab notes={notes} />}
          {activeTab === 'messages' && <MessagesTab messages={messages} />}
        </div>
      </main>
    </div>
  );
};

export default Index;