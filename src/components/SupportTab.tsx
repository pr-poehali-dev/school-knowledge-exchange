import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const SupportTab = () => {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!message.trim()) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, напишите сообщение',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setMessage('');
      setIsSubmitting(false);
      toast({
        title: 'Сообщение отправлено',
        description: 'Психолог получит ваше сообщение и свяжется с вами в ближайшее время',
      });
    }, 1000);
  };

  const tips = [
    {
      icon: 'Shield',
      title: 'Полная анонимность',
      description: 'Ваше имя не будет раскрыто без вашего согласия',
    },
    {
      icon: 'Lock',
      title: 'Конфиденциальность',
      description: 'Все сообщения защищены и доступны только психологу',
    },
    {
      icon: 'Heart',
      title: 'Профессиональная помощь',
      description: 'Квалифицированный психолог всегда готов помочь',
    },
    {
      icon: 'Clock',
      title: 'Быстрый ответ',
      description: 'Ответ обычно приходит в течение 24 часов',
    },
  ];

  const topics = [
    { label: 'Учебный стресс', icon: '📚' },
    { label: 'Отношения с друзьями', icon: '👥' },
    { label: 'Семейные проблемы', icon: '🏠' },
    { label: 'Самооценка', icon: '💭' },
    { label: 'Тревожность', icon: '😟' },
    { label: 'Другое', icon: '💬' },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h2 className="text-3xl font-bold tracking-tight">Психологическая поддержка</h2>
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <Icon name="Shield" size={12} className="mr-1" />
            Анонимно
          </Badge>
        </div>
        <p className="text-muted-foreground">
          Поделитесь своими переживаниями с профессиональным психологом в безопасной и конфиденциальной обстановке
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="MessageSquare" size={20} />
              Отправить сообщение
            </CardTitle>
            <CardDescription>
              Напишите о том, что вас беспокоит. Сообщение полностью анонимно.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                О чём вы хотите поговорить? (необязательно)
              </label>
              <div className="flex flex-wrap gap-2 mb-4">
                {topics.map((topic) => (
                  <Badge
                    key={topic.label}
                    variant="outline"
                    className="cursor-pointer hover:bg-primary/10 transition-colors"
                  >
                    <span className="mr-1">{topic.icon}</span>
                    {topic.label}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Ваше сообщение</label>
              <Textarea
                placeholder="Расскажите о том, что вас беспокоит. Чем подробнее вы опишете ситуацию, тем более точную помощь сможет оказать психолог..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[200px] resize-none"
              />
              <p className="text-xs text-muted-foreground mt-2">
                {message.length} символов
              </p>
            </div>

            <Button 
              className="w-full" 
              size="lg"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Icon name="Loader2" size={18} className="mr-2 animate-spin" />
                  Отправка...
                </>
              ) : (
                <>
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить анонимно
                </>
              )}
            </Button>

            <div className="flex items-start gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <Icon name="Info" size={16} className="text-blue-600 mt-0.5 shrink-0" />
              <p className="text-xs text-blue-900">
                <strong>Важно:</strong> Если вы переживаете острый кризис или мысли о самоповреждении, 
                немедленно обратитесь к психологу лично или позвоните на горячую линию: 8-800-2000-122
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="UserCircle" size={20} />
                О психологе
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl text-white shrink-0">
                  👨‍⚕️
                </div>
                <div>
                  <h4 className="font-semibold">Елена Викторовна</h4>
                  <p className="text-sm text-muted-foreground">Педагог-психолог</p>
                  <p className="text-xs text-muted-foreground mt-1">Стаж работы: 12 лет</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Специализация: работа с подростками, школьная адаптация, 
                разрешение конфликтов, стресс-менеджмент
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="MapPin" size={16} className="text-muted-foreground" />
                <span>Кабинет 215, 2 этаж</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Clock" size={16} className="text-muted-foreground" />
                <span>Пн-Пт: 9:00 - 17:00</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Почему это безопасно?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {tips.map((tip) => (
                  <div key={tip.title} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Icon name={tip.icon as any} size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{tip.title}</h4>
                      <p className="text-xs text-muted-foreground">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Icon name="Lightbulb" size={18} />
                Полезные ресурсы
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <a href="#" className="flex items-center gap-2 text-primary hover:underline">
                <Icon name="ExternalLink" size={14} />
                Телефон доверия для детей и подростков
              </a>
              <a href="#" className="flex items-center gap-2 text-primary hover:underline">
                <Icon name="ExternalLink" size={14} />
                Онлайн-чат психологической поддержки
              </a>
              <a href="#" className="flex items-center gap-2 text-primary hover:underline">
                <Icon name="ExternalLink" size={14} />
                Техники борьбы со стрессом
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SupportTab;
