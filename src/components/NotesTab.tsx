import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Note } from './types';

interface NotesTabProps {
  notes: Note[];
}

const NotesTab = ({ notes }: NotesTabProps) => {
  return (
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
  );
};

export default NotesTab;
