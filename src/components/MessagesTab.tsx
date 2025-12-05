import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';
import { Message } from './types';

interface MessagesTabProps {
  messages: Message[];
}

const MessagesTab = ({ messages }: MessagesTabProps) => {
  return (
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
  );
};

export default MessagesTab;
